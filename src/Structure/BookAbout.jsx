import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"; 
import "./styleBook.css";
import "turn.js";
import pic1 from 'url:../assets/libs/aboutMePics/1.png';
import pic2 from 'url:../assets/libs/aboutMePics/2.png';
import w from 'url:../assets/libs/aboutMePics/w.png';

const BackBox = ({ link, btnText }) => {
  return (
    <div
      style={{
        position: "fixed",  //  fixed to the screen, not flow of page
        top: "20px",        // 20px from top
        right: "20px",      // 20px from right
        padding: "10px 15px",
        borderRadius: "10px",
        zIndex: 1000        // Make sure it's above other content
      }}
    >
      <Link 
        to={link}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: 'rgba(103, 2, 2, 0.6)',
          color: "#F8EEDF",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        {btnText}
      </Link>
    </div>
  );
};



function BookAbout() {
  const [isReady, setIsReady] = useState(false); // 👈 added state to track when turn.js is ready

  useEffect(() => {
    const loadScripts = async () => {
      const jQueryScript = document.createElement('script');
      jQueryScript.src = "/libs/jquery.js";

      jQueryScript.onload = () => {
        const turnScript = document.createElement('script');
        turnScript.src = "/libs/turn.js";

        turnScript.onload = () => {
          const flipbook = window.$(".flipbook");
          flipbook.turn();
          flipbook.addClass("visible"); // 👈 fade in now!
        };

        document.body.appendChild(turnScript);
      };

      document.body.appendChild(jQueryScript);
    };

    loadScripts();
  }, []);


  return (
    <div>
     <div className="flipbook">
  <div className="hard" style={{ background: 'rgb(103, 2, 2)', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(6rem, 2vw, 1.5rem)', color:'#F8EEDF'}} > 
    AbOUt mE <small>~ Turn the pages to learn more~ </small></div>
  <div className="hard"></div>
  <div>
    <img
      src= {pic1}
      alt="meme1"
      onLoad={(e) => e.target.classList.add('visible')}
    />
    <small>1</small>
  </div>
  <div>
    <img
      src= {w}
      alt="meme1"
      onLoad={(e) => e.target.classList.add('visible')}
    />
    <small>2</small>
  </div>
  <div>
    <img
      src= {pic2}
      alt="meme2"
      onLoad={(e) => e.target.classList.add('visible')}
    />
        <small>3 </small>
  </div>
  
  <div className="hard"></div>
  <div className="hard" style={{ background: 'rgb(103, 2, 2)' }}>
    </div>
</div>

{/* below the flipbook */}
<BackBox link="/" btnText="Go BaCK hOMe" />
</div>
    
  );
}


export default BookAbout;
