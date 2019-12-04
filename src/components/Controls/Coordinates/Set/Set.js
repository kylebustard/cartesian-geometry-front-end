import React, { useState, Fragment } from "react";
import SetForm from "./SetForm";
import DisplayAddPair from "../../UI/DisplayAddPair";

export default function Set({ setId, coordinatesSets, updateCoordinatesSets }) {
    const [pairs, setPairs] = useState({
        numberOfPairs: 1,
        maxPairs: 3
    });
    const { numberOfPairs, maxPairs } = pairs;

    function addPair() {
        return setPairs({
            ...pairs,
            numberOfPairs: numberOfPairs + 1
        });
    }

    return (
        <Fragment>
            <SetForm
                coordinatesSets={coordinatesSets}
                updateCoordinatesSets={updateCoordinatesSets}
                setId={setId}
                numberOfPairs={numberOfPairs}
            />
            <DisplayAddPair
                numberOfPairs={numberOfPairs}
                addPair={addPair}
                maxPairs={maxPairs}
            />
        </Fragment>
    );
}
