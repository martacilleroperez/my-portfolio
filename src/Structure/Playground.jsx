import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./styleBook.css";
import "turn.js";

  // resize so the top of the screen also adapts
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
          background: 'rgba(169, 38, 21, 0.6)',
          color: "#E8C999",
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
  <div className="hard" style={{ background: 'rgb(169, 38, 21)', fontFamily:"'Playfair Display', serif", fontSize: 'clamp(6rem, 2vw, 1.5rem)', color:'#E8C999'}} > 
    PLaYgrOunD <small>~ welcome to the playground, a place for experimentation and sketches~ </small></div>
  <div className="hard"></div>
  <div>
    <img
      src="images/playground/1.png"
      alt="meme1"
      onLoad={(e) => e.target.classList.add('visible')}
    />
    <small>1</small>
  </div>
  <div>
    <img
      src="images/playground/2.png"
      alt="meme1"
      onLoad={(e) => e.target.classList.add('visible')}
    />
    <small>2</small>
  </div>
  <div>
    <img
      src="images/playground/3.png"
      alt="meme2"
      onLoad={(e) => e.target.classList.add('visible')}
    />
        <small>3 </small>
  </div>
  <div>
    <img
      src="images/playground/4.png"
      alt="meme3"
      onLoad={(e) => e.target.classList.add('visible')}
    />
    <small>4</small>
  </div>
  <div>
    <img
      src="images/playground/5.png"
      alt="meme4"
      onLoad={(e) => e.target.classList.add('visible')}
    />
    <small>5</small>
  </div>
  <div>
    <img
    
      src="images/playground/6.png"
      alt="meme5"
      onLoad={(e) => e.target.classList.add('visible')}
    />
        <small>6</small>
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
