const express = require('express');
const router = express.Router();
const Clients = require('../modeles/Clients.js');

router.use(express.json());

router.get('/', (requete, reponse) => {
    // requete à mongodb pour lire les clients
    Clients.getClients((err, clients) => {
        if (err) throw err;
        reponse.json(clients);
    }, 25);
});

router.get('/', (requete, reponse) => {
    // faire requete pour lire les clients
        Clients.getClients((err, clients) => {
            // verifier si erreur
                if (err) throw err;
                reponse.json(clients)
        }, 25);
});

router.get('/:idClient', (requete, reponse) => {
    //requete à MongoDB pour lire un client...
    Clients.getClientById(requete.params.idClient, (err, client) => {
        if (err) throw err;
        reponse.json(client);
    });
});

router.post('/', (requete, reponse) => {
    // requete à MongoDB pour ajouter un client...
        let client = requete.body;
        Clients.ajoutClient(client, (err, client) => {
            if (err) throw err;
            reponse.json(client);
        });
});

router.delete('/:idClient', (requete, reponse) => {
    //requete à MongoDB pour supprimer un client...
    Clients.supprimeClient(requete.params.idClient, (err, client) => {
        if (err) throw err;
        reponse.json(client);
    });
});

router.put('/:idClient', (requete, reponse) => {
    //requete à MongoDB pour modifier un client...
    let modifClient = requete.body
    Clients.modifieClient(requete.params.idClient, modifClient,  (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

module.exports = router;