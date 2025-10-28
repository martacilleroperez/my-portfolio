// BookAbout.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./styleBook.css";
import pic1 from 'url:../assets/libs/aboutMePics/1.png';
import pic2 from 'url:../assets/libs/aboutMePics/2.png';
import w from 'url:../assets/libs/aboutMePics/w.png';


// 👇 ask Parcel for served URLs to these static JS files
import jqueryUrl from "../assets/libs/jquery.js?url";
import turnUrl   from "../assets/libs/turn.js?url";



const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });

const BackBox = ({ link, btnText }) => (
  <div style={{ position: "fixed", top: 20, right: 20, padding: "10px 15px", borderRadius: 10, zIndex: 1000 }}>
    <Link to={link} style={{ display: "inline-block", padding: "10px 20px", background: "rgba(103, 2, 2, 0.6)", color: "#F8EEDF", borderRadius: 5, textDecoration: "none", fontWeight: "bold" }}>
      {btnText}
    </Link>
  </div>
);

function BookAbout() {
  const flipRef = useRef(null);

  useEffect(() => {
    let $flip;

    (async () => {
      try {
        // 🔧 Ensure jQuery is on window (if your bundler isolated it)
        if (!window.jQuery) {
          await loadScript(jqueryUrl);  // load from src/assets/libs
          window.$ = window.jQuery;
        }

        // 🔧 Ensure the turn plugin is present
        if (!window.jQuery.fn?.turn) {
          await loadScript(turnUrl);    // load from src/assets/libs
        }

        // Debug sanity checks
        console.log("has jQuery?", !!window.jQuery);
        console.log("has plugin?", !!(window.jQuery && window.jQuery.fn.turn));
        console.log("same jQuery?", window.$ === window.jQuery);

        $flip = window.$(flipRef.current);

        // Ensure non-zero size (or give it size in CSS)
        if ($flip.width() === 0 || $flip.height() === 0) {
          $flip.css({ width: 800, height: 600 });
        }

        if ($flip.length && window.jQuery.fn.turn && !$flip.data("initialized")) {
          $flip.turn({ autoCenter: true });
          $flip.addClass("visible").data("initialized", true);
          console.log("✅ turn.js initialized");
        }
      } catch (e) {
        console.error("📛 Error loading/initializing turn.js:", e);
      }
    })();

    return () => {
      if ($flip && $flip.data("initialized")) {
        try {
          $flip.turn("destroy").removeData("initialized");
          console.log("🧹 turn.js destroyed on unmount");
        } catch {}
      }
    };
  }, []);

  return (
    <div>
      <div ref={flipRef} className="flipbook">
        <div className="hard" style={{ background: 'rgb(103, 2, 2)', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(6rem, 2vw, 1.5rem)', color:'#F8EEDF'}} >
          AbOUt mE <small>~ Turn the pages to learn more~ </small>
        </div>
        <div className="hard"></div>

        <div>
          <img src={pic1} alt="meme1" onLoad={(e) => e.target.classList.add('visible')} />
          <small>1</small>
        </div>
        <div>
          <img src={w} alt="meme1" onLoad={(e) => e.target.classList.add('visible')} />
          <small>2</small>
        </div>
        <div>
          <img src={pic2} alt="meme2" onLoad={(e) => e.target.classList.add('visible')} />
          <small>3</small>
        </div>

        <div className="hard"></div>
        <div className="hard" style={{ background: 'rgb(103, 2, 2)' }}></div>
      </div>

      <BackBox link="/" btnText="Go BaCK hOMe" />
    </div>
  );
}

export default BookAbout;
