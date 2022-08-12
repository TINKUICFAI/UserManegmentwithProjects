const ProjectService = require("../services/ProjectService");

module.exports = () => {
  const addProject = async (req, res, next) => {
    console.log("ProjectController => addProject");
    let { name, description, image, sub_Project, projectid } = req.body;
    let data = { name, description, image };
    if (!projectid) {
      let result = await ProjectService().addProject(data);

      console.log("redf", result);

      Project = await ProjectService().fetchProject(result._id);
      req.rData = { Project };
      req.msg = "Project_added";
    } else {
      let update_result = await ProjectService().updateProject(projectid, data);

      Project = await ProjectService().fetchProject(projectid);
      req.rData = { Project };
      req.msg = "Project_updated";
    }
    next();
  };

  const getAllProject = async (req, res, next) => {
    console.log("UserController => getAllProject");
    let { page, limit, search } = req.query;
    page = page ? parseInt(page) : null;
    limit = limit ? parseInt(limit) : null;
    let fetch_query = {};
    if (search)
      fetch_query.name = { $regex: ".*" + search + ".*", $options: "i" };
    let projects = await ProjectService().fetchProjectByQuery(
      fetch_query,
      page,
      limit
    );
    let total_Project = await ProjectService().countProject(fetch_query);
    req.msg = "Project_list";
    req.rData = { page, limit, search, total_Project, projects };

    next();
  };

  const getProjectDetails = async (req, res, next) => {
    console.log("ProjectController => getProjectDetails");
    let { projectid } = req.query;
    let Project_details = await ProjectService().fetchProject(projectid);

    req.msg = "Project_details";
    req.rData = { Project_details };

    next();
  };

  return {
    addProject,
    getAllProject,
    getProjectDetails,
  };
};
