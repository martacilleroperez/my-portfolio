import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import kioskUrl from 'url:../assets/libs/kiosk_tjhis_time_fr.glb';

const KioskModel = ({ isRotating, setRotating, setCurrentStage, scale, position, rotation, ...props }) => {
  const groupRef = useRef();
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const lastY = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFact = 0.75;
  const { nodes, materials } = useGLTF(kioskUrl) ;
  useGLTF.preload(kioskUrl);
  
  const handlePointerDown = (event) => {
    setRotating(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = () => {
    setRotating(false);
  };

  const handlePointerMove = (event) => {
    if (!isRotating) return;
  
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    lastX.current = clientX;
    rotationSpeed.current = delta * 7 ;
    groupRef.current.rotation.y += delta * 0.01 * Math.PI;
  };
  
useFrame(() => {
  const rotation = groupRef.current.rotation.y;
  const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);


  switch (true) {
    case normalizedRotation > 5 && normalizedRotation <= 7:
      setCurrentStage(4); // About
      break;
    case normalizedRotation >= 1.2 && normalizedRotation <= 1.8:
      setCurrentStage(3); // Contact
      break;
    case normalizedRotation >= 2.5 && normalizedRotation <= 3.5:
      setCurrentStage(2); // Playground
      break;
    case normalizedRotation >= 4.35 && normalizedRotation <= 4.65:
      setCurrentStage(1); // Projects
      break;
    default:
      setCurrentStage(null);
  }

  // 🚀 Apply rotation logic
  if (!isRotating) {
    if (Math.abs(rotationSpeed.current) > 0.001) {
      groupRef.current.rotation.y += rotationSpeed.current;
      rotationSpeed.current *= dampingFact;
    } else {
      rotationSpeed.current = 0;
    }
  }
});


  useEffect(() => {
    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);
      groupRef.current.position.y -= center.y; // Place model on floor
    }
  }, []);

  return (
    <group
  ref={groupRef}
  onPointerDown={handlePointerDown}
  onPointerUp={handlePointerUp}
  onPointerMove={handlePointerMove}
  {...props}
  dispose={null}
>
    {/* Continue pasting all other groups and meshes from your model JSX here... */}
 
    <group {...props} dispose={null}>
      <group position={[3.456, 2.495, -3.833]} scale={[0.136, 2.521, 0.136]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['dark blue ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['HOJAS .001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_3.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_4.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_5.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_6.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_7.geometry}
          material={materials['ROJO CLARO .001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_8.geometry}
          material={materials['ROJO .001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_9.geometry}
          material={materials['ROJO OSCURO .001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_10.geometry}
          material={materials['book ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_11.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_12.geometry}
          material={materials.granate}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_13.geometry}
          material={materials['ROJO ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_14.geometry}
          material={materials['AMARILLO-NARANKJA.001']}
        />
      </group>
      <group position={[3.611, 2.48, 4.419]} scale={[0.134, 2.493, 0.134]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['dark blue ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials['deco kiosk ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials['HOJAS .002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_3.geometry}
          material={materials['NARANJA.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_4.geometry}
          material={materials['AMARILLO-NARANKJA.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_5.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_6.geometry}
          material={materials['ROJO CLARO .002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_7.geometry}
          material={materials['ROJO OSCURO ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_8.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_9.geometry}
          material={materials['ROJO OSCURO .002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_10.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_11.geometry}
          material={materials['LINRO AMARILLO POLLITO .002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_12.geometry}
          material={materials['granate.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_13.geometry}
          material={materials.granate}
        />
      </group>
      <group
        position={[-2.078, 2.989, -0.43]}
        rotation={[-3.082, 0.162, 1.616]}
        scale={[0.227, 0.023, 0.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-2.026, 4.007, 0.693]}
        rotation={[0.05, 0.38, -1.697]}
        scale={[-0.205, -0.023, -0.172]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials['Material.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-2.106, 1.995, 0.292]}
        rotation={[-3.081, -0.095, 1.63]}
        scale={[0.314, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_1.geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_2.geometry}
          material={materials['book ']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.032']}
        position={[0, -0.25, 0]}
        scale={20.105}
      />
      <group position={[0, 4.254, 0]} rotation={[0, 0.332, 0]} scale={[2.309, 4.187, 2.309]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['dark blue ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials['deco kiosk ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials['deco kiosk ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toldo_.geometry}
        material={materials['deco kiosk ']}
        position={[0, 4.432, 0]}
        rotation={[0, 0.332, 0]}
        scale={4.655}
      />
      <group
        position={[-3.671, 0.099, -1.978]}
        rotation={[0, -0.904, 0]}
        scale={[-0.643, -0.123, -0.643]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['book ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials['red book 1']}
        />
      </group>
      <group
        position={[3.223, 0.187, -1.974]}
        rotation={[Math.PI, -0.435, Math.PI]}
        scale={[0.444, 0.051, 0.317]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['ROJO OSCURO ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-3.686, 0.429, -1.958]}
        rotation={[0, -1.288, -Math.PI]}
        scale={[0.494, 0.057, 0.382]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[3.196, 0.059, -2.066]}
        rotation={[Math.PI, -0.952, Math.PI]}
        scale={[-0.501, -0.06, -0.513]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['book ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials['granate.002']}
        />
      </group>
      <group
        position={[-3.051, 0.216, 2.274]}
        rotation={[0, 0.922, 0]}
        scale={[-0.628, -0.075, -0.384]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[0.578, 3.097, -2.052]}
        rotation={[-0.079, 1.333, -1.424]}
        scale={[0.314, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.09, 4.086, -2.135]}
        rotation={[3.105, 1.506, 1.761]}
        scale={[0.295, 0.017, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[0.608, 4.039, -2.042]}
        rotation={[-0.085, 1.343, -1.419]}
        scale={[0.254, 0.025, 0.281]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['p-projects']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.845, 4.038, -1.941]}
        rotation={[0.129, -1.09, -1.497]}
        scale={[-0.256, -0.023, -0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.117, 3.049, -2.119]}
        rotation={[-2.772, 1.457, 1.263]}
        scale={[0.314, 0.023, 0.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.645, 1.939, -2.061]}
        rotation={[3.076, 1.264, 1.667]}
        scale={[0.223, 0.033, 0.265]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[0.094, 2.016, -2.144]}
        rotation={[-0.287, 1.471, -1.219]}
        scale={[0.314, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-1.824, 4.016, 1.164]}
        rotation={[-3.11, -0.63, 1.675]}
        scale={[0.213, 0.024, 0.209]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-2.063, 4.076, -0.523]}
        rotation={[3.099, 0.292, 1.694]}
        scale={[0.285, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-2.113, 4.033, 0.099]}
        rotation={[-3.135, -0.108, 1.632]}
        scale={[0.256, 0.015, 0.214]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_1.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-2.13, 3.13, 0.308]}
        rotation={[-3.123, -0.224, 1.704]}
        scale={[0.314, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials['Material.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-1.879, 3.027, 1.032]}
        rotation={[-3.07, -0.523, 1.737]}
        scale={[0.259, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials['Material.021']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-1.858, 1.949, 1.004]}
        rotation={[3.137, -0.519, 1.595]}
        scale={[0.267, 0.023, 0.28]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-2.073, 1.978, -0.437]}
        rotation={[-3.14, 0.179, 1.585]}
        scale={[0.314, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials['Material.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[0.695, 2.022, 2.038]}
        rotation={[-0.066, -1.188, -1.522]}
        scale={[0.314, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.018, 3.043, 2.11]}
        rotation={[2.406, -1.554, 0.852]}
        scale={[0.314, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[0.759, 3.077, 1.991]}
        rotation={[-0.09, -1.158, -1.614]}
        scale={[0.314, 0.042, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials['red book 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[0.256, 4.016, 2.114]}
        rotation={[-0.194, -1.383, -1.674]}
        scale={[0.256, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials['red book 1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials['Material.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.448, 4.008, 2.057]}
        rotation={[-3.048, -1.362, 1.67]}
        scale={[0.256, 0.023, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials['Material.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[0.862, 4.016, 1.941]}
        rotation={[-0.09, -1.086, -1.547]}
        scale={[0.256, 0.012, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_1.geometry}
          material={materials['Material.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.027, 1.984, 2.133]}
        rotation={[-0.568, -1.515, -2.074]}
        scale={[0.314, 0.027, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials['red book3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials['Material.030']}
        />
                <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_2.geometry}
          material={materials['book ']}
        />
      </group>
      <group
        position={[-0.788, 2.982, -1.985]}
        rotation={[-3.005, 1.133, 1.49]}
        scale={[0.227, 0.023, 0.205]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials['read book 4']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_1.geometry}
          material={materials['Material.012']}
        />
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029_2.geometry}
        material={materials['book ']}
        />
        </group>
        </group>
        </group> 
  );
};

useGLTF.preload('/kiosk_tjhis_time_fr.glb');
export default KioskModel;
