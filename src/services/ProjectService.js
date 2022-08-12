const Project = require("../models/Project");
const helpers = require("../util/helpers.js");

module.exports = () => {
  const addProject = (data) => {
    return new Promise(function (resolve, reject) {
      const Projects = new Project({
        name: data.name,
        description: data.description,
      });
      Projects.save().then(resolve).catch(reject);
    });
  };

  const updateProject = (id, data) => {
    console.log("SubProjectService => updateProject");
    return new Promise(async function (resolve, reject) {
      let result = await Project.findByIdAndUpdate({ _id: id }, data)
        .then(resolve)
        .catch(reject);
    });
  };

  const fetchProject = (id) => {
    return new Promise(function (resolve, reject) {
      let orm = Project.findById(id).select(" -time -__v");
      orm.then(resolve).catch(reject);
    });
  };

  const fetchProjectByQuery = (query, page, limit) => {
    console.log("SubProjectService => fetchProjectByQuery");
    return new Promise(function (resolve, reject) {
      let orm = Project.find(query)
        .select(" -time -__v")
        .sort({ _id: -1 })
        .skip(page * limit)
        .limit(limit);

      orm.then(resolve).catch(reject);
    });
  };

  const fetchActivity = (id) => {
    console.log("ProjectService => fetchActivity");
    return new Promise(function (resolve, reject) {
      let orm = UserActivity.findById(id)
        .populate("Project", "name description image")
        .select(" -__v");

      orm.then(resolve).catch(reject);
    });
  };

  const countProject = (query) => {
    return new Promise(function (resolve, reject) {
      let orm = Project.countDocuments(query);
      orm.then(resolve).catch(reject);
    });
  };

  const deleteProject = (id) => {
    return new Promise(function (resolve, reject) {
      let orm = Project.deleteOne({ _id: id });
      orm.then(resolve).catch(reject);
    });
  };

  return {
    addProject,
    updateProject,
    fetchProject,
    fetchProjectByQuery,
    countProject,
    fetchActivity,
    deleteProject,
  };
};
