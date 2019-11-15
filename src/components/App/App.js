import React, { useState, Fragment } from "react";
import "./App.css";
import CartesianPlane from "../CartesianPlane/CartesianPlane";
import Controls from "../Controls/Controls";

export default function App() {
    const [coordinatesSets, updateCoordinates] = useState([]);
    console.log(coordinatesSets);
    return (
        <Fragment>
            <CartesianPlane
                id="CartesianPlane"
                coordinatesSets={coordinatesSets}
            />
            <Controls
                id="Controls"
                coordinatesSets={coordinatesSets}
                updateCoordinates={updateCoordinates}
            />
        </Fragment>
    );
}
