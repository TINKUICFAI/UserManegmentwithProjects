const express = require("express");
const authRouter = express.Router();
const AuthValidator = require("../validators/AuthValidator");
const AuthController = require("../controllers/AuthController");
const ErrorHandlerMiddleware = require("../middlewares/ErrorHandlerMiddleware");
const ResponseMiddleware = require("../middlewares/ResponseMiddleware");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

authRouter.post(
  "/login",
  // AuthValidator().authValidator,
  AuthValidator().validateLogin,
  ErrorHandlerMiddleware(AuthController().login),
  ResponseMiddleware
);

authRouter.get(
  "/logout",
  AuthMiddleware().verifyUserToken,
  ErrorHandlerMiddleware(AuthController().logout),
  ResponseMiddleware
);

module.exports = authRouter;
