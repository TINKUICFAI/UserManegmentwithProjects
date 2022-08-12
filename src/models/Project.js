const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ProjectSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
