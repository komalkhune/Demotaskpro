import { useDispatch } from "react-redux";
import { actions } from "../Store/Store";
import mystyle from "./Usermainpage.module.css"
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const Usermainpage=()=>{

     const dispatcher=useDispatch();
     const location=useLocation();

     const {userid, username, useraddress }=location.state || [];

           console.log(userid)
           console.log(username)
           console.log(useraddress)
          
     
     
     
  

        const [storedata, setStoredata] = useState([]);

        const [searchstored, setSearchstored]=useState("");
        const [filterstore,setFilterstore]=useState([]);

        const [rating,setRating]=useState("");
        const [sid,setId]=useState("");
        const [sname,setSname]=useState("");
        const [saddress,setSaddress]=useState("");
        
        // const [userid,setUserid]=useState("");
        // const [uname,setUname]=useState("");
        // const [uaddress,setUaddress]=useState("");

        const [urate,setUrate]=useState("");
        const [table, setTable]=useState(false);



        
        const ratechange=()=>{

       

        }
     


        const handleRating=(ratingg, sidd, snamee, saddresss)=>{

            setRating(ratingg);
            console.log(ratingg)
            setId(sidd);
            setSname(snamee);
            setSaddress(saddresss)


              let sdata={
            sid:sidd,
            sname:snamee,
            saddress:saddresss,
            rating:ratingg,
            userid:userid,
            uname:username,
            uaddress:useraddress
          }
          console.log("sdata", sdata);



          axios.post("http://localhost:5000/ratechange", sdata)
           .then((success)=>{
            console.log(success);

             searchstore();

           }).catch((error)=>{
            console.log(error)
           });

        
           

          }

          

      useEffect(()=>{


        
     axios.get("http://localhost:5000/getstoredata")
           .then((success)=>{
            console.log(success);
           setStoredata(success.data);
    
           }).catch((error)=>{
            console.log(error)
              // setServer(true) 
           });


            //   let udata=JSON.parse(localStorage.getItem("udata")) ;

            //  setUserid(udata.userid)
            //   setUname(udata.uname)
            //  setUaddress(udata.uaddress)              


            //   setUserid(userid);



      },[])




          const searchstore=()=>{
           if(!searchstored){
            alert("Please enter Data")
             setFilterstore([]);
            return;
           }

           const store=storedata.find((item)=>
            item.name?.toLowerCase().includes(searchstored.toLowerCase()) ||
            item.address?.toLowerCase().includes(searchstored.toLowerCase())
             );

             if(store){
               console.log("store", store)
               setFilterstore([store]);
               setTable(true);



                 axios.get(`http://localhost:5000/getrating/${store.sid}/${userid}`)
           .then((success)=>{
            // console.log("success.data",success.data);

            console.log("success.data.rating", success.data?.[0]?.rating);


            if (success.data?.[0]?.rating != null) {
                setUrate(success.data[0].rating);
            console.log("rattinggggg");

            } else {
                setUrate(null);
            console.log("null");

            }


           }).catch((error)=>{
            console.log(error)
           });




             }else{
                 alert("This Data not available")
                  setFilterstore([]);
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

                <p>Hello, <strong>{username}!</strong> Discover stores and let others know your experience by leaving ratings and reviews.</p>


                  <p className={mystyle.searchdatahead}>Search store for Rating</p>
                             
                             <input className={mystyle.searchinput} type="text" placeholder="Search store" onChange={(e) => setSearchstored(e.target.value)} />
                              <button className={mystyle.searchbtv} onClick={searchstore}>search</button>



                            {table&&
                              <table className={mystyle.table}>
                                <thead>
                                   <tr>
                                       {/* <th>ID</th> */}
                                       <th>store Name</th>
                                       <th>Address</th>
                                       <th>User Rating</th>
                                       <th>Change Rating</th>
                                       <th>Overall Rating</th>
            
                                     </tr>
                                </thead>

                                <tbody className={mystyle.searchtablebody}>
                                    {
                                        filterstore.map((item, index)=>(
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                 <td> {urate ? urate : "No Rating"}</td>
                                                <td>
                                                <select onChange={(e)=>handleRating(e.target.value,item.sid, item.name, item.address)} value={item.user_rating || ""}>
                                                    <option value="">select Rating</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    
                                                </select>
                                                </td>
                                                <td>5</td>
                                                {/* <td><button onClick={ratechange}>change rating</button></td> */}


                                                

                                            </tr>
                                        ))
                                    }

                                </tbody>
                              </table>
                             }  


                 <div className={mystyle.tablecontainer}>
                                    <h1 className={mystyle.title}>Stores</h1>
            
                                    {/* <table border="1"> */}
                                    <table className={mystyle.table}>
            
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    {/* <th>Password</th> */}
                                    <th>Address</th>
                                    {/* <th>User Rating</th>
                                    <th>Overall Rating</th> */}



            
                                </tr>
                            </thead>
            
                            <tbody>
            
                                {
                                    storedata.map((item, index) => (
                                        <tr key={index}>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            {/* <td>{item.password}</td> */}
                                            <td>{item.address}</td>
                                            {/* <td> <input type="number" placeholder="add rating"  onChange={(e) => handleRating(e.target.value) } /> */}
                                             {/* </td> */}
                                            {/* <td>5</td> */}

            
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