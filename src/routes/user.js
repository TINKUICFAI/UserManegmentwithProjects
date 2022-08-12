const userRouter = require("express").Router();
const UserValidator = require("../validators/UserValidator");
const UserController = require("../controllers/UserController");
const ErrorHandlerMiddleware = require("../middlewares/ErrorHandlerMiddleware");
const ResponseMiddleware = require("../middlewares/ResponseMiddleware");

userRouter.post(
  "/register",
  UserValidator().validateEmailAndPassword,
  ErrorHandlerMiddleware(UserController().registerUser),
  ResponseMiddleware
);

module.exports = userRouter;
