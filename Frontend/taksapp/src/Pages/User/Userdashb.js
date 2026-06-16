import { Outlet } from "react-router";
import mystyle from "./Userdashb.module.css"
import { useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Usersidebar from "./Usersidebar";



const Userdashboard=()=>{

 

    return(
        <>


        <div className={mystyle.layout}>

      <Usersidebar />


        <div className={mystyle.mainContent}>
          <Outlet />
        </div>
       

      {/* </div> */}

       </div>
     </>
    )
}
export default Userdashboard;