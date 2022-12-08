import React, { useRef, useEffect, MutableRefObject } from "react";
import { Canvas } from "@react-three/fiber";
import background from '../../static/bg.png'

interface Props {
  canvasref:any
  children: React.ReactNode;
}

const { innerWidth, innerHeight } = window;

export default function FullScreenCanvas({ canvasref, children }: Props): JSX.Element {
  
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 50,
        aspect: innerWidth / innerHeight,
        near: 0.1,
        far: 2000
      }}
      dpr={window.devicePixelRatio}
      ref={canvasref}
      style={{
        width: innerWidth + "px",
        height: innerHeight + "px",
        backgroundImage: `url(${background})`
      }}
    >
      {children}
    </Canvas>
  );
}
