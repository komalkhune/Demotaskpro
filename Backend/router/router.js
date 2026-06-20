const express=require("express");
const { addusers, addstores, addadmins } = require("../controllers/insert");
const { getuserdata, getstoredata, getadmindata, getratingdata } = require("../controllers/getdata");
const { loginuser, loginstore, loginadmin } = require("../controllers/login");
const { changeadminpass, changestorepass, changeuserpass } = require("../controllers/changepass");
const { ratechange, getrating } = require("../controllers/ratingchange");



const router=express.Router();

router.post("/addusers", addusers)
router.post("/addstores", addstores)
router.post("/addadmins", addadmins)


router.post("/changeadminpass", changeadminpass);
router.post("/changestorepass", changestorepass);
router.post("/changeuserpass", changeuserpass);

router.post("/ratechange", ratechange);
router.get("/getrating/:sid/:uid", getrating);


router.get("/getratingdata", getratingdata);





// router.post("/loginuser", loginuser)
// router.post("/loginstore", loginstore)
// router.post("/loginadmin", loginadmin)


router.get("/getuserdata", getuserdata);
router.get("/getstoredata", getstoredata);
router.get("/getadmindata", getadmindata);

module.exports=router;