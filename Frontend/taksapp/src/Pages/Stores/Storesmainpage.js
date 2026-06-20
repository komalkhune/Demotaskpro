import { useDispatch } from "react-redux";
import mystyle from "./Storesmainpage.module.css"
import { actions } from "../Store/Store";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const Storesmainpage=()=>{

     const dispatcher=useDispatch();
     const location=useLocation();

    const { storeid, storename, storeemail } = location.state || {};

  console.log(storeid);  
  console.log(storename);  
  console.log(storeemail);  

  const [ratingdata, setRatingdata]=useState([])

  const [getrate, setGetrate]=useState(false)
  const [norate, setNorate]=useState(false)



     useEffect(()=>{

         axios.get("http://localhost:5000/getratingdata")
           .then((success)=>{
            // console.log(success.data);

            const ratingrecord=success.data.filter((item)=>{return item.sid===storeid})

              console.log("ratingrecord", ratingrecord)
           
           if(ratingrecord && ratingrecord.length > 0){
                setRatingdata(ratingrecord);
                setGetrate(true)
            console.log("ifififif")

           }else{
            setNorate(true)
            console.log("truetrue elseelse")
           }

    
           }).catch((error)=>{
            console.log(error)
              // setServer(true) 
           });


     },[])

     if(ratingdata.sid===storeid){

     }





    return(
        <>

        <div className={mystyle.mainpage}>
            <nav className={mystyle.navbar}>
                 <button className={mystyle.menuBtn} onClick={()=>dispatcher(actions.openSidebar())}><RiMenuUnfold2Fill size={22}/> </button>
            </nav>

            <div className={mystyle.submainpage}>

              <h1 className={mystyle.headp}>Dashboard Overview</h1>

              <p>Welcome, <strong>{storename}.</strong> Here's an overview of your store's customer ratings and reviews.</p>

              
              {norate &&
                <p className={mystyle.norate}>No rating for youre Store</p>
              }

              {getrate &&
                <table className={mystyle.ratingtable} >
                  <thead>
                    <tr>
                      <th>Store Name</th>
                      <th>users rating</th>
                      <th>users Name</th>
                      <th>users adress</th>
                      
                    </tr>
                  </thead>

                  <tbody className={mystyle.ratingtablebody}>
                    {
                      ratingdata.map((item, index)=>(
                          <tr key={index}>
                            <td>{index === 0 ? storename : ""}</td>
                            <td>{item.rating}</td>
                            <td>{item.uname}</td>
                            <td>{item.uaddress}</td>
                    </tr>

                      ))
                    }
                   
                  </tbody>
                </table>
              } 

               

              </div>  
        </div>        

        
        </>
    )
}
export default Storesmainpage;