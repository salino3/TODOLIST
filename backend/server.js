// npm install cors
// npm install -g nodemon
// nodemon server.js -->  por levantar server
// npm install --save body-parser --> para que entienda file JSON


var express = require("express");
var cors = require('cors');
var bp = require('body-parser');

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

app.use(bp.json());// parsea el body de las peticiones en 'json'
var api = express.Router();
api.use(cors());// aplicar siempre politica de 'CORS'


api.get("/tareas", cors(corsOpt), (req, res) => {
  res.json(tareas);
}); 

api.post("/tarea", cors(corsOpt), (req, res) => {
tareas.push(req.body);
res.sendStatus(200);
}); 

app.use('/api', api);

app.listen(7080);
