import React, { useState } from "react";
import "./CartesianPlane.css";
import Grid from "./Grid/Grid";
import Axes from "./Axes/Axes";
import CoordinatesSets from "./CoordinatesSets/CoordinatesSets";

export default function CartesianPlane({ coordinatesSets }) {
    const [gridSize] = useState({
        width: 500,
        height: 500,
        arrowSize: 4
    });

    const { width, height, arrowSize } = gridSize;
    const gridGapSize = (width || height) / 10;
    const origin = [width / 2, height / 2];
    const unit = 50;

    return (
        <svg
            aria-labelledby="title"
            role="presentation"
            version="1.1"
            baseProfile="full"
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
        >
            <title id="title" lang="en">
                Cartesian Plane
            </title>
            <rect x="0" y="0" width={width} height={height} fill="lightblue" />
            <Grid
                id="Grid"
                width={width}
                height={height}
                gapSize={gridGapSize}
            />
            <Axes
                id="Axes"
                width={width}
                height={height}
                arrowSize={arrowSize}
            />
            <CoordinatesSets
                origin={origin}
                unit={unit}
                sets={coordinatesSets}
            />
        </svg>
    );
}
