import { FaUsers } from "react-icons/fa";
import mystyle from"./Mainpage.module.css"
import { LiaStoreSolid } from "react-icons/lia";
import { IoIosStar } from "react-icons/io";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { actions } from "../Store/Store";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";


const Mainpage=()=>{

    const dispatcher=useDispatch();


        const [userdata, setUserdata] = useState([]);
        const [storedata, setStoredata] = useState([]);
        const [admindata, setAdmindata] = useState([]);

       const [searchUser, setSearchUser] = useState("");
       const [searchStore, setSearchStore] = useState("");
       const [searchAdmin, setSearchAdmin] = useState("");

        const [filteredUsers, setFilteredUsers] = useState([]);
        const [filteredStores, setFilteredStores] = useState([]);
        const [filteredAdmins, setFilteredAdmins] = useState([]);



    
        const users=userdata.length;
        console.log(users)

         const stores=storedata.length;
        console.log(stores)




        useEffect(()=>{


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




        },[])

     



            const searchuser=()=>{

                  if (!searchUser.trim()) {
                   alert("Please enter data");
                    setFilteredUsers([]);
                  return;
                  }
            
                const users = userdata.find((item) =>
                  item.name?.toLowerCase().includes(searchUser.toLowerCase()) ||
                  item.email?.toLowerCase().includes(searchUser.toLowerCase()) ||
                  item.address?.toLowerCase().includes(searchUser.toLowerCase())
                );

                if(users){
                     console.log("uuussseeerrr",users)
            
                setFilteredUsers([users]);

                }else{
                    alert("This Data not available")
                setFilteredUsers([]);

                }
            
               

            }

            const searchstore=()=>{

                 if (!searchStore.trim()) {
                   alert("Please enter data");
                    setFilteredStores([]);
                  return;
                  }
                 
                const stores = storedata.find((item) =>
                  item.name?.toLowerCase().includes(searchStore.toLowerCase()) ||
                  item.email?.toLowerCase().includes(searchStore.toLowerCase()) ||
                  item.address?.toLowerCase().includes(searchStore.toLowerCase())
                );
                  

                 if(stores){
                    console.log("uuussseeerrr",stores)
            
                setFilteredStores([stores]);

                }else{
                    alert("This Data not available")
                      setFilteredStores([]);
                }

            }

            const searchadmin=()=>{

                 if (!searchAdmin.trim()) {
                   alert("Please enter data");
                    setFilteredAdmins([]);
                  return;
                  }

                const admins = admindata.find((item) =>
                 item.name?.toLowerCase().includes(searchAdmin.toLowerCase()) ||
                 item.email?.toLowerCase().includes(searchAdmin.toLowerCase()) ||
                 item.address?.toLowerCase().includes(searchAdmin.toLowerCase())
               );
                 

                if(admins){
                   console.log("uuussseeerrr",admins)
           
               setFilteredAdmins([admins]);

                }else{
                    alert("This Data not available")
                      setFilteredAdmins([]);
                }


            }




    return(
        <>
        <div className={mystyle.mainpage}>
            <nav className={mystyle.navbar}>
                 <button className={mystyle.menuBtn} onClick={()=>dispatcher(actions.openSidebar())}><RiMenuUnfold2Fill size={22}/> </button>
            </nav>

            <div className={mystyle.submainpage}>

                   <h1 className={mystyle.headp}>Dashboard Overview</h1>

                <p className={mystyle.aaa}>Welcome back, admin. Here's what's happening today.</p>

                <div className={mystyle.details}>

                    <div className={mystyle.detailscard}>
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
                    </div>
            
            
                </div>
            
                            <div className={mystyle.searchdata}>
            
                             <p className={mystyle.searchdatahead}>Search User</p>
            
                             <input className={mystyle.searchinput} type="text" placeholder="Search User" onChange={(e) => setSearchUser(e.target.value)} />
                             <button className={mystyle.searchbtv} onClick={searchuser}>search</button>
            
                            
                             
                             <p className={mystyle.searchdatahead}>Search Store</p>
                             
                             <input className={mystyle.searchinput} type="text" placeholder="Search Store" onChange={(e) => setSearchStore(e.target.value)} />
                              <button className={mystyle.searchbtv} onClick={searchstore}>search</button>
                             
                             <p className={mystyle.searchdatahead}>Search Admin</p>
                             
                             <input className={mystyle.searchinput} type="text" placeholder="Search Admin" onChange={(e) => setSearchAdmin(e.target.value)} />
                              <button className={mystyle.searchbtv} onClick={searchadmin}>search</button>
            
            
                               {
                                <table className={mystyle.searchtable}>
                                  <tbody className={mystyle.searchtablebody}>
                                    {filteredUsers.map((item, index) => (
                                      <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                             }
            
                              {
                                <table className={mystyle.searchtable}>
                                  <tbody className={mystyle.searchtablebody}>
                                    {filteredStores.map((item, index) => (
                                      <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                             }
            
                              {
                                <table className={mystyle.searchtable}>
                                  <tbody className={mystyle.searchtablebody}>
                                    {filteredAdmins.map((item, index) => (
                                      <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                             }
            
                            </div>



                <div>


                </div>

            </div>
        </div>
        
        </>
    )
}
export default Mainpage;