const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const TasksSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, default: null },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

var Tasks = mongoose.model("Tasks", TasksSchema);

module.exports = Tasks;
