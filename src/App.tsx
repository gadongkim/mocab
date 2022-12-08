import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ExampleCamera from './components/Camera'
import FullScreenCanvas from './components/FullScreenCanvas';
import DraggableCircles from './components/DraggableCircles';
import { OrbitControls } from '@react-three/drei'
import Coordinates from './components/Coordinates';
import TxtButton from './components/TxtButton';
import Draggable from './components/Draggable'

function App() {
  const [active, setActive] = useState(true)
  const ControlRef = useRef<any>()
  const canvasRef = useRef(null!)
  const [controls, setControls ] = useState();
  

  useEffect(() => {
    if (!ControlRef.current) return;
    setControls(ControlRef.current);

  }, ControlRef.current);

  const onChanging = () => {
    setActive(!active)
    ControlRef.current.enabled = active;
  }
  
 return (
    <>
    <FullScreenCanvas canvasref={canvasRef}>
      <OrbitControls attach="orbitControls" ref={ControlRef} autoRotate={true} enableDamping={true} enableZoom={true} enablePan={false}/>
      <ambientLight />
      <Coordinates/>
      <DraggableCircles/> 
      <TxtButton onClickEvnt={onChanging}/>
    </FullScreenCanvas>

  </>
  );
}

export default App;
