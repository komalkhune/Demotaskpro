
import mystyle from "./Addstore.module.css"

const Addstore=()=>{
    return(
        <>

         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>Login</h2>

                {error && (
                <div className={mystyle.errorbox}>
                  <p> Please Fill all Field</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

               {errorvalid && (
                <div className={mystyle.errorbox}>
                  <p> Email is Invalid</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                   <label className={mystyle.lable}>Email</label>
                    <input className={mystyle.inputfield} type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>

                    <label className={mystyle.lable}>Email</label>
                    <input className={mystyle.inputfield} type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                
  
                     <label className={mystyle.lable}>password</label>
                    <input className={mystyle.inputfield} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                     
                

                <button className={mystyle.loginbtn} onClick={save}>save</button>

                
  

            </div>
        </div>
        </>
    )
}
export default Addstore;