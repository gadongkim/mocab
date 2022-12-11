import React, { useEffect, useRef, useState } from "react";
import { Camera, Mesh, Object3D, OrthographicCamera } from "three";
import { Sphere } from "@react-three/drei";
import Draggable from "../Draggable";
import { Html, Stats } from "@react-three/drei";
import * as S from './style'

interface locationProps {
  x:number;
  y:number;
  z:number;
}


export default function DraggableCircles(): JSX.Element {
    const meshRef = useRef<Mesh>(null!);  
    const tmpArr:locationProps[] = [];
    const [locationList, setLocationList] = useState(Array<locationProps>)
    // const [locationList2, setLocationList2] = useState(Array<locationProps>)
    // let objects:Object3D[] = [];

    useEffect(() => {
      for(let i = 0; i <25; i++){
        const [x,y,z] = [(Math.random() * ( 2.5 - -2.5 )) + -2.5, (Math.random() * ( 2.5 - -1 )) + -1, (Math.random() * ( 2.5 - -2.5 )) + -2.5];
        tmpArr.push({x:x, y:y, z:z})
      }
      setLocationList(tmpArr)
    }, [])

    return (
      <>
      {
        locationList.map((value, key) => {
          console.log(key)
            let tmp = key % 3 === 0 ? 0.03 : 0.09
            return(
              <Draggable>
                <Sphere key = {key} ref={meshRef} scale ={tmp} position={[value.x,value.y,value.z]}  >
                  <sphereGeometry />
                  <meshStandardMaterial color={0xFF3232} />
                  <Html>
                    <S.DivBox className="label" >x:{value.x.toFixed(2)}</S.DivBox>
                    <S.DivBox className="label">y:{value.y.toFixed(2)}</S.DivBox>
                    <S.DivBox className="label">z:{value.z.toFixed(2)}</S.DivBox>

                  </Html>
                </Sphere>
              </Draggable>
            )
        })
      }
      </>
    );
  }