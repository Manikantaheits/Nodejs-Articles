 
const Sequelize = require('sequelize');


const Customer = require('./Customer');
const Order = require('./order');


Sequelize
    .sync()
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    });