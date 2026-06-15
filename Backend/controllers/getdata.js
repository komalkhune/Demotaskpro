const db=require("../utils/database")


exports.getuserdata = (req, res) => {

    const get = "SELECT * FROM users";

    db.query(get, (err, result) => {  

        if (err) {
            return res.send(err);
        }

        res.send(result);
    });
};



exports.getstoredata = (req, res) => {

    const get = "SELECT * FROM stores";

    db.query(get, (err, result) => {   


        if (err) {
            return res.send(err);
        }

        res.send(result);
    });
};




exports.getadmindata = (req, res) => {

    const get = "SELECT * FROM admins";

    db.query(get, (err, result) => {  

        if (err) {
            return res.send(err);
        }

        res.send(result);
    });
};


