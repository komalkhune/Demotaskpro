import { Link, useNavigate } from "react-router";
import mystyle from "./Storessidebar.module.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store/Store.js";
import { BiLogOut } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";

const Storessidebar=()=>{ 

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
                                   
                    <ul className={mystyle.menuList}>
                  
                       <li><Link to="storesmainpage" className={mystyle.link}><LuLayoutDashboard  size={22}/> Dashboard</Link></li>
                       {/* <li><Link to="adduser" className={mystyle.link}><IoPersonAddSharp  size={22}/> Add users</Link></li> */}
                       {/* <li><Link to="employeelist" className={mystyle.link}><CiViewList  size={22}/>Employee list</Link></li>
                        <li><Link to="createteam" className={mystyle.link}><MdCreateNewFolder   size={22}/>Create Team</Link></li>
                         <li><Link to="teams" className={mystyle.link}><RiTeamLine  size={22}/>View Teams</Link></li>
                         <li><Link to="taskassign" className={mystyle.link}><GoTasklist  size={22}/>Assign Task</Link></li>
                         <li><Link to="taskstatus" className={mystyle.link}><SiGoogletasks  size={22}/>Tast Status</Link></li> */}
                       <li><Link to="/" onClick={Logout} className={mystyle.link}><BiLogOut size={22} /> Logout</Link></li>

                  
                    </ul>
               
                </div>


        </div>
           

    
    )
}
export default Storessidebar;


