
const db = [
    {
        id: 1,
        name: "conta 01",
        status: false
    },
    {
        id: 2,
        name: "conta 02",
        status: true
    },
    {
        id: 3,
        name: "conta 03",
        status: false
    }
];

exports.index = function (req, res) {
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

