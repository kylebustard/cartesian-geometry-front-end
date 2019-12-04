import React, { useState, Fragment } from "react";
import "./App.css";
import CartesianPlane from "../CartesianPlane/CartesianPlane";
import Controls from "../Controls/Controls";

export default function App() {
    const [coordinatesSets, updateCoordinatesSets] = useState([]);
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
                updateCoordinatesSets={updateCoordinatesSets}
            />
        </Fragment>
    );
}
