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
        .route('/lista')
        .get(listaController.getAllLista)
        .post(listaController.newLista)
        .delete(listaController.deleteAllLista);

    app
        .route('/lista/:id')
        .get(listaController.getOneLista)
        .post(listaController.newComment)
        .delete(listaController.deleteOneLista);
} 