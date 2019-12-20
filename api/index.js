const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inicia app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando db

mongoose.connect('mongodb://localhost:27017/vendasdb', { useNewUrlParser:true, useUnifiedTopology: true });

requireDir('./src/models');



//Routs
app.use('/', require("./src/routes"));

app.listen(3001);