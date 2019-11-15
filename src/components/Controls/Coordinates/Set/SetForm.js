import React from "react";
import Pair from "../Pair/Pair";

export default function SetForm({
    coordinatesSets,
    updateCoordinates,
    setId,
    numberOfPairs
}) {
    const coordinatePairs = [];

    for (let i = 0; i < numberOfPairs; i++) {
        coordinatePairs.push(
            <li key={i}>
                <Pair pairId={i} />
            </li>
        );
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                for (let i = 0; i < numberOfPairs; i++) {
                    let x = event.target.elements[`${i}-x`];
                    let y = event.target.elements[`${i}-y`];
                    updateCoordinates([
                        ...coordinatesSets,
                        {
                            setId: setId,
                            pair: [[Number(x.value), Number(y.value)]]
                        }
                    ]);
                }
            }}
        >
            Set–{setId}
            <ul setid={setId}>{coordinatePairs}</ul>
            <button type="submit">Submit</button>
        </form>
    );
}
