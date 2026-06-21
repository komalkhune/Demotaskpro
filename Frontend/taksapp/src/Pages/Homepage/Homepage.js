import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router";
import style from "./Homepage.module.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { GrUserManager } from "react-icons/gr";
import { GiGraduateCap } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
// import 'bootstrap-icons_font_bootstrap-icons.css'

const Homepage=()=>{
    // <FcManager />

    const navigate=useNavigate();

    //  const handleChange = (e) => {
    // const value = e.target.value;

    // if (value === "manager") {
    //   navigate("/managerlogin");
    // } else if (value === "student") {
    //   navigate("/employeelogin");
    // }
//   };


    return(

        <div className={style.fullpage}>

            <div className={style.page}>

                <div className="d-flex justify-content-between mb-4">

                    <div className={style.header}>
                        <div className={style.homeicon}><LuLayoutDashboard /></div>
                        <div className={style.pname}><p className={style.hometitle}>Demo<span>TASK</span></p></div>
                    </div>
                    {/* <div className={style.headerright}>
                        <div className={style.paras}><p>Already have an account?</p></div>
                        <div className={style.loginbtm}>
                            <select onChange={handleChange}>
                              <option value="">Login</option>
                              <option value="manager">Manager Login</option>
                              <option value="student">Student Login</option>
                            </select>
                        </div>

                    </div> */}

                </div>
                

                <h1 className={style.h1title}>Manage Stores, Users, and Ratings Efficiently</h1>

                <p className={style.para}>Choose your role to manage stores, submit ratings, and access a smart platform designed for users, store owners, and admins.</p>

                <div className={style.way}>



                    <Link to="login" className={style.link}>
                     <div className={style.hrdiv}>
                        <div className={style.wayicon}><MdManageAccounts /></div>
                        <h3>Admin / Store</h3>
                        <p>An Admin manages users, candidates, and stores while controlling system activities and maintaining records.</p>
                        <h5>Register as Admin/Store <FaArrowRight /></h5>
                     </div>
                    </Link>  

                
                    
                    <Link to="signup" className={style.link}>
                     <div className={style.hrdiv}>
                    <div className={style.wayicon}><GrUserManager /></div>
                    {/* <h3>HR & Management</h3> */}
                    <h3>User</h3>

                    <p>A User rates and reviews stores, while a Store Owner manages store details and view customer ratings.</p>
                    <h5>Register as User <FaArrowRight /> </h5>
                        </div>
                    </Link>  


                    
{/*                     
                    <Link to="employeesignup" className={style.link}>
                     <div className={style.hrdiv}>
                    <div className={style.wayicon}><GiGraduateCap /></div>
                    <h3>Student / Intern</h3>
                    <p>Receive Assingnments, update task progress, and showcase your skills to your management term.</p>
                    <h5>Register as Student <FaArrowRight /></h5>
                        </div>
                    </Link>    */}


             


                </div>

                {/* <div className={style.footersection}>
                    <div className={style.footerp}><p>© 2024 TaskTracker Pro System. All rights reserved.</p></div>
    
                    <div className={style.footer}>
                        <div className={style.footerpara}><a href="">Help Center</a></div>
                        <div className={style.footerpara}><a href="">System Status</a></div>
                        <div className={style.footerpara}><a href="">Security</a></div>
                    </div>
                </div> */}


            </div>
            <Outlet/>



        </div>

    )
}

export default Homepage;