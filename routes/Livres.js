const express = require('express');
const router = express.Router();
const Livres = require('../modeles/Livres.js');

router.use(express.json());

router.get('/', (requete, reponse) => {
    // requete à mongodb pour lire les livres
    Livres.getLivres((err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    }, 25);
});

router.get('/:idLivre', (requete, reponse) => {
    //requete à MongoDB pour lire un livre...
    Livres.getLivreById(requete.params.idLivre, (err, livre) => {
        if (err) throw err;
        reponse.json(livre);
    });
});

router.post('/', (requete, reponse) => {
    // requete à MongoDB pour ajouter un livre...
        let livre = requete.body;
        Livres.ajoutLivre(livre, (err, livre) => {
            if (err) throw err;
            reponse.json(livre);
        });
});

router.delete('/:idLivre', (requete, reponse) => {
    //requete à MongoDB pour lire les livres...
    Livres.supprimeLivre(requete.params.idLivre, (err, livre) => {
        if (err) throw err;
        reponse.json(livre);
    });
});

router.put('/:idLivre', (requete, reponse) => {
    //requete à MongoDB pour modifier les livres...
    let modifLivre = requete.body
    Livres.modifieLivre(requete.params.idLivre, modifLivre,  (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

module.exports = router;