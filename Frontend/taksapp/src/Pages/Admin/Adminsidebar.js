import { Link, useNavigate } from "react-router";
import mystyle from "./Adminsidebar.module.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store/Store.js";
import { BiLogOut } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";

const Adminsidebar=()=>{ 

    const [sidebar, setSidebar]=useState(false)

    
    const navigate=useNavigate();
     const dispatcher=useDispatch();
     
    const open=useSelector((state)=>state.open);

    const sidebarclose=()=>{
       dispatcher(actions.sbarclose)
    }
   

    
   



   const Logout=()=>{
    
    navigate("/")

   }






   return(
        <div>

            <div className={`${mystyle.sidebar} ${open ? mystyle.show : ""}`}>

               <button className={mystyle.closeBtn}  onClick={()=>dispatcher(actions.closeSidebar())}> <IoMdCloseCircleOutline size={22}/></button>
               
                {/* <div className={mystyle.logo}><span className={mystyle.storageicon}><FaUser size={22} /></span><span>Employee Management</span></div> */}
                 <div className={mystyle.header}>
                        <div className={mystyle.homeicon}><LuLayoutDashboard/></div>
                        <div className={mystyle.pname}><p className={mystyle.hometitle}>Demo<span>TASK</span></p></div>
                    </div>
                                   
                    <ul className={mystyle.menuList}>changepass
                  
                       <li><Link to="mainpage" className={mystyle.link}><LuLayoutDashboard  size={22}/> Dashboard</Link></li>
                       <li><Link to="adduser" className={mystyle.link}><IoPersonAddSharp  size={22}/> Add users</Link></li>
                        <li><Link to="users" className={mystyle.link}><CiViewList  size={22}/>View Lists</Link></li>
                        <li><Link to="Changeadmpass" className={mystyle.link}><RiLockPasswordFill   size={22}/>Change pass</Link></li>

               
                       <li><Link to="/" onClick={Logout} className={mystyle.link}><BiLogOut size={22} /> Logout</Link></li>

                  
                    </ul>
               
                </div>


        </div>
           

    
    )
}
export default Adminsidebar;


