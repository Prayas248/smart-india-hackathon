import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { useEffect } from "react";

import "./styles.css";
import logo from "./LOGO.jpg";

export const Navbar = () =>{
    
      useEffect(() => {
        const script = document.createElement('script');
       
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "./ss1.js";
       
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    return (
      <header id="head">
      <nav id="navbar">
          <div className="logo"><Link to='/'><img src={logo} /></Link></div>
          <ul className="nav-links">
          <li id="google_translate_element"></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link to='/blog'>Data</Link></li>
              <li><Link to='/login'>Login</Link></li>
          </ul>
      </nav>
  </header>
  
  );
 };
