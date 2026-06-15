const express=require("express");
const { addusers, addstores, addadmins } = require("../controllers/insert");
const { getuserdata, getstoredata, getadmindata } = require("../controllers/getdata");
const { loginuser, loginstore, loginadmin } = require("../controllers/login");



const router=express.Router();

router.post("/addusers", addusers)
router.post("/addstores", addstores)
router.post("/addadmins", addadmins)



// router.post("/loginuser", loginuser)
// router.post("/loginstore", loginstore)
// router.post("/loginadmin", loginadmin)





router.get("/getuserdata", getuserdata);
router.get("/getstoredata", getstoredata);
router.get("/getadmindata", getadmindata);

module.exports=router;