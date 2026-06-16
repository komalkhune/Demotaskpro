import { useEffect, useState } from "react";
import mystyle from "./Changeadmpass.module.css"
import { useNavigate } from "react-router";
import axios from "axios";


const Changeadmpass=()=>{

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const [error, setError]=useState(false);
    const [errorvalid, setErrorvalid]=useState(false);

    const [admindata, setAdmindata] = useState([]);
    
    const [message, setMessage] = useState(false);
    const [usernot, setUsernot] = useState(false);
    const [emailmessage, setEmailmessage] = useState(false);
    const [passmessage, setPassmessage] = useState(false);
    const [server, setServer] = useState(false);


    const [newpassword, setNewpassword]=useState("")
    const [showpass, setShowpass]=useState(false)
    const [id, setId]=useState("")
    const [passerror, setPasserror]=useState(false);


    useEffect(() => {

          axios.get("http://localhost:5000/getadmindata")
         .then((success)=>{
          console.log(success);
           setAdmindata(success.data);   
         }).catch((error)=>{
          console.log(error)
          
         });

      }, []); 



    const submitbtn=()=>{

        if(email === "" || password === ""){
           setError(true)
           return
        }

           
        const adminemailFound = admindata.find((item) => { return item.email === email});
        console.log(adminemailFound);

        const adminpasswordFound = admindata.find((item) => { return item.password === password });
        console.log(adminpasswordFound);

        const adminFound = admindata.find((item) => { return  item.email === email && item.password === password});
        console.log(adminFound);

        if (adminFound) {     
         
           setShowpass(true)
           setId(adminFound.aid);
  
        } else if (!adminemailFound && !adminpasswordFound) {
           setUsernot(true) 
           return
      
        } else if (!adminemailFound) {
           setEmailmessage(true) 
           return
      
        } else if (!adminpasswordFound) {
           setPassmessage(true) 
           return
      
        }

    
    }

    const change=()=>{

      

      let changedata={
        newpassword:newpassword,
        id:id
      }

       const validpassword =  /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
         
        if (!validpassword.test(newpassword)) {
          setPasserror(true)
          return;
        }else{
              
          axios.post("http://localhost:5000/changeadminpass", changedata)
               .then((success)=>{
                console.log(success.data);

                  setMessage(success.data.message);
                 
               }).catch((error)=>{
                console.log(error)
               });
    
          }       


    }



     const close=()=>{
        setError(false)
        setErrorvalid(false)
        setEmailmessage(false)
        setMessage(false)
        setPassmessage(false)
        setServer(false)
        setPasserror(false)
        setUsernot(false)
        

    }

    return(

        <>

         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>Password Change</h2>

                {error && (
                <div className={mystyle.errorbox}>
                  <p> Please Fill all Field</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

               {errorvalid && (
                <div className={mystyle.errorbox}>
                  <p> Email is Invalid</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

               {usernot && (
                <div className={mystyle.errorbox}>
                  <p>Email and Password not match</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                 {emailmessage && (
                <div className={mystyle.errorbox}>
                  <p>Email not match</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                   
                   
               {passmessage && (
                <div className={mystyle.errorbox}>
                  <p>Password not match</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

               {server && (
                <div className={mystyle.errorbox}>
                  <p>Somthing Wrong</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                {passerror && (
                <div className={mystyle.errorbox}>
                  <p> Password must be 8-16 characters, include one uppercase letter and one special character</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}
              
              
               <label className={mystyle.lable}>Email</label>
                    <input className={mystyle.inputfield} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                
  
                     <label className={mystyle.lable}>password</label>
                    <input className={mystyle.inputfield} type="password" placeholder="Enter Old Password" onChange={(e)=>setPassword(e.target.value)}/>
                

                <button className={mystyle.loginbtn} onClick={submitbtn}>submit</button>


                 {showpass && (
                <div className={mystyle.showpass}>
                 <div>

                    <label className={mystyle.lable}>New password</label>
                    <input className={mystyle.inputfield} type="password" placeholder="Enter New Password" onChange={(e)=>setNewpassword(e.target.value)}/>
                    <button className={mystyle.changebtn} onClick={change}>Change</button>

                      {message && (
                        <div className={mystyle.successbox}>
                          <p>{message}</p>
                          <button className={mystyle.closebtn} onClick={close}> Close </button>
                        </div>
                      )}
                </div>
                 
                </div>
              )}
                

            </div>
        </div>

        </>
    )
    
}
export default Changeadmpass;