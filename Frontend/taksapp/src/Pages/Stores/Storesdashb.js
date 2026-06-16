import { Outlet } from "react-router";
import mystyle from "./Storesdashb.module.css"
import { useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Storessidebar from "./Storessidebar";



const Storesdashb=()=>{

 

    return(
        <>


        <div className={mystyle.layout}>

      <Storessidebar />


        <div className={mystyle.mainContent}>
          <Outlet />
        </div>
       

      {/* </div> */}

       </div>
     </>
    )
}
export default Storesdashb;