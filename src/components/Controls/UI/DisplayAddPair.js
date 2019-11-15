import React from "react";
import AddPair from "../Coordinates/Pair/AddPair";

export default function DisplayAddPair({ numberOfPairs, addPair, maxPairs }) {
    const pairs =
        numberOfPairs < maxPairs ? <AddPair addPair={addPair} /> : null;

    return <div id="addCoordinatesPair">{pairs}</div>;
}
