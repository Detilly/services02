const mongoose = require('mongoose');

// schéma de données pour les clients
    // _id, nom, prenom, adresse, tel, prets

    let schemaClient = mongoose.Schema({
        _id: {
            type: String, 
            require: true
        },
        nom: {
            type: String, 
            require: true
        },
        prenom: {
            type: String, 
            require: true
        },
        adresse: {
            type: String, 
            require: true
        },
        tel: {
            type: String, 
            require: true
        },
        prets: {
            type: Array, 
            require: true
        }
    });

let Clients = module.exports = mongoose.model('Clients', schemaClient);

// obtenir les Clients de la BD...
    module.exports.getClients = (callback, limit) => {
        Clients.find(callback).limit(limit);
    };
// obtenir un client par son _id de la BD...
    module.exports.getClientById = (idClient, callback) => {
        Clients.findById(idClient, callback);
    };
// ajout d'un client dans la BD
    module.exports.ajoutClient = (client, callback) => {
        Clients.create(client, callback);
    };
// supprimer un client de la BD
    module.exports.supprimeClient = (idClient, callback) => {
        var query = { "_id": idClient };
        Clients.deleteOne(query, callback);
    };
// modifier un client de la BD
    module.exports.modifieClient = (idClient, client, callback) => {
        var query = { "_id": idClient };
        var options = { };
        var nouveauClient = {
            _id: client._id,
            nom: client.nom,
            prenom: client.prenom,
            adresse: client.adresse,
            tel: client.tel,
            prets: client.prets
        };
        Clients.findOneAndUpdate(query, nouveauClient, options, callback);
    }