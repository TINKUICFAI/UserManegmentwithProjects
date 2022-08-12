const Tasks = require("../models/Tasks");
const helpers = require("../util/helpers.js");

module.exports = () => {
  const addTasks = (data) => {
    return new Promise(function (resolve, reject) {
      const Task = new Tasks({
        name: data.name,
        description: data.description,
        projectId: data.projectId,
      });
      Task.save().then(resolve).catch(reject);
    });
  };

  const updateTasks = (id, data) => {
    console.log("TasksubCategoryService => updateTasks");
    return new Promise(async function (resolve, reject) {
      let result = await Tasks.findByIdAndUpdate({ _id: id }, data)
        .then(resolve)
        .catch(reject);
    });
  };

  const fetchTasks = (id) => {
    return new Promise(function (resolve, reject) {
      let orm = Tasks.findById(id).select(" -time -__v");
      orm.then(resolve).catch(reject);
    });
  };

  const fetchTasksByQuery = (query, page = null, limit = null) => {
    console.log("TasksubCategoryService => fetchTasksByQuery");
    return new Promise(function (resolve, reject) {
      let orm = Tasks.find(query)
        .select(" -time -__v")
        .sort({ _id: -1 })
        .skip(page * limit)
        .limit(limit);

      orm.then(resolve).catch(reject);
    });
  };

  const countTasks = (query) => {
    return new Promise(function (resolve, reject) {
      let orm = Tasks.countDocuments(query);
      orm.then(resolve).catch(reject);
    });
  };

  const deleteTasks = (id) => {
    return new Promise(function (resolve, reject) {
      let orm = Tasks.deleteOne({ _id: id });
      orm.then(resolve).catch(reject);
    });
  };

  return {
    addTasks,
    updateTasks,
    fetchTasks,
    fetchTasksByQuery,
    countTasks,
    deleteTasks,
  };
};
