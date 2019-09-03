const Titulo = require('../models').Titulo;

exports.index = (req, res) => {
    Titulo.findAll().then((titulos) => {
        code = 200;
        message = 'OK';
        res.json({
            code: code,
            message: message,
            data: titulos
        });
    });
};

exports.create = function (req, res) {
    res.send("teste");
};

exports.edit = function (req, res) {
    res.json(db);
};

exports.delete = function (req, res) {
    res.json(db);
};

