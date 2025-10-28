import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./styleBook.css";


// 👇 ask Parcel for served URLs to these static JS files
import jqueryUrl from "../assets/libs/jquery.js?url";
import turnUrl   from "../assets/libs/turn.js?url";

const BackBox = ({ link, btnText }) => (
  <div style={{
    position: "fixed", top: 20, right: 20, padding: "10px 15px",
    borderRadius: 10, zIndex: 1000
  }}>
    <Link 
      to={link}
      style={{
        display: "inline-block", padding: "10px 20px",
        background: "rgba(103, 2, 2, 0.6)", color: "#F8EEDF",
        borderRadius: 5, textDecoration: "none", fontWeight: "bold"
      }}
    >
      {btnText}
    </Link>
  </div>
);

function Contact() {
  const [isReady, setIsReady] = useState(false); // Track when ready

  useEffect(() => {
    const jQueryScript = document.createElement("script");
    jQueryScript.src = "/libs/jquery.js";

    jQueryScript.onload = () => {
      const turnScript = document.createElement("script");
      turnScript.src = "/libs/turn.js";

      turnScript.onload = () => {
        if (window.$) {
          const flipbook = window.$(".flipbook");
          flipbook.turn();
          flipbook.addClass("visible"); // 👈 makes it fade in
          setIsReady(true);
        }
      };

      document.body.appendChild(turnScript);
    };

    document.body.appendChild(jQueryScript);
  }, []);

  return (
    <div>
      <div className="flipbook">
        <div className="hard" style={{
          background: "rgb(103, 2, 2)",
          fontFamily: "'Playfair Display', serif",
          // optional: clamp(min, preferred, max) — ensure min <= max
          fontSize: "clamp(1.5rem, 2vw, 6rem)",
          color: "#F8EEDF"
        }}>
          CoNtACt Me <small>~ Turn the pages to learn more ~</small>
        </div>

        <div className="hard"></div>

        <div>
  <div
    className="hard"
    style={{
      background: "white",
      fontFamily: "'Playfair Display', serif",

      fontSize: "clamp(1.5rem, 2vw, 6rem)",
      color: "black",
      textAlign: "center",
      lineHeight: "2.2",          // increases vertical spacing between lines
      letterSpacing: "0.05em",    // subtle spacing between letters
      padding: "50px 30px",       // adds more breathing space around text
    }}
  >
   <p style={{ margin: "25px 0" }}>
  <span>Mail:</span> <br />
  <a
    href="mailto:martacillero2005@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "rgb(103, 2, 2)", textDecoration: "underline" }}
  >
    marta.c.5.c.atram@gmail.com
  </a>
</p>


    <p style={{ margin: "25px 0" }}>
      Linked:{" "}
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "rgb(103, 2, 2)", textDecoration: "underline" }}
      >
        link here
      </a>
    </p>

    <p style={{ margin: "25px 0" }}>
      CV:{" "}
      <a
        href="https://drive.google.com/file/d/1RMYkaVjqjBYXwZQdLIgCq0ep5FO7C4ew/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "rgb(103, 2, 2)", textDecoration: "underline" }}
      >
        link here
      </a>
    </p>
  </div>
  <small>1</small>
</div>



        <div className="hard"></div>
        <div className="hard" style={{ background: "rgb(103, 2, 2)" }}></div>
      </div>

      {/* below the flipbook */}
      <BackBox link="/" btnText="Go Back Home" />
    </div>
  );
}

export default Contact;
