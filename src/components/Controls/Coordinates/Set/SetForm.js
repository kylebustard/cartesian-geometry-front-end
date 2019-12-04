import React from "react";
import Pair from "../Pair/Pair";

export default function SetForm({
    coordinatesSets,
    updateCoordinatesSets,
    setId,
    numberOfPairs
}) {
    const coordinatePairs = (function() {
        let pairsArray = [];

        for (let i = 0; i < numberOfPairs; i++) {
            pairsArray.push(
                <li key={i}>
                    <Pair pairId={i} />
                </li>
            );
        }
        return pairsArray;
    })();

    // const coordinatePairs = (function makeArray(array, n, max) {
    //     const pairComponentLI = (
    //         <li key={n}>
    //             <Pair pairId={n} />
    //         </li>
    //     );
    //     return n <= max ? makeArray([...array, pairComponentLI], n + 1, max) : array;
    // })([], 1, numberOfPairs);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                for (let i = 0; i < numberOfPairs; i++) {
                    let x = event.target.elements[`${i}-x`];
                    let y = event.target.elements[`${i}-y`];
                    updateCoordinatesSets([
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
