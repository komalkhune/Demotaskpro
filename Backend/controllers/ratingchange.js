const db=require("../utils/database")


exports.ratechange=(req, res)=>{

    const { sid, sname, saddress, rating, userid, uname, uaddress } = req.body;

    const checkQuery = "SELECT rating FROM rating WHERE sid = ? AND uid = ?";

    db.query(checkQuery, [sid, userid], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Error");
        }

        // Record exists
        if (result.length > 0) {

            // Update only if rating is different
            if (result[0].rating != rating) {

                const updateQuery = "UPDATE rating SET rating = ? WHERE sid = ? AND uid = ?";

                db.query(updateQuery, [rating, sid, userid], (err, updateResult) => {

                    if (err) {
                        console.log(err);
                        return res.status(500).send("Error");
                    }

                    return res.send("Rating Updated Successfully");
                });

            } else {
                return res.send("Rating Already Exists");
            }

        }
        // Record does not exist
        else {

            const insertQuery = `
                INSERT INTO rating
                (sid, sname, saddress, rating, uid, uname, uaddress)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(
                insertQuery,
                [sid, sname, saddress, rating, userid, uname, uaddress],
                (err, insertResult) => {

                    if (err) {
                        console.log(err);
                        return res.status(500).send("Error");
                    }

                    return res.send("Rating Added Successfully");
                }
            );
        }
    });
};


exports.getrating = (req, res) => {

    const { sid, uid } = req.params;

    const sql = `
        SELECT rating
        FROM rating
        WHERE sid = ? AND uid = ?
    `;

    db.query(sql, [sid, uid], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        res.send(result);
    });
};
