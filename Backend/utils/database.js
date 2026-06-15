const mysql=require("mysql2")

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"komal@4093",
    database:"taskdatabase"
});


db.connect((err)=>{
    if(err){
         console.log("Database not connected",error)
        
    }else{
      console.log("Database connect successfully")
    }
});


module.exports=db;

