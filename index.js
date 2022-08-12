const express = require('express');
const server = require('./config/server');
var cors = require('cors')
const PORT = server.port || 8080;
const app = express();
app.use(express.static(__dirname));
var bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(fileUpload());

app.use(cors())

app.use("/api", require("./src/routes"));
app.listen(PORT,()=>{
  console.log('Server listening on port '+PORT);
});
