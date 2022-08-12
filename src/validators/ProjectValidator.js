const { Validator } = require("node-input-validator");
const { validate, validations } = require("./index");

module.exports = () => {
  const validateSubProject = async (req, res, next) => {
    const v = new Validator(req.body, {
      name: validations.general.requiredString,
      Project: validations.Project.Project,
    });

    validate(v, res, next, req);
  };

  const validateAddProject = async (req, res, next) => {
    const v = new Validator(req.body, {
      name: validations.general.requiredString,
    });

    validate(v, res, next, req);
  };

  const validateProject = async (req, res, next) => {
    const v = new Validator(req.query, {
      Project: validations.Project.Project,
    });

    validate(v, res, next, req);
  };

  const validateSubProjectId = async (req, res, next) => {
    const v = new Validator(req.query, {
      sub_Project: validations.Project.sub_Project,
    });

    validate(v, res, next, req);
  };

  const validateUserActivity = async (req, res, next) => {
    const v = new Validator(req.body, {
      Project: validations.Project.sub_Project,
      selected_time: validations.general.requiredString,
    });

    validate(v, res, next, req);
  };

  const validateDeleteProject = async (req, res, next) => {
    const v = new Validator(req.body, {
      Project: validations.Project.Project,
    });

    validate(v, res, next, req);
  };

  const validateDeleteSubProject = async (req, res, next) => {
    const v = new Validator(req.body, {
      sub_Project: validations.Project.sub_Project,
    });

    validate(v, res, next, req);
  };

  const validateProjectStatus = async (req, res, next) => {
    const v = new Validator(req.body, {
      status: validations.general.required,
      Project_type: validations.general.required,
      id: validations.general.required,
    });

    validate(v, res, next, req);
  };

  const validateActivityId = async (req, res, next) => {
    const v = new Validator(req.query, {
      activity_id: validations.user.activity,
    });

    validate(v, res, next, req);
  };

  return {
    validateSubProject,
    validateAddProject,
    validateProject,
    validateSubProjectId,
    validateUserActivity,
    validateDeleteProject,
    validateDeleteSubProject,
    validateProjectStatus,
    validateActivityId,
  };
};
