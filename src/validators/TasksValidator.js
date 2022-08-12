const { Validator } = require("node-input-validator");
const { validate, validations } = require("./index");

module.exports = () => {
  const validateTasksCategory = async (req, res, next) => {
    console.log(req.body);
    const v = new Validator(req.body, {
      name: validations.general.requiredString,
      projectId: validations.general.requiredString,
    });

    validate(v, res, next, req);
  };

  const validateTasks = async (req, res, next) => {
    const v = new Validator(req.body, {
      name: validations.general.requiredString,
    });

    validate(v, res, next, req);
  };

  const validateCategory = async (req, res, next) => {
    const v = new Validator(req.query, {
      category: validations.Tasks.category,
    });

    validate(v, res, next, req);
  };

  const validateUserTasks = async (req, res, next) => {
    const v = new Validator(req.body, {
      Taskss: validations.general.required,
    });

    validate(v, res, next, req);
  };

  const validateDeleteCategory = async (req, res, next) => {
    const v = new Validator(req.body, {
      category: validations.Tasks.category,
    });

    validate(v, res, next, req);
  };

  const validateStatus = async (req, res, next) => {
    const v = new Validator(req.body, {
      status: validations.general.required,
      type: validations.general.required,
      id: validations.general.required,
    });

    validate(v, res, next, req);
  };

  return {
    validateTasksCategory,
    validateTasks,
    validateCategory,
    validateUserTasks,
    validateDeleteCategory,
    validateStatus,
  };
};
