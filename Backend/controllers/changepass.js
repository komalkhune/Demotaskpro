const db=require("../utils/database")



exports.changeadminpass= (req, res) => {


    const { newpassword, id } = req.body;

    const sql = "UPDATE admins SET password = ? WHERE aid = ?";

    db.query(sql, [newpassword, id], (err, result) => {

        if (err) {
            console.log(err);

            return res.send({
                success: false,
                message: "Password Not Updated"
            });
        }

        if (result.affectedRows > 0) {

            res.send({
                success: true,
                message: "Password Updated Successfully"
            });

        } else {

            res.send({
                success: false,
                message: "Admin ID Not Found"
            });
        }

    });
};



exports.changestorepass= (req, res) => {


    const { newpassword, id } = req.body;

    const sql = "UPDATE stores SET password = ? WHERE sid = ?";

    db.query(sql, [newpassword, id], (err, result) => {

        if (err) {
            console.log(err);

            return res.send({
                success: false,
                message: "Password Not Updated"
            });
        }

        if (result.affectedRows > 0) {

            res.send({
                success: true,
                message: "Password Updated Successfully"
            });

        } else {

            res.send({
                success: false,
                message: "Admin ID Not Found"
            });
        }

    });
};




exports.changeuserpass= (req, res) => {


    const { newpassword, id } = req.body;

    const sql = "UPDATE users SET password = ? WHERE uid = ?";

    db.query(sql, [newpassword, id], (err, result) => {

        if (err) {
            console.log(err);

            return res.send({
                success: false,
                message: "Password Not Updated"
            });
        }

        if (result.affectedRows > 0) {

            res.send({
                success: true,
                message: "Password Updated Successfully"
            });

        } else {

            res.send({
                success: false,
                message: "Admin ID Not Found"
            });
        }

    });
};

