
import { useEffect } from "react";

export const Login = () =>{
    
      useEffect(() => {
        const script = document.createElement('script');
       
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "./signin.js";
       
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "./signup.js";
       
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
       
        script.src = "ss4.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
  return(
    <>
   <br />
    <br />
        <div className="cont">
            <form action="" id="fouaa" className="form sign-in">
                <h2>Welcome</h2>
                <label>
                    <span>Email</span>
                    <input type="email" id="ema" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" id="passu"/>
                </label>
                <p className="forgot-pass">Forgot password?</p>
                <button type="submit" className="dubmit">submit</button>
             
            </form>
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                     
                        <h3>Don't have an account? Please Sign up!</h3>
                    </div>
                    <div className="img__text m--in">
                    
                        <h3>If you already has an account, just sign in.</h3>
                    </div>
                    <div className="img__btn">
                        <span className="m--up">Sign Up</span>
                        <span className="m--in">Sign In</span>
                    </div>
                </div>
                <form action="" className="form sign-up" id="ads">
                    <h2>Create your Account</h2>
                    <label>
                        <span>Name</span>
                        <input type="text" id="name" />
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" id="emaili"/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" id="passpass"/>
                    </label>
                    <button type="submit" className="dubmit">Sign Up</button>
                    
                </form>
            </div>
        </div>
        </>

  );
};