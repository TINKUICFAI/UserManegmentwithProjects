const colors = require("colors");
const messages = require("../util/messages");

module.exports = (req, res, next, customMsg = "") => {
  console.log("ResponseMiddleware => exports");

  const data = req.rData ? req.rData : {};
  const code = req.rCode != undefined ? req.rCode : 1;
  const message = customMsg
    ? customMsg
    : req.msg
    ? messages()[req.msg]
    : "success";

  //logging response
  console.log(
    colors.bgBlue(
      `${req.method} '${req.originalUrl}' => '${message}', Code: ${code}`
    )
  );

  res.send({ code, message, data });
};
