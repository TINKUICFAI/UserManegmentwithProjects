const jwt = require("jsonwebtoken");
const ResponseMiddleware = require("./ResponseMiddleware");
const serverConfig = require("../../config/server.json");
const UserService = require("../services/UserService");

const helpers = require("../util/helpers");

module.exports = () => {
  const verifyUserToken = async (req, res, next) => {
    console.log("AuthMiddleware => verifyUserToken");
    let usertoken = req.headers.authorization;

    try {
      if (!usertoken) {
        throw new Error("invalid_token");
      } else {
        let tokens = usertoken.split(" ");

        let token = tokens[1];

        let payload = jwt.verify(token, serverConfig.jwtSecret);
        let user = await UserService().fetch(payload.userId);
        if (user && !user.isActive) {
          throw new Error("ac_deactivated");
        }

        //checking user must exist in our DB else throwing error
        if (user) {
          console.log(`USER with ID ${user._id} entered.`);
          req.body.userId = user._id;
          req.authUser = user;
          next();
        } else throw new Error("invalid_token");
      }
    } catch (ex) {
      req.msg = "invalid_token";
      if (ex.message == "ac_deactivated") req.msg = ex.message;

      req.rCode = 0;
      ResponseMiddleware(req, res, next);
    }
  };

  const checkEmailAndMobileToEditProfile = async (req, res, next) => {
    console.log("AuthMiddleware => checkEmailAndMobileToEditProfile");
    try {
      let { countryCode, mobile, email, userId } = req.body;
      console.log("userId");
      console.log(userId);
      let mobileExist = null;
      if (countryCode && mobile) {
        var query = { countryCode, mobile, _id: { $ne: userId } };
        console.log(query);

        mobileExist = await UserService().fetchByQueryToEdit(query);
      }
      if (mobileExist) {
        req.rCode = 0;
        req.msg = "mobile_exist";
        ResponseMiddleware(req, res, next);
      } else {
        if (email) {
          query = { email, _id: { $ne: userId } };
          console.log(query);
          let emailExist = await UserService().fetchByQueryToEdit(query);
          if (emailExist) {
            req.rCode = 0;
            req.msg = "email_exist";
            ResponseMiddleware(req, res, next);
          } else {
            next();
          }
        } else {
          next();
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const validateTokenForOtp = async (req, res, next) => {
    console.log("AuthMiddleware => validateTokenForOtp");
    try {
      let { otp_for } = req.body;
      if (otp_for == "change_mobile") {
        verifyUserToken(req, res, next);
      } else {
        next();
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const validateToken = async (req, res, next) => {
    console.log("AuthMiddleware => validateToken");
    try {
      let { user_type } = req.body;
      if (user_type == "user") {
        verifyUserToken(req, res, next);
      }
      if (user_type == "admin") {
        isAdmin(req, res, next);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return {
    verifyUserToken,
    checkEmailAndMobileToEditProfile,
    validateTokenForOtp,
    validateToken,
  };
};
