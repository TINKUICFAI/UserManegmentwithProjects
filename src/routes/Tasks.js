const express = require("express");
const TasksRouter = express.Router();
const TasksController = require("../controllers/TasksController");
const TasksValidator = require("../validators/TasksValidator");
const AuthValidator = require("../validators/AuthValidator");
const ErrorHandlerMiddleware = require("../middlewares/ErrorHandlerMiddleware");
const ResponseMiddleware = require("../middlewares/ResponseMiddleware");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

TasksRouter.post(
  "/addTask",
  AuthMiddleware().verifyUserToken,
  TasksValidator().validateTasksCategory,
  ErrorHandlerMiddleware(TasksController().addTasks),
  ResponseMiddleware
);

TasksRouter.get(
  "/getAllTasks",
  AuthMiddleware().verifyUserToken,
  ErrorHandlerMiddleware(TasksController().getAllTasks),
  ResponseMiddleware
);

TasksRouter.get(
  "/getTasksDetails",
  AuthMiddleware().verifyUserToken,
  ErrorHandlerMiddleware(TasksController().getTasksDetails),
  ResponseMiddleware
);

module.exports = TasksRouter;
