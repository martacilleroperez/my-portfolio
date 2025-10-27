// loader code for the website 
// look at https://codepen.io
import React from 'react';
import { Html } from '@react-three/drei';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
   width: 100vw;
  height: 100vh;
  background-color: #313344; /* 🎨 SET YOUR BACKGROUND COLOR HERE */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  top: 0;
  left: 0;
`;

const ColorText = styled.p`
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Loader = () => {
  console.log('🚀 SVG Loader rendering...');
  return (
    <Html center>
      <LoaderWrapper>
        <svg
          version="1.1"
          id="L2"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
          width="80px"
          height="80px"
        >
          <circle
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="10"
            cx="50"
            cy="50"
            r="48"
          />
          <line
            fill="none"
            strokeLinecap="round"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="10"
            x1="50"
            y1="50"
            x2="85"
            y2="50.5"
          >
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </line>
          <line
            fill="none"
            strokeLinecap="round"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="10"
            x1="50"
            y1="50"
            x2="49.5"
            y2="74"
          >
            <animateTransform
              attributeName="transform"
              dur="15s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </line>
        </svg>
        <ColorText>Loading...</ColorText>
      </LoaderWrapper>
    </Html>
  );
};

export default Loader;
