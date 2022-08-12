const UserService = require("../services/UserService");
const helpers = require("../util/helpers.js");

module.exports = () => {
  const login = async (req, res, next) => {
    console.log("AuthController => login");
    let { email, password } = req.body;

    let email_query = { email };
    let token = "";
    let user = await UserService().fetchByQuery(email_query);
    console.log("user");
    console.log(user);
    if (user) {
      let passwordVerify = await UserService().verifyPassword(
        user._id,
        password
      );

      if (!passwordVerify) {
        req.rCode = 0;
        req.msg = "incorrect_password";
        req.rData = { token };
      } else {
        token = await helpers().createJWT({ userId: user._id });
        await UserService().updateProfile(user._id, { token: token });
        user = await UserService().fetchByQuery(email_query);

        let { name, email, _id, createdAt, updatedAt, isActive } = user;

        req.rData = { name, email, _id, createdAt, updatedAt, isActive, token };
      }
    } else {
      req.rCode = 0;
      req.msg = "user_not_found";
      req.rData = {};
    }

    next();
  };

  const logout = async (req, res, next) => {
    console.log("AuthController => logout");
    let { userId } = req.body;

    let user = { token: null };
    user = await UserService().updateProfile(userId, user);
    req.msg = "logout";
    next();
  };
  return {
    login,
    logout,
  };
};
