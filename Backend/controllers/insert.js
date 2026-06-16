
const db=require("../utils/database")


exports.addusers=(req, res)=>{

    const {name, email, password, address}=req.body;

    const add="INSERT INTO users(name,email,password, address) VALUES(?,?,?,?)";

      db.query( add, [name, email, password, address], (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send("Error");
            }

            res.send("Data Inserted Successfully");
        }
    );
};


exports.addstores=(req, res)=>{

    const {name, email, password, address}=req.body;

    const add="INSERT INTO stores(name,email,password, address) VALUES(?,?,?,?)";

      db.query( add, [name, email, password, address], (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send("Error");
            }

            res.send("Data Inserted Successfully");
        }
    );
};




exports.addadmins=(req, res)=>{

    const {name, email, password, address}=req.body;

    const add="INSERT INTO admins(name,email,password, address) VALUES(?,?,?,?)";

      db.query( add, [name, email, password, address], (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send("Error");
            }

            res.send("Data Inserted Successfully");
        }
    );
};