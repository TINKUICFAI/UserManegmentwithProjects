const express = require("express");
const ProjectRouter = express.Router();
const ProjectController = require("../controllers/ProjectController");
const ProjectValidator = require("../validators/ProjectValidator");
const AuthValidator = require("../validators/AuthValidator");
const ErrorHandlerMiddleware = require("../middlewares/ErrorHandlerMiddleware");
const ResponseMiddleware = require("../middlewares/ResponseMiddleware");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

ProjectRouter.post(
  "/addProject",
  AuthMiddleware().verifyUserToken,
  ProjectValidator().validateAddProject,
  ErrorHandlerMiddleware(ProjectController().addProject),
  ResponseMiddleware
);

ProjectRouter.get(
  "/getAllProject",
  AuthMiddleware().verifyUserToken,
  ErrorHandlerMiddleware(ProjectController().getAllProject),
  ResponseMiddleware
);

ProjectRouter.get(
  "/getProjectDetails",
  AuthMiddleware().verifyUserToken,
  ErrorHandlerMiddleware(ProjectController().getProjectDetails),
  ResponseMiddleware
);

module.exports = ProjectRouter;
