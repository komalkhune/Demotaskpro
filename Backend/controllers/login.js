const db=require("../utils/database")

exports.loginuser = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).send("Error");
        }

        if (result.length > 0) {
            res.send({
                success:true,
                message: "Login Success",
                user: result[0]
            });
        } else {
            res.send({
                success:false,
                message: "Invalid Email or Password"
            });
        }
    });
};





exports.loginstore = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM stores WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).send("Error");
        }

        if (result.length > 0) {
            res.send({
                 success:true,
                message: "Login Success",
                user: result[0]
            });
        } else {
            res.send({
                 success:false,
                message: "Invalid Email or Password"
            });
        }
    });
};




exports.loginadmin = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM admins WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).send("Error");
        }

        if (result.length > 0) {
            res.send({
                success:true,
                message: "Login Success",
                user: result[0]
            });
        } else {
            res.send({
                 success:false,
                message: "Invalid Email or Password"
            });
        }
    });
};
