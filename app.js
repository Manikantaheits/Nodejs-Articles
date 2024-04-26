const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const sequelize = require('./database');  

sequelize.authenticate()
.then(()=>console.log('database connected'))
.catch(err=>console.log('error:'+err))



 
