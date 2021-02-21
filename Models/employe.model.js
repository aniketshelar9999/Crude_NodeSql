module.exports = (sequelize, Sequelize) => {
    const Employe = sequelize.define("employe", {
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        desigination: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.STRING(6) 
        },
        number: {
            type: Sequelize.STRING(10)  
        },
        dateofbirth: {
            type: Sequelize.DATEONLY   
        },

    });

    return Employe;
};