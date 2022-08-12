const UserService = require("../services/UserService");
const helpers = require("../util/helpers.js");

module.exports = () => {
  const registerUser = async (req, res, next) => {
    console.log("UserController => registerMobile");
    let { email, password } = req.body;

    let user = { email };
    user.password = await helpers().hashPassword(password);

    user = await UserService().registerUser(user);
    req.rData = { user };
    req.msg = "user_added";
    next();
  };

  return {
    registerUser,
  };
};
