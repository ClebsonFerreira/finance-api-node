const Titulo  = require('../model/Titulo');
const con  = require('../database/db_connection');
const db = [];

exports.index = function (req, res) {
    con.connect();
        con.query('SELECT * FROM titulos',(err, result)=>{
            if (err) throw err;
            console.log("1 record inserted");
        })
        
    con.end();
    const boleto01 = new Titulo();
    boleto01.setName("Faculdade");
    boleto01.setValor(250);
    boleto01.setParcela(1);
    boleto01.setVencimento("31/01/1992");
    boleto01.setStatus(false);
    db.push(boleto01);
    const boleto02 = new Titulo();
    boleto02.setName("Faculdade esposa");
    boleto02.setValor(250);
    boleto02.setParcela(1);
    boleto02.setVencimento("31/01/1992");
    boleto02.setStatus(false);
    db.push(boleto02);
    res.json(db);
};

exports.create = function (req, res) {
    if (req.body.name) {
        const payment = {
            id: db.length + 1,
            name: req.body.name,
            status: false
        }
        db.push(payment);
        res.json(payment);
    }else{
        res.json("parametros invalidos ");
    }
};

exports.edit = function (req, res) {
    res.json(db);
};

exports.delete = function (req, res) {
    res.json(db);
};

