import React from "react";
import { Line } from "@react-three/drei";

function Coordinates () {
    return(
        <>
            <Line
            lineWidth={1}
            points={[
            [-3, 0, 0],
            [3, 0, 0]
            ]}
            color={0x00fffd}
            />
            <Line
            lineWidth={1}
            points={[
            [0, 2, 0],
            [0, -2, 0]
            ]}
            color={0x00fffd}
            />
            <Line
            lineWidth={1}
            points={[
            [0, 0, 3],
            [0, 0, -3]
            ]}
            color={0x00fffd}
            />

      </>
    )

}

export default Coordinates