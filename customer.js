const Sequlize = require("sequlize");
const sequlize = require("./app.js");

const Customer = sequelize.define("Customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primarykey: true,
    },
    names: {
        type:Sequlize.STRING,
        allowNull:false,
    },
    email: {
        type:Sequlize.STRING,
        allowNull:false,
    },
});

module.exports = Customer;
