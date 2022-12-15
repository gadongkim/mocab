import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import FullScreenCanvas from './components/FullScreenCanvas';
import DraggableCircles from './components/DraggableCircles';
import { OrbitControls } from '@react-three/drei'
import Coordinates from './components/Coordinates';
import TxtButton from './components/TxtButton';
// import Rounded from './components/Cannon';

function App() {
  const [active, setActive] = useState(true)
  const ControlRef = useRef<any>()
  const canvasRef = useRef(null!)
  const [controls, setControls ] = useState();
  
  useEffect(() => {
    if (!ControlRef.current) return;
    setControls(ControlRef.current);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ControlRef.current);

  const onChanging = () => {
    setActive(!active)
    ControlRef.current.enabled = active;
  }
  
 return (
    <>
    {/* <Rounded/> */}
    <FullScreenCanvas canvasref={canvasRef}>
      <OrbitControls 
          attach="orbitControls" 
          ref={ControlRef} 
          autoRotate={true}  
          autoRotateSpeed = {0.5} 
          enableDamping={true} 
          enableZoom={true} 
          minZoom={4}
          maxZoom={5.5}
          enablePan={false}/>
      <ambientLight />
        <Coordinates/>
        <DraggableCircles/> 
        <TxtButton onClickEvnt={onChanging}/>
    </FullScreenCanvas>

  </>
  );
}

export default App;
