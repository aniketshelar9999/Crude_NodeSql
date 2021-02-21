module.exports = app => {
    // const tutorials = require("../controllers/tutorial.controller.js");
      const employe = require("../Controllers/employe.controller");

  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", employe.create);
  
    app.use('/api/employe', router);
  };