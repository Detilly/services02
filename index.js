const express = require('express');
const mongoose = require('mongoose');
const app = express();
const livresRouter = require('./routes/Livres');
app.use('/api/livres', livresRouter);
const clientsRouter = require('./routes/Clients');
app.use('/api/clients', clientsRouter);

app.use(express.json());

mongoose.connect('mongodb+srv://jDetilly:XnXFoigBHGnFi57v@cluster0.qjb6e.mongodb.net/labo01?retryWrites=true&w=majority'); 

let db = mongoose.connection;
db.on('error', (err) => { console.log('erreur de la BD', err)});
db.once('open', () => {console.log('connexion de la BD OK!')});

app.get('/', (requete, reponse) => {
    reponse.send(`Utilisez /api/livres pour faire un get des livres... <br> 
                    Utilisez /api/clients pour faire un get des clients...`);
});

app.listen(8000, () => {console.log('Service Web fonctionnel sur 8000')});