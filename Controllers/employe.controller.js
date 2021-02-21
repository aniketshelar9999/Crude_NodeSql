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
            message: "salary can not be empty!"
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
            message: "dateofbirth can not be empty!"
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

exports.findAll = (req, res) => {
    Employe.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all employes."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Employe.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Employe with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Employe.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Employe was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Employe with id=${id}. Maybe Employe was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Employe with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employe.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employe was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Employe with id=${id}. Maybe Employe was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Employe with id=" + id
        });
      });
  };

  

  exports.deleteAll = (req, res) => {
    Employe.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Employes were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Employes."
        });
      });
  };