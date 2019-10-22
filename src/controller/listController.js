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

exports.getId = (req, res) => {
    const { id } = req.params;
    Titulo.findAll({
        where: {
            id: id
        }
    }).then((titulo) => {
        if (titulo.length != 0) {
            code = 200;
            message = 'OK';
            res.json({
                code: code,
                message: message,
                data: titulo
            });
        } else {
            res.status(400).send('id não encontrado');
        }
    });
};

exports.create = function (req, res) {
    Titulo.create({
        name: req.body.name,
        valor: req.body.valor,
        status: req.body.status
    }).then(function (titulo) {
        if (titulo) {
            code = 200;
            message = 'OK';
            res.json({
                code: code,
                message: message,
                data: titulo
            });
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
};

exports.edit = function (req, res) {
    const id = req.params.id;
    Titulo.update({
        name: req.body.name,
        valor: req.body.valor,
        status: req.body.status
    }, {
        where:
        {
            id: id
        }
    }).then((titulo) => {
        if (titulo) {
            code = 200;
            message = 'Alterado com sucesso';
            res.json({
                code: code,
                message: message,
                data: req.body
            });
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
};

exports.delete = function (req, res) {
    const id = req.params.id;
    Titulo.destroy({
        where: {
            id: id
        }
    }).then((rowDeleted) => {
        if (rowDeleted === 1) {
            code = 200;
            message = 'deletado com sucesso';
            res.json({
                code: code,
                message: message,
                data: []
            });
        } else {
            code = 400;
            message = 'o titulo de id: ' + id + ' não foi encontrado';
            res.json({
                code: code,
                message: message,
                data: []
            });
        }
    });
};

