const mongoose = require('mongoose');

// schéma de données pour les genres
    // _id, nom

    let schemaGenre = mongoose.Schema({
        
        _id: {
            type: String, 
            require: true
        },
        nom: {
            type: String, 
            require: true
        }
    });

let Genres = module.exports = mongoose.model('Genres', schemaGenre);

// obtenir les genres de la BD...
    module.exports.getGenres = (callback, limit) => {
        Genres.find(callback).limit(limit);
    };
// obtenir un genre par son _id de la BD...
    module.exports.getGenreById = (idGenre, callback) => {
        Genres.findById(idGenre, callback);
    };
// ajout d'un genre dans la BD
    module.exports.ajoutGenre = (genre, callback) => {
        Genres.create(genre, callback);
    };
// supprimer un genre de la BD
    module.exports.supprimeGenre = (idGenre, callback) => {
        var query = { "_id": idGenre };
        Genres.deleteOne(query, callback);
    };
// modifier un genre de la BD
    module.exports.modifieGenre = (idGenre, genre, callback) => {
        var query = { "_id": idGenre };
        var options = { };
        var nouveauGenre = {
            _id: genre._id,
            nom: genre.nom,
        };
        Genres.findOneAndUpdate(query, nouveauGenre, options, callback);
    }