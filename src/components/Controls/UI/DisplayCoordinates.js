import React from "react";
import Set from "../Coordinates/Set/Set";
import DisplayAddSet from "./DisplayAddSet";

export default function DisplayCoordinates({
    numberOfSets,
    addSet,
    coordinatesSets,
    updateCoordinatesSets
}) {
    const displaySet = [];

    for (let i = 0; i < numberOfSets; i++) {
        displaySet.push(
            <li key={i}>
                <Set
                    setId={i + 1}
                    coordinatesSets={coordinatesSets}
                    updateCoordinatesSets={updateCoordinatesSets}
                />
                <DisplayAddSet numberOfSets={numberOfSets} addSet={addSet} />
            </li>
        );
    }

    return <ul>{displaySet}</ul>;
}
