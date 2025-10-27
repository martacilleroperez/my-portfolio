import React, { useState, useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const TempModel = ({ isRotating, setRotating, setCurrentStage, scale, position, rotation, ...props }) => {
    const { scene } = useGLTF('/temp_kiosk.glb');
    const modelRef = useRef();
    const { gl, viewport } = useThree();
    const lastX = useRef(0);
    const lastY= useRef(0);
    const rotationSpeed = useRef(0);
    // temper with the damping so it looks relaistic 
    const dampingFact = 0.75;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setRotating(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    lastX.current = clientX;
    lastY.current= clientY
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setRotating(false);
  };

  const handlePointerMove = (event) => {
    if (!isRotating) return; 
  
    event.stopPropagation();
    event.preventDefault();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    lastX.current = clientX;

    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    const gamma = (clientY - lastY.current) / viewport.width;
    lastY.current = clientY;

    rotationSpeed.current = delta * 5+ gamma *5 ;
    modelRef.current.rotation.y += delta * 0.01 * Math.PI; // horizontal drag → Y axis rotation
    modelRef.current.rotation.x += gamma * 0.01 * Math.PI
    
    modelRef.current.rotation.x = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, modelRef.current.rotation.x)
      );
  };
  

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      modelRef.current.rotation.y += 0.01 + Math.PI;
    } else if (event.key === 'ArrowRight') {
      if (!isRotating) setRotating(true);
      modelRef.current.rotation.y -= 0.01 + Math.PI;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating ) {
        if (Math.abs(rotationSpeed.current) > 0.001) {
            modelRef.current.rotation.y += rotationSpeed.current;
            rotationSpeed.current *= dampingFact;}
            else {
                rotationSpeed.current = 0;
            }

    } else {
      const rotation = modelRef.current.rotation.y;
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.2 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.5:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 3:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);

    return () => {
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('keydown', handleKeyDown);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp, handleKeyDown, handleKeyUp, viewport]);

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);
      modelRef.current.position.y -= center.y; // Place model on floor
    }
  }, []);


  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={scale}
      position={position}
      rotation={rotation}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}

      {...props}
    /> );
  
};

useGLTF.preload('/temp_kiosk.glb');
export default TempModel;
