const db = require("../Models");
const Employe = db.employe;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.firstname) {
        res.status(400).send({
            message: "firstname can not be empty!"
        });
        return;
    }
    if (!req.body.lastname) {
        res.status(400).send({
            message: "lastname can not be empty!"
        });
        return;
    }
    if (!req.body.desigination) {
        res.status(400).send({
            message: "desigination can not be empty!"
        });
        return;
    }
    if (!req.body.salary) {
        res.status(400).send({
            message: "desigination can not be empty!"
        });
        return;
    }
    if (!req.body.number) {
        res.status(400).send({
            message: "number can not be empty!"
        });
        return;
    }
    if (!req.body.dateofbirth) {
        res.status(400).send({
            message: "number can not be empty!"
        });
        return;
    }
    const employe = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        desigination: req.body.desigination,
        salary: req.body.salary,
        number: req.body.number,
        dateofbirth: req.body.dateofbirth
    }
    Employe.create(employe)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while adding employe."
            });
        });
};