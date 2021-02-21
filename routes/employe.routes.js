module.exports = app => {

    const employe = require("../Controllers/employe.controller");


    var router = require("express").Router();

    // Create a new Employe
    router.post("/", employe.create);

    // Retrieve all Employes
    router.get("/", employe.findAll);

    // Retrieve a single Employe with id
    router.get("/:id", employe.findOne);

    //update a single Employe with id
    router.put("/:id", employe.update);

    router.delete("/:id", employe.delete);

    router.delete("/", employe.deleteAll);
    

    app.use('/api/employe', router);
};