const express = require('express');
const router = express.Router();
const Genres = require('../modeles/Genres.js');

router.use(express.json());

router.get('/', (requete, reponse) => {
    // requete à mongodb pour lire les genres
    Genres.getGenres((err, genres) => {
        if (err) throw err;
        reponse.json(genres);
    }, 25);
});

router.get('/:idGenre', (requete, reponse) => {
    //requete à MongoDB pour lire un genre...
    Genres.getGenreById(requete.params.idGenre, (err, genre) => {
        if (err) throw err;
        reponse.json(genre);
    });
});

router.post('/', (requete, reponse) => {
    // requete à MongoDB pour ajouter un genre...
        let genre = requete.body;
        Genres.ajoutGenre(genre, (err, genre) => {
            if (err) throw err;
            reponse.json(genre);
        });
});

router.delete('/:idGenre', (requete, reponse) => {
    //requete à MongoDB pour lire les genres...
    Genres.supprimeGenre(requete.params.idGenre, (err, genre) => {
        if (err) throw err;
        reponse.json(genre);
    });
});

router.put('/:idGenre', (requete, reponse) => {
    //requete à MongoDB pour modifier les genres...
    let modifGenre = requete.body
    Genres.modifieGenre(requete.params.idGenre, modifGenre,  (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

module.exports = router;