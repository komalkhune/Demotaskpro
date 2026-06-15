import { useDispatch } from "react-redux";
import { actions } from "../Store/Store";
import mystyle from "./Users.module.css"
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";


const Users=()=>{

    const dispatcher=useDispatch();

    
            const [userdata, setUserdata] = useState([]);
            const [storedata, setStoredata] = useState([]);
            const [admindata, setAdmindata] = useState([]);



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




    return(
        <>
         <div className={mystyle.mainpage}>
            <nav className={mystyle.navbar}>
                 <button className={mystyle.menuBtn} onClick={()=>dispatcher(actions.openSidebar())}><RiMenuUnfold2Fill size={22}/> </button>
            </nav>

            <div className={mystyle.submainpage}>


                {/* <div className={mystyle.details}> */}

                    {/* <div className={mystyle.detailscard}>
                        <div className={mystyle.cardicon}><FaUsers  /></div>
                        <div className={mystyle.cardinfo}>
                            <p>Total users</p>
                            <h1>{users}</h1>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className={mystyle.cardicon}><LiaStoreSolid /></div>
                        <div className={mystyle.cardinfo}>
                            <p>Total Stores</p>
                            <h1>{stores}</h1>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className={mystyle.cardicon}><IoIosStar /></div>
                        <div className={mystyle.cardinfo}>
                            <p>Tatal Rating</p>
                            <h1>50</h1>
                        </div>
                                </div> */}
            
                        <div className={mystyle.tablecontainer}>
                                    <h1 className={mystyle.title}>Users</h1>
            
                                    {/* <table border="1"> */}
                                    <table className={mystyle.table}>
            
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Address</th>
            
                                </tr>
                            </thead>
            
                            <tbody>
            
                                {
                                    userdata.map((item, index) => (
                                        <tr key={index}>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td>{item.address}</td>
            
                                        </tr>
                                    ))
                                }
            
                            </tbody>
            
                          </table>

                        </div>





                        <div className={mystyle.tablecontainer}>
                                    <h1 className={mystyle.title}>Admins</h1>
            
                                    {/* <table border="1"> */}
                                    <table className={mystyle.table}>
            
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Address</th>
            
                                </tr>
                            </thead>
            
                            <tbody>
            
                                {
                                    admindata.map((item, index) => (
                                        <tr key={index}>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td>{item.address}</td>
            
                                        </tr>
                                    ))
                                }
            
                            </tbody>
            
                          </table>

                        </div>



                         <div className={mystyle.tablecontainer}>
                                    <h1 className={mystyle.title}>Stores</h1>
            
                                    {/* <table border="1"> */}
                                    <table className={mystyle.table}>
            
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Address</th>
            
                                </tr>
                            </thead>
            
                            <tbody>
            
                                {
                                    storedata.map((item, index) => (
                                        <tr key={index}>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td>{item.address}</td>
            
                                        </tr>
                                    ))
                                }
            
                            </tbody>
            
                          </table>

                        </div>


                {/* </div> */}




            </div>
        </div>
        
        </>
    )
}
export default Users;