const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    token: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

//userSchema.virtual('ID').get(function() { return this._id; });
var User = mongoose.model("User", userSchema);

module.exports = User;
