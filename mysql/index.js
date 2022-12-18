let mysql=require('mysql');
require('dotenv').config();

let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.USER_PASSWORD,
    database : 'mysqldb'
})

con.connect((error)=>{
    if(error) return console.log(err);
    console.log("Connected");

    // let qString="CREATE DATABASE mysqldb";
    // let qString="CREATE TABLE users (name VARCHAR(255), age TINYINT(255))";
    // let qString="insert into users values ('Aman',23) ";
    // let qString="insert into users values ('Amol',25) ";
    // let qString1="insert into users values ('unknown1',23) ";
    // let qString2="insert into users values ('unknown2',26) ";
    // let qString3="insert into users values ('unknown3',25) ";
    // let qString4="insert into users values ('unknown4',19) ";
    // let qString="select * from users";
    // let qString="select name from users";
    let qString="select name,age from users where age>23";


    con.query(qString,(err,result)=>{
        if(err) return console.log(err);
        console.log(result);
    })

})