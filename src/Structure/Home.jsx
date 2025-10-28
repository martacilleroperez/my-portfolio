// Home.jsx
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {Sky } from '@react-three/drei';
import styled from 'styled-components'; 

import Loader from '../components/Loader.js';
import KioskModel from '../models/Qiosco.jsx';
import HomeInfo from '../components/HomeInfo.jsx';


// 📦 Styled Components
const ScrenSize = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #ccc; 
`;

const SmallText = styled.section`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  color: #ff0000;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  text-align: center;
  z-index: 10;
  pointer-events: none;
`;

const StyledCanvas = styled(({ isRotating, ...props }) => <Canvas {...props} />)`
  width: 100%;
  height: 100%;
  display: block;
  cursor: ${({ isRotating }) => (isRotating ? 'grabbing' : 'grab')};
  touch-action: none;
`;

const MartaPopup = () => (
  <div
    style={{
      position: 'fixed',
      bottom: '2vh',
      left: '2vw',
      zIndex: 9999,
      background: 'rgba(103, 2, 2, 0.85)',
      color: '#F8EEDF',
      padding: 'clamp(10px, 2vw, 30px)',
      borderRadius: '10px',
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
      maxWidth: '17vw',
      width: 'clamp(200px, 25vw, 400px)',
      lineHeight: '1.6',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
      pointerEvents: 'none',
    }}
  >
    Created by Marta Cillero ✨ 
  </div>
);

// 📐 Helper to Adjust Model Based on Screen Size
const AdjustToScreen = () => {
  let screesize = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
  let screenPOs = [0, 1.22, 1];
  let rotation = [0.1, 4.7, 0];
  return [screesize, screenPOs, rotation];
};

// 🌀 This rotates both the model and sky
const SceneGroup = ({ children }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.00; // THE ROTATION PART IS COOL BTU I COULDTN MANAGE TO MAKE IT WORK !!!!
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const Home = () => {
  const [isRotating, setRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [scale, position, rotation] = AdjustToScreen();

  return (
    <ScrenSize>
      <MartaPopup />
      <SmallText>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </SmallText>
      <StyledCanvas
        isRotating={isRotating}
        camera={{ position: [11, 3.5, 2], near: 0.2, far: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >


        <Suspense fallback={<Loader />}>
          <SceneGroup>
            <KioskModel
              scale={scale}
              position={position}
              rotation={rotation}
              isRotating={isRotating}
              setRotating={setRotating}
              setCurrentStage={setCurrentStage}
            />
          <Sky
            distance={450000}
            sunPosition={[10, 2, -10]}
            inclination={0.6}
            azimuth={0.25}
            mieCoefficient={0.005}
            mieDirectionalG={0.6}
            rayleigh={-3}
            turbidity={8000}
          />
          </SceneGroup>

          {/* Optional lighting setup */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <spotLight position={[20, 20, 5]} angle={0.3} penumbra={2} />
          <hemisphereLight intensity={0} />
        </Suspense>
      </StyledCanvas>
    </ScrenSize>
  );
};

export default Home;
