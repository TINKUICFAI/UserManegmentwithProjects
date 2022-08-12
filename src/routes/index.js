const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/user", require("./user"));
router.use("/project", require("./projects"));
router.use("/tasks", require("./Tasks"));

module.exports = router;
