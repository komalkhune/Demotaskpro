import { useDispatch } from "react-redux";
import { actions } from "../Store/Store";
import mystyle from "./Usermainpage.module.css"
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";

const Usermainpage=()=>{

     const dispatcher=useDispatch();

        const [storedata, setStoredata] = useState([]);
     


     axios.get("http://localhost:5000/getstoredata")
           .then((success)=>{
            console.log(success);
           setStoredata(success.data);
    
           }).catch((error)=>{
            console.log(error)
              // setServer(true) 
           });



          const handleRating=(rating)=>{

             if (rating < 1 || rating > 5) {
               alert("Rating must be between 1 to 5");
              return;
            }

            console.log(rating)



          }






    return(
        <>

         <div className={mystyle.mainpage}>
            <nav className={mystyle.navbar}>
                 <button className={mystyle.menuBtn} onClick={()=>dispatcher(actions.openSidebar())}><RiMenuUnfold2Fill size={22}/> </button>
            </nav>

            <div className={mystyle.submainpage}>

                   <h1 className={mystyle.headp}>Dashboard Overview</h1>

                <p>Welcome back, user. Here's what's happening today.</p>


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
                                    <th>User Rating</th>
                                    <th>Overall Rating</th>



            
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
                                            <td> <input type="number" placeholder="add rating" value={item.userRating || ""} onChange={(e) => handleRating(e.target.value) } />
                                             </td>
                                            <td>5</td>

            
                                        </tr>
                                    ))
                                }
            
                            </tbody>
            
                          </table>

                        </div>



            </div>  
          </div>
        
        </>
    )
}
export default Usermainpage;