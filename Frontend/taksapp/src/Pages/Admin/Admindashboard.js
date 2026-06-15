import { Outlet } from "react-router";
import mystyle from "./Admindashboard.module.css"
import Adminsidebar from "./Adminsidebar";
import { useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";



const Admindashboard=()=>{

 

    return(
        <>


        <div className={mystyle.layout}>

      <Adminsidebar />


        <div className={mystyle.mainContent}>
          <Outlet />
        </div>
       

      {/* </div> */}

       </div>
     </>
    )
}
export default Admindashboard;