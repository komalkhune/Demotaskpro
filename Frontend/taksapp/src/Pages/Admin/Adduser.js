import { useState } from "react";
import mystyle from "./Adduser.module.css"
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Adduser=()=>{

      //  const [id, setId]=useState("");
       const [name, setName]=useState("");
       const [email, setEmail]=useState("");
       const [address, setAddress]=useState("");
       const [password, setPassword]=useState("");
       const [role, setRole]=useState("");


       const [error, setError]=useState(false);
       const [nameerror, setNameerror]=useState(false);
       const [emailerror, setEmailerror]=useState(false);
       const [addresserror, setAddresserror]=useState(false);
       const [passerror, setPasserror]=useState(false);
       const [save, setSave]=useState(false);



       
        const savedata=()=>{


            if(name==="" || email==="" || address==="" || password==="" || role===""){
                setError(true)
                return;
            }


         
                  // Name Validation
           if (name.length < 5 || name.length > 60) {
             setNameerror(true)
             return;
           }
         
           // Email Validation
           const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         
           if (!validemail.test(email)) {
            //  alert("Please enter valid email");
             setEmailerror(true)

             return;
           }
         
           // Address Validation
           if (address.length > 400) {
             setAddresserror(true)

             return;
           }
         
           // Password Validation
           const validpassword =  /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
         
           if (!validpassword.test(password)) {
             setPasserror(true)
             return;
           }
         
           // User Info Object
           let userinfo = {
             name: name,
             email: email,
             password: password,
             address: address,
           };

           if(role==="user"){

              axios.post("http://localhost:5000/addusers", userinfo)
           .then((success)=>{
            console.log(success);
            setSave(true)
             
           }).catch((error)=>{
            console.log(error)
           });


           }else if(role==="store"){
         
          axios.post("http://localhost:5000/addstores", userinfo)
           .then((success)=>{
            console.log(success);
            setSave(true)

             
           }).catch((error)=>{
            console.log(error)
           });


           }else{

             axios.post("http://localhost:5000/addadmins", userinfo)
           .then((success)=>{
            console.log(success);
            setSave(true)

             
           }).catch((error)=>{
            console.log(error)
           });
           }


        }


      const close=()=>{
        setError(false)
        setNameerror(false)
        setEmailerror(false)
        setAddresserror(false)
        setPasserror(false)
        setSave(false)
        
      }
       


    return(
         <>
         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>Add User based on Role</h2>

                {error && (
                <div className={mystyle.errorbox}>
                  <p> Please fill all Fields</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                {nameerror && (
                <div className={mystyle.errorbox}>
                  <p> Name must be between 10 and 60 characters</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

               {emailerror && (
                <div className={mystyle.errorbox}>
                  <p> Please enter valid email</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                {addresserror && (
                <div className={mystyle.errorbox}>
                  <p> Address maximum 400 characters only</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                {passerror && (
                <div className={mystyle.errorbox}>
                  <p> Password must be 8-16 characters, include one uppercase letter and one special character</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

               {save && (
                <div className={mystyle.errorboxsave}>
                  <p> Data Insert Successfully!</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}
                   
                   
                   {/* <label className={mystyle.lable}>Id</label>
                    <input className={mystyle.inputfield} type="number" placeholder="Enter Id" onChange={(e)=>setName(e.target.value)}/> */}

                   <label className={mystyle.lable}>Name</label>
                    <input className={mystyle.inputfield} type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>


                    <label className={mystyle.lable}>Email</label>
                    <input className={mystyle.inputfield} type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>

                    <label className={mystyle.lable}>Password</label>
                    <input className={mystyle.inputfield} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>

                    <label className={mystyle.lable}>Address</label>
                    <input className={mystyle.inputfield} type="text" placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)}/>

                    <label className={mystyle.lable}>Role</label>
                    <select className={mystyle.inputfield} type="text"  onChange={(e)=>setRole(e.target.value)}>
                        <option value="">Select Roll</option>
                        <option value="admin">Admin</option>
                        <option value="user">Normal User</option>
                        <option value="store">Store Owner</option>                  
                    </select>
                     

                <button className={mystyle.loginbtn} onClick={savedata}>Save</button>    

            </div>
        </div>
        </>
    )
}
export default Adduser;