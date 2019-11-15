import React from "react";
import AddSet from "../Coordinates/Set/AddSet";

export default function DisplayAddSet({ numberOfSets, addSet }) {
    const maxSets = 4;

    const sets = numberOfSets < maxSets ? <AddSet addSet={addSet} /> : null;

    return <div id="addCoordinatesSet">{sets}</div>;
}
