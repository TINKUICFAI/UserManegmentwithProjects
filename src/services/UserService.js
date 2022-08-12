const User = require("../models/User");
const helpers = require("../util/helpers.js");

module.exports = () => {
  const registerUser = (data) => {
    return new Promise(function (resolve, reject) {
      User.create(data).then(resolve).catch(reject);
    });
  };

  const fetch = (id) => {
    return new Promise(function (resolve, reject) {
      let orm = User.findById(id).select("-password -time -__v");
      orm.then(resolve).catch(reject);
    });
  };

  const fetchByQuery = (query) => {
    console.log("UserService => fetchByQuery");
    return new Promise(function (resolve, reject) {
      let orm = User.findOne(query).select("-password").sort({ _id: -1 });
      orm.then(resolve).catch(reject);
    });
  };

  const verifyPassword = (id, password) => {
    console.log("UserService => verifyPassword");
    return new Promise(async function (resolve, reject) {
      let user = await User.findById(id);

      if (!user) resolve(false);
      let v = await helpers().checkPassword(password, user.password);

      return resolve(v);
    });
  };

  const updateProfile = (userId, data) => {
    console.log("UserService => resetPassword");
    return new Promise(async function (resolve, reject) {
      let user = await User.findByIdAndUpdate({ _id: userId }, data)
        .then(resolve)
        .catch(reject);
    });
  };

  const fetchByQueryToEdit = (query) => {
    console.log("UserService => fetchByQuery");
    return new Promise(function (resolve, reject) {
      let orm = User.findOne(query).select("-password");

      orm.then(resolve).catch(reject);
    });
  };

  const getUser = (query, page, limit) => {
    return new Promise(function (resolve, reject) {
      let orm = User.find(query)
        .select("-password -__v")
        .sort({ _id: -1 })
        .skip(page * limit)
        .limit(limit);
      orm.then(resolve).catch(reject);
    });
  };

  const countUser = (query) => {
    return new Promise(function (resolve, reject) {
      let orm = User.countDocuments(query);
      orm.then(resolve).catch(reject);
    });
  };

  const deleteUser = (id) => {
    return new Promise(function (resolve, reject) {
      let orm = User.deleteOne({ _id: id });
      orm.then(resolve).catch(reject);
    });
  };

  const addUser = (data) => {
    return new Promise(function (resolve, reject) {
      User.create(data).then(resolve).catch(reject);
    });
  };

  const fetchUserQueries = (query, page = null, limit = null) => {
    console.log("UserService => fetchUserQueries");
    return new Promise(function (resolve, reject) {
      let orm = UserQuery.find(query)
        .populate("userId")
        .sort({ _id: -1 })
        .select(" -time -__v")
        .skip(page * limit)
        .limit(limit);

      orm.then(resolve).catch(reject);
    });
  };

  return {
    registerUser,
    fetch,
    fetchByQuery,
    verifyPassword,
    updateProfile,
    fetchByQueryToEdit,
    getUser,
    countUser,
    deleteUser,
    addUser,
    fetchUserQueries,
  };
};
