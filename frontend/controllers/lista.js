const Lista = require("../itens/lista")

//GET '/lista'
exports.getAllLista = (req, res) => {
    Lista.find({}, (err, lista) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(lista);
    });
};

//POST '/lista'
const newLista = (req, res, next) => {
    res.json({ message: "POST new lista" });
};

//DELETE '/lista'
const deleteAllLista = (req, res, next) => {
    res.json({ message: "DELETE all lista" });
};

//GET '/lista/:name'
const getOneLista = (req, res, next) => {
    res.json({ message: "GET 1 lista" });
};

//POST '/lista/:name'
const newComment = (req, res, next) => {
    res.json({ message: "POST 1 lista comment" });
};

//DELETE '/lista/:name'
const deleteOneLista = (req, res, next) => {
    res.json({ message: "DELETE 1 lista" });
};

//export controller functions
module.exports = {
    newLista,
    deleteAllLista,
    getOneLista,
    newComment,
    deleteOneLista
};
