import "./styles.css";
import { useEffect } from "react";
import { SectionContainer } from "./SectionContainer";

export const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "./ss3.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  useEffect(() => {
    const script = document.createElement('script');
   
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <section id="home">
        
        <div id="hel">
          <ul id="firstleft">
            <li id="discover">Discover the Natural Wisdom</li>
            <li>Your journey to Health & Harmony</li>
          </ul>
          <div id="firstright">AYURVEDA</div>
          <ul id="secondright">
            <li>Ancient Wisdom</li>
            <li id="hogya">Modern Wellness</li>
          </ul>
          
          <ul id="secondleft">
            <li>Healing Through</li>
            <li id="krliya">Nature's Wisdom</li>
          </ul>
        </div>
      </section>
      <div id="sc">
      <section className="sections" id="secs">
        <div className="section sec1">
          <div className="section-content">
            
            <h2>Section 1</h2>
            <p>Your custom content for Section 1.</p>
            <a href="https://ayurveda.streamlit.app/" target="_blank">Click</a>
          </div>
        </div>
        <div className="section sec2">
          <div className="section-content">
           
            <h2>Section 2</h2>
            <p>Your custom content for Section 2.</p>
            <a href="https://ayurvedic-colleges.streamlit.app/" target="_blank">Click</a>
          </div>
        </div>
        <div className="section sec3">
          <div className="section-content">
            
            <h2>Section 3</h2>
            <p>Your custom content for Section 3.</p>
            <a href="https://ayurvedic-hospitals.streamlit.app/" target="_blank">Click</a>
          </div>
        </div>
        <div className="section sec4">
          <div className="section-content">
            
            <h2>Section 4</h2>
            <p>Your custom content for Section 4.</p>
            
          </div>
        </div>
      </section>
      </div>
      <SectionContainer />
    </>
  );
};

