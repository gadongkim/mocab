import React, { useEffect, useRef, useState } from "react";
import btnImg from '../../static/small_btn.png'
import { Html } from '@react-three/drei'

const { innerWidth, innerHeight } = window;

interface ButtonProps {
    onClickEvnt : () => any
}
function TxtButton({onClickEvnt}:ButtonProps){
//img -> 다시 출력해보기 
    return(
        <Html 
            onClick={onClickEvnt}
            style={{
                position:'relative',
                top: innerHeight/3.5,
                left: -innerWidth/9,
              }}>
                {/* <img src={btnImg} onClick={onClickEvnt} alt=""/> */}
        </Html>
    )

}

export default TxtButton