import React, { useState } from "react";
import DisplayCoordinates from "./UI/DisplayCoordinates";

export default function Controls({ coordinatesSets, updateCoordinatesSets }) {
    const [numberOfSets, setNumberOfSets] = useState(1);

    function addSet() {
        return setNumberOfSets(numberOfSets + 1);
    }

    return (
        <DisplayCoordinates
            numberOfSets={numberOfSets}
            addSet={addSet}
            coordinatesSets={coordinatesSets}
            updateCoordinatesSets={updateCoordinatesSets}
        />
    );
}
