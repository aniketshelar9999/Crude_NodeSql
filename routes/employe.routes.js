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

    //delete single Employe by id
    router.delete("/:id", employe.delete);

    //delete all Employe
    router.delete("/", employe.deleteAll);

    //get devlopers by desigination
    router.post("/desiginations", employe.findAlldesigination);


    app.use('/api/employe', router);
};