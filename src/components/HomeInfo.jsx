import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




// make every square a differnt font and ina semi 
//traspart square and its a small text? and underneath teh button 
// the buttton is not boing recognized as clicked !!!



const InfoBox_about = ({ text, link = "/bookAbout", btnText }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '-20vh',                  // Responsive from bottom
        left: '18vw',                   // Center horizontally

        zIndex: 9999,
        pointerEvents: 'auto',
        maxWidth: '30vw',
        width: 'clamp(300px, 40vw, 600px)', // Responsive width
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Main content box */}
      <div
        style={{
          background: 'rgba(103, 2, 2, 0.7)',
          padding: 'clamp(15px, 4vw, 40px)',  // Responsive padding
          borderRadius: '0px',
        }}
      >
        <div
          style={{
            marginBottom: '1vh',
            color: '#F8EEDF',
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Responsive font size
            lineHeight: '1.9',
            whiteSpace: 'pre-line',
            maxWidth: '100%',
          }}
        >
          HelO mY NaMe Is MarTa, <br />
          aNd WelcOMe to My PorTFoLIo
        </div>
        
        <button
          onClick={() => {
            console.log('Navigating to', link);
            navigate(link);
          }}
          style={{
            marginTop: '1vh',
            padding: 'clamp(10px, 2vh, 15px) clamp(40px, 10vw, 100px)',
            background: '#F8EEDF',
            color: 'rgba(103, 2, 2, 0.8)',
            borderRadius: '10px',
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {btnText || "more info ->"}
        </button>
      </div>
    </div>
  );
};






const InfoBox_project = ({ link = "/projects", btnText }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '-25vh',             // responsive vertical position
        left: '-39vw',               // center horizontally
        transform: 'translateX(-50%)',
        zIndex: 9999,
        maxWidth: '20vw',
        width: 'clamp(300px, 30vw, 600px)', // responsive width
        pointerEvents: 'auto',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      {/* Main content box */}
      <div
        style={{
          background: 'rgba(103, 2, 2, 0.8)',
          padding: 'clamp(15px, 40vw, 40px)', // responsive padding
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            marginBottom: '1vh',
            color: 'rgb(241, 221, 190)', // lowercase RGB for valid CSS
            fontFamily: "'Eina 01', sans-serif",
            fontWeight: 200,
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', // responsive font
            lineHeight: '1.9',
            whiteSpace: 'pre-line',
          }}
        >
          ARe yOu CouRioUS aBoUt<br />
          mY oTHeR prOjecTS
        </div>

        <button
          onClick={() => {
            console.log('Navigating to', link);
            navigate(link);
          }}
          style={{
            marginTop: '1vh',
            padding: 'clamp(10px, 2vh, 15px)',
            background: 'rgb(241, 221, 190)',
            color: 'rgba(142, 22, 22, 0.8)',
            borderRadius: '10px',
            fontFamily: "'Roboto Slab', serif",
            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {btnText || "more info ->"}
        </button>
      </div>
    </div>
  );
};






const InfoBox_contact = ({ link = "/contact", btnText }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '-20vh', // Responsive from bottom
        left: '-49vw',   // Center horizontally
        zIndex: 9999,
        maxWidth: '90vw',
        width: 'clamp(300px, 30vw, 600px)', // Responsive width
        pointerEvents: 'auto',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      {/* Main content box */}
      <div
        style={{
          background: '#E8C999',
          padding: 'clamp(15px, 4vw, 40px)', // Responsive padding
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            marginBottom: '1vh',
            color: 'rgb(103,2,2)', // Note: lowercase "rgb"
            fontFamily: "'Fira Sans', sans-serif",
            fontWeight: 200,
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Responsive font
            lineHeight: '1.9',
            whiteSpace: 'pre-line',
          }}
        >
          Do You WaNt <br />
          tO coNAtcT ME?
        </div>

        <button
          onClick={() => {
            console.log('Navigating to', link);
            navigate(link);
          }}
          style={{
            marginTop: '1vh',
            padding: 'clamp(10px, 2vh, 15px) clamp(40px, 10vw, 100px)',
            background: 'rgb(103,2,2)',
            color: '#E8C999',
            borderRadius: '50px',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 200,
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', // Responsive font size
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {btnText || "more info ->"}
        </button>
      </div>
    </div>
  );
};




const InfoBox_playground  = ({ link="/playground", btnText }) => {
  const navigate = useNavigate();
  return (
    <div
    style={{
      position: 'fixed',
      bottom: '-20vh',
      left: '18vw',
      zIndex: 9999,
      pointerEvents: 'auto',
      maxWidth: '90vw',
    }}
    >
      {/* Main content box */}
      <div
        style={{
          background: 'rgba(169, 38, 21, 0.8)',
          width: 'clamp(300px, 30vw, 600px)', // Sets horizontal size of the box
          padding: 'clamp(10px, 5vw, 40px)', // Adds space inside, affects both
          borderRadius: '0px',
          textAlign: 'center',
          boxSizing: 'border-box',         
        }}
      >
        <div
          style={{
            marginBottom: '1px',
            color: 'rgb(241,221,190)',
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
            lineHeight: '1.9',
            whiteSpace: 'pre-line', 
            maxWidth: '600px',       
          }}
        >
          dO yOU WaNT To Go tO tHe PlAyGrOuND? <br />
          
        </div>
        </div>

        <button
        onClick={() => {
          console.log('Navigating to', link);
          navigate(link);
        }}
        style={{
          marginTop: '10px',
          padding: '10px 100px',

          background: 'rgb(241,221,190)', 
          color: 'rgba(169, 38, 21, 1)',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {btnText || "more info ->"}
      </button>
    </div>
    
  );
};

const renderContent = {
  4: () => (<InfoBox_about  link="/bookAbout" />),
  1: () => (<InfoBox_project link="/projects"  />),
  2: () => (<InfoBox_playground link="/playground" />),
  3: () => (<InfoBox_contact link="/contact"  />)
};

const HomeInfo = ({ currentStage }) => {
  const StageContent = renderContent[currentStage];
  return StageContent ? <StageContent /> : null;
};
export default HomeInfo; InfoBox_contact; InfoBox_about; InfoBox_project ;
