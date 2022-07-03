// npm install cors
// npm install -g nodemon
// nodemon server.js -->  por levantar server

var express = require("express");
var cors = require('cors');

var app = express();
var corsOpt = {
  origin: 'http://localhost:4200',
  optionsSuccesStatus: 200
}

var tareas = [
  { trabajo: "primera tarea", usuario: "David  Gonzales" },
  { trabajo: "segunda tarea", usuario: "Daniel Torres" },
];
//

app.use(cors());

app.get("/tareas", cors(corsOpt), (req, res) => {
  res.json(tareas);
});

app.listen(1234);
