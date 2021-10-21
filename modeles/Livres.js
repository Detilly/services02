const mongoose = require('mongoose');

// schéma de données pour les livres
    // _id, titre, auteur, résumé, éditeur, pages, langue, date, prix

    let schemaLivre = mongoose.Schema({
        
        _id: {
            type: Number, 
            require: true
        },
        titre: {
            type: String, 
            require: true
        },
        auteur: {
            type: String, 
            require: true
        },
        résumé: {
            type: String, 
            require: true
        },
        éditeur: {
            type: String, 
            require: true
        },
        pages: {
            type: Number, 
            require: true
        },
        langue: {
            type: String, 
            require: true
        },
        date: {
            type: String, 
            require: true
        },
        prix: {
            type: Number, 
            require: true
        },
        genre: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        }
    });

let Livres = module.exports = mongoose.model('Livres', schemaLivre);

// obtenir les livres de la BD...
    module.exports.getLivres = (callback, limit) => {
        Livres.find(callback).limit(limit);
    };
// obtenir un livre par son _id de la BD...
    module.exports.getLivreById = (idLivre, callback) => {
        Livres.findById(idLivre, callback);
    };
// ajout d'un livre dans la BD
    module.exports.ajoutLivre = (livre, callback) => {
        Livres.create(livre, callback);
    };
// supprimer un livre de la BD
    module.exports.supprimeLivre = (idLivre, callback) => {
        var query = { "_id": idLivre };
        Livres.deleteOne(query, callback);
    };
// modifier un livre de la BD
    module.exports.modifieLivre = (idLivre, livre, callback) => {
        var query = { "_id": idLivre };
        var options = { };
        var nouveauLivre = {
            _id: livre._id,
            titre: livre.titre,
            auteur: livre.auteur,
            résumé: livre.résumé,
            éditeur: livre.éditeur,
            pages: livre.pages,
            langue: livre.langue,
            date: livre.date,
            prix: livre.prix,
            genre: livre.genre,
            image: livre.image
        };
        Livres.findOneAndUpdate(query, nouveauLivre, options, callback);
    }