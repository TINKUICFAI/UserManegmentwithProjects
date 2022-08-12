const TasksService = require("../services/TasksService");
const ProjectService = require("../services/ProjectService");

module.exports = () => {
  const addTasks = async (req, res, next) => {
    console.log("TasksController => addTasks");
    let { name, description, projectId, tasksId } = req.body;
    // projectId = JSON.parse(projectId);
    let data = { name, description, projectId };

    let Project_details = await ProjectService().fetchProject(projectId);

    if (!Project_details) {
      req.rData = {};
      req.msg = "project_not_found";
    }
    if (!tasksId) {
      let result = await TasksService().addTasks(data);

      let Tasks = await TasksService().fetchTasks(result._id);
      req.rData = { Tasks };
      req.msg = "Tasks_added";
    } else {
      let result = await TasksService().updateTasks(tasksId, data);

      let Tasks = await TasksService().fetchTasks(tasksId);
      req.rData = { Tasks };
      req.msg = "Tasks_updated";
    }
    next();
  };

  const getAllTasks = async (req, res, next) => {
    console.log("TasksController => getAllTaskss");
    let { page, limit, search } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    let fetch_query = {};
    if (search)
      fetch_query.name = { $regex: ".*" + search + ".*", $options: "i" };
    let Tasks = await TasksService().fetchTasksByQuery(
      fetch_query,
      page,
      limit
    );
    let total_Tasks = await TasksService().countTasks(fetch_query);
    req.msg = "Tasks_list";
    req.rData = { page, limit, search, total_Tasks, Tasks };

    next();
  };

  const getTasksDetails = async (req, res, next) => {
    console.log("TasksController => getTasksDetails");
    let { tasksid } = req.query;
    let Tasks_details = await TasksService().fetchTasks(tasksid);

    req.msg = "Tasks_details";
    req.rData = { Tasks_details };

    next();
  };

  return {
    addTasks,
    getAllTasks,
    getTasksDetails,
  };
};
