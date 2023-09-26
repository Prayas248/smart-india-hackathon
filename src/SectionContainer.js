import React from 'react';
import "./SectionContainer.css";
import arrow from "./arrow-right.png";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';




export const SectionContainer = () => {
  return (
   <>
    <div id="bloger">
      <div id="leftblog">Read our BLOG</div>
      <button id="rightblog"><Link to='/blog'>Read</Link></button>
    </div>
    
    <div className="heading">Articles</div>
    <div className="container">
        
      <div className="horizontal-div">
        <div className="under">Article 1</div>
        <p>Text for Article 1</p>
        <img src={arrow} />

      </div>
      <div className="horizontal-div">
      <div className="under">Article 2</div>
        <p>Text for Article 2</p>
        <img src={arrow} />
      </div>
      <div className="horizontal-div">
      <div className="under">Article 3</div>
        <p>Text for Article 3</p>
        <img src={arrow} />
      </div>
      <div className="horizontal-div">
      <div className="under">Article 4</div>
        <p>Text for Article 4</p>
        <img src={arrow} />
      </div>
    </div>
   </>
  );
};


