import { useEffect, useState } from "react";
import mystyle from "./Login.module.css"
import { useNavigate } from "react-router";
import axios from "axios";


const Login=()=>{

    const navigate=useNavigate();

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [role, setRole]=useState("");


    const [error, setError]=useState(false);
    const [errorvalid, setErrorvalid]=useState(false);

    const [userdata, setUserdata] = useState([]);
    const [storedata, setStoredata] = useState([]);
    const [admindata, setAdmindata] = useState([]);
    
    const [message, setMessage] = useState(false);
    const [emailmessage, setEmailmessage] = useState(false);
    const [passmessage, setPassmessage] = useState(false);
    const [server, setServer] = useState(false);

    

     useEffect(() => {


      

            axios.get("http://localhost:5000/getuserdata")
           .then((success)=>{
            console.log(success);
           setUserdata(success.data);
             
           }).catch((error)=>{
            console.log(error)
            //  setServer(true)
           });



         
         
          axios.get("http://localhost:5000/getstoredata")
           .then((success)=>{
            console.log(success);
           setStoredata(success.data);
    
           }).catch((error)=>{
            console.log(error)
              // setServer(true) 
           });



            axios.get("http://localhost:5000/getadmindata")
           .then((success)=>{
            console.log(success);
             setAdmindata(success.data);
  
           }).catch((error)=>{
            console.log(error)
              // setServer(true) 
           });
          
          
          



       }, []); 



    

    const loginbtn=()=>{

         if(email === "" || password === "" || role === ""){
            setError(true)
         }

           if(role==="user"){

      
            const useremailFound = userdata.find((item) => { return item.email === email });
            console.log(useremailFound);


            const userpasswordFound = userdata.find((item) => { return item.password === password });
            console.log(userpasswordFound);


             const userFound = userdata.find((item) => { return item.email === email && item.password === password });
            console.log(userFound);

                
            

            if (userFound) {

              
             const userid=userFound.uid
            const username=userFound.name
            const useraddress=userFound.address
           
              setMessage(true)           
               navigate("/userdashboard", {state:{userid:userid, username:username, useraddress:useraddress}});
           
             } else if (!useremailFound && !userpasswordFound) {
                setMessage(true) 
           
             } else if (!useremailFound) {
                setEmailmessage(true) 
           
             } else if (!userpasswordFound) {
                setPassmessage(true) 
           
             }


        

               }else if(role==="store"){
          

              const storeemailFound = storedata.find((item) => { return item.email === email });
            console.log(storeemailFound);


              const storepasswordFound = storedata.find((item) => { return item.password === password });
            console.log(storepasswordFound);


             const storeFound = storedata.find((item) => { return item.email === email && item.password === password });
            console.log(storeFound);


             if (storeFound) {
           
          
                const storeid=storeFound.sid
                const storename=storeFound.name
                const storeemail=storeFound.email

              const sdata={
                storeid:storeid,
                storeemail:storeemail
              }
               console.log("storeid",storeid)
               console.log("storeemail",storeemail)

               setMessage(true)           
               navigate("/storesdashb" ,{state: {storeid:storeid, storename:storename, storeemail:storeemail}});

           
             } else if (!storeemailFound && !storeemailFound) {
                setMessage(true) 
           
             } else if (!storeemailFound) {
                setEmailmessage(true) 
           
             } else if (!storepasswordFound) {
                setPassmessage(true) 
           
             }

           


              }else{
           
              const adminemailFound = admindata.find((item) => { return item.email === email});
              console.log(adminemailFound);

             const adminpasswordFound = admindata.find((item) => { return item.password === password });
             console.log(adminpasswordFound);

             const adminFound = admindata.find((item) => { return  item.email === email && item.password === password});
             console.log(adminFound);

             if (adminFound) {

              const adminname=adminFound.name;
           
              setMessage(true)           
               navigate("/admindashboard", {state:{adminname:adminname}});
           
             } else if (!adminemailFound && !adminpasswordFound) {
                setMessage(true) 
           
             } else if (!adminemailFound) {
                setEmailmessage(true) 
           
             } else if (!adminpasswordFound) {
                setPassmessage(true) 
           
             }

          }

            



       

    
    }


         





     const close=()=>{
        setError(false)
        setErrorvalid(false)
        setEmailmessage(false)
        setMessage(false)
        setPassmessage(false)
        setServer(false)

        

    }

    return(

        <>

         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>Login</h2>

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

               {message && (
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
              
              
               <label className={mystyle.lable}>Email</label>
                    <input className={mystyle.inputfield} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                
  
                     <label className={mystyle.lable}>password</label>
                    <input className={mystyle.inputfield} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                     
                     <label className={mystyle.lable}>Role</label>
                    <select className={mystyle.inputfield} type="text"  onChange={(e)=>setRole(e.target.value)}>
                        <option value="">Select Roll</option>
                        <option value="admin">Admin</option>
                        <option value="user">Normal User</option>
                        <option value="store">Store Owner</option>                  
                    </select>
                

                <button className={mystyle.loginbtn} onClick={loginbtn}>Login</button>

  

            </div>
        </div>

        </>
    )
    
}
export default Login;