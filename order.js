const Sequlize = require("sequlize");
const sequlize = require("./app.js");

const Order = sequelize.define("Order",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:  false,
        primarykey: true,
    },
    total:{
        type: Sequelize.FLOAT,
        allowNull:false,
    },
});
module.Export = Order;