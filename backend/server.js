// npm install cors
// npm install -g nodemon
//> nodemon server.js -->  por levantar server
// npm install --save body-parser --> para que entienda file JSON


var express = require("express");
var cors = require('cors');
var bp = require('body-parser');

var app = express();
var corsOpt = {
  origin: 'http://localhost:4200',
  optionsSuccesStatus: 200
}

let tareas = [ 
  { _id: 1, trabajo: "primera tarea", usuario: "David  Gonzales" },
  { _id: 2, trabajo: "segunda tarea", usuario: "Daniel Torres" },
];
//

app.use(bp.json());// parsea el body de las peticiones en 'json'
let api = express.Router();
api.use(cors());// aplicar siempre politica de 'CORS'


api.get("/tareas", cors(corsOpt), (req, res) => {
  res.json(tareas);
}); 

api.get("/tareas/:username", cors(corsOpt), (req, res) => {
  let username = req.params.username;
  let resultado = tareas.filter(tarea => tarea.usuario == username)
  res.json(resultado);
}); 


api.post("/tarea", cors(corsOpt), (req, res) => {
tareas.push(req.body);
res.json(req.body); 
}); 

app.use('/api', api);

app.listen(7080);
