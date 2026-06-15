import { useDispatch } from "react-redux";
import mystyle from "./Storesmainpage.module.css"
import { actions } from "../Store/Store";
import { RiMenuUnfold2Fill } from "react-icons/ri";

const Storesmainpage=()=>{

     const dispatcher=useDispatch();
    return(
        <>

        <div className={mystyle.mainpage}>
            <nav className={mystyle.navbar}>
                 <button className={mystyle.menuBtn} onClick={()=>dispatcher(actions.openSidebar())}><RiMenuUnfold2Fill size={22}/> </button>
            </nav>

            <div className={mystyle.submainpage}>

                   <h1 className={mystyle.headp}>Dashboard Overview</h1>

                <p>Welcome back, store. Here's what's happening today.</p>
              </div>  
        </div>        

        
        </>
    )
}
export default Storesmainpage;