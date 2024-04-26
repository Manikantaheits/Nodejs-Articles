const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Mallika',
    port: 5432,
});


client.connect();
client.query('select * from users31',(err,result)=>{
    if(!err){
    console.log(result.rows);
    }
    client.end();
});
