import React from "react";
import { OrthographicCamera } from "@react-three/drei";

const { innerWidth, innerHeight } = window;

export default function ExampleCamera(): JSX.Element {

  return (
    <OrthographicCamera
      left={innerWidth/-2}
      right={innerWidth/2}
      top={innerHeight/2}
      bottom={innerHeight/-2}
      near={1}
      far={1000}
    />
  );
}

// makeDefault
// fov={100}
// aspect={innerWidth / innerHeight}
// near={1}
// far={10000}
// position={[0, 1, 5]}