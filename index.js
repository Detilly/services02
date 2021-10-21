const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://jDetilly:XnXFoigBHGnFi57v@cluster0.qjb6e.mongodb.net/labo01?retryWrites=true&w=majority'); 

let db = mongoose.connection;
db.on('error', (err) => { console.log('erreur de la BD', err)});
db.once('open', () => {console.log('connexion de la BD OK!')});

app.listen(8000, () => {console.log('Service Web fonctionnel sur 8000')});