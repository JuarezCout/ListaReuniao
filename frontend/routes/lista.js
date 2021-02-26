const express = require('express');
const router = express.Router();
const listaController = require('../controllers/lista');

/* router.get('/listas', listaController.getAllLista);
router.post('/listas', listaController.newLista);
router.delete('/listas', listaController.deleteAllLista);

router.get('/listas/:name', listaController.getOneLista);
router.post('/listas/:name', listaController.newComment);
router.delete('/listas/:name', listaController.deleteOneLista);

module.exports = router; */


module.exports = function (app) {
    app
        .get('/listas', listaController.getAllLista)
        .post('/listas', listaController.newLista)

    app
        .get('/listas/:id', listaController.getOneLista)
        .post('/listas/:id', listaController.newComment)
        .delete('/listas/:id', listaController.deleteOneLista);

    app
        .post('/listas/:id', listaController.newLocalidade)
        .delete('/listas/:id', listaController.deleteLocalidade);

    app
        .post('/listas/:id', listaController.newServico)
        .delete('/listas/:id', listaController.deleteServico);

    app
        .post('/listas/:id', listaController.newReuniao)
        .put('/listas/:id', listaController.updateReuniao)
        .delete('/listas/:id', listaController.deleteReuniao);


    app
        .post('/listas/:id', listaController.newServicoExtra)
        .delete('/listas/:id', listaController.deleteServicoExtra);


    app
        .post('/listas/:id', listaController.newReuniaoExtra)
        .put('/listas/:id', listaController.updateReuniaoExtra)
        .delete('/listas/:id', listaController.deleteReuniaoExtra);

    app
        .post('/listas/:id', listaController.newLista)
        .put('/listas/:id', listaController.newLista)
        .delete('/listas/:id', listaController.deleteAllLista);

    app
        .post('/listas/:id', listaController.newLista)
        .put('/listas/:id', listaController.newLista)
        .delete('/listas/:id', listaController.deleteAllLista);

} 