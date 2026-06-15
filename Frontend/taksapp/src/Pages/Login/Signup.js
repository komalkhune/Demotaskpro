import { useState } from "react";
import mystyle from "./Signup.module.css"
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Signup=()=>{

     const navigate=useNavigate();

      //  const [id, setId]=useState("");
       const [name, setName]=useState("");
       const [email, setEmail]=useState("");
       const [address, setAddress]=useState("");
       const [password, setPassword]=useState("");

       const [error, setError]=useState(false);
       const [nameerror, setNameerror]=useState(false);
       const [emailerror, setEmailerror]=useState(false);
       const [addresserror, setAddresserror]=useState(false);
       const [passerror, setPasserror]=useState(false);






        const signupbtn=()=>{


            if(name==="" || email==="" || address==="" || password===""){
                setError(true)
                return;
            }


         
                  // Name Validation
           if (name.length < 10 || name.length > 60) {
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
         

           let userdata={
            name:name,
            email:email,
            password:password,
            address:address,
           }

           axios.post("http://localhost:5000/addusers", userdata)
           .then((success)=>{
            console.log(success);
             navigate("/login")
           }).catch((error)=>{
            console.log(error)
           });

          

           navigate("/login")


       }


         const close=()=>{
        setError(false)
        setNameerror(false)
        setEmailerror(false)
        setAddresserror(false)
        setPasserror(false)
        
    }


       


    return(
        <>
         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>Signup</h2>

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
                   
                    {/* <label className={mystyle.lable}>Id</label>
                    <input className={mystyle.inputfield} type="number" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)}/> */}

                   <label className={mystyle.lable}>Name</label>
                    <input className={mystyle.inputfield} type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>


                    <label className={mystyle.lable}>Email</label>
                    <input className={mystyle.inputfield} type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>

                     <label className={mystyle.lable}>Password</label>
                    <input className={mystyle.inputfield} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>

                    <label className={mystyle.lable}>Address</label>
                    <input className={mystyle.inputfield} type="text" placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)}/>   

                <button className={mystyle.loginbtn} onClick={signupbtn}>Signup</button>    

               <p className={mystyle.navigatebtn}>Already have an account? <Link to="/login">Login</Link> </p>
                         
  

            </div>
        </div>
        </>
    )
}
export default Signup;