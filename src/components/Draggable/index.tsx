import { useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { DragControls } from 'three-stdlib';

type DraggableProps = {
    children : React.ReactNode
}

function Draggable({children}:DraggableProps) {
    const ref = useRef<THREE.Group>(null)
    const { camera, gl, scene } = useThree();

    useEffect(() => {
      const controls = new DragControls(ref.current!.children, camera, gl.domElement )
      controls.transformGroup = true

      const orbitControls = (scene as any).orbitControls
      const line1 = (scene as any).children[1]
      const line2 = (scene as any).children[2]
      const line3 = (scene as any).children[3]


      controls.addEventListener('dragstart', () => {
            orbitControls.enabled = false;
            line1.visible = false;
            line2.visible = false;
            line3.visible = false;
        })
        controls.addEventListener('dragend', () => {
                orbitControls.enabled = true;
                line1.visible = true;
                line2.visible = true;
                line3.visible = true;
        })

    }, [camera, gl.domElement, scene])
    
  return (
        <group ref={ref}>{children}</group>
  )
}

export default Draggable