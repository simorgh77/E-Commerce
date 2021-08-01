import React from 'react'
import { RouteComponentProps } from "react-router";
import "./Login.page.style.css"
import loginpic from "../../assest/img/loginpic.png"
 const Login_page:React.FC<RouteComponentProps> = () => {
    return (
    
<>
        <div className="main"></div>

        <div className="base">
   <div className="left">
       <div className="pic">
           <img src={loginpic} alt="login icon"/>
       </div>
   </div>
   <div className="right">
       <div className="content">
           <div className="header">
               <div className="left_hedear bold">سیمرغ شاپ</div>
           </div>
           <div className="main_div">
               <div></div>
               <input type="text"  className='text-center' placeholder="نام کاربری را وارد نمایید"/>
               <input type="password" className='text-center'  placeholder="رمز عبور را وارد نمایید"/>
           </div>
           <div className="button">
               <input type="button" value="وارد شو"/>
           </div>       
       </div> 
       <div className="text">
       <div className='text-center bold '>{"ساخت حساب کاربری"}</div>
   </div>
   </div>
   
        </div>
   
        </>
    )
}
export default Login_page
