import React from "react";
import Point from "./Point";

export default function Points({ setId, pairId, pair }) {
    return pair.map((point, index) => (
        <Point
            key={index}
            setId={setId}
            pairId={pairId}
            cx={point[0]}
            cy={point[1]}
        />
    ));
}
