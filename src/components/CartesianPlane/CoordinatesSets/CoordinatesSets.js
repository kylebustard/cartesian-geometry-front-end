import React from "react";
import PointsSet from "./Points/PointsSet";

export default function CoordinatesSets({ origin, unit, sets }) {
    function coordinatePairToSVG(unit) {
        return function unitTimesCoordinatePair(pair) {
            return [pair[0] * unit + origin[0], origin[1] - pair[1] * unit];
        };
    }
    const unitTimesCoordinatePair = coordinatePairToSVG(unit);

    function setsMappedToSVG(coordinatesSet) {
        return coordinatesSet.map(pair => unitTimesCoordinatePair(pair));
    }

    let coordinatesSets = [];

    for (let i = 0; i < sets.length; i++) {
        coordinatesSets.push(
            <PointsSet
                key={i}
                setId={sets[i].id}
                pairId={i}
                pair={setsMappedToSVG(sets[i].pair)}
            />
        );
    }

    return coordinatesSets;
}
