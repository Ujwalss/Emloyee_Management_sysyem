import mysql from 'mysql'



const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
})

con.connect(function(err){
    if(err){
        console.profileEnd("connection error")
    } else{
        console.log("connected..")
    }
})

export default con;


































