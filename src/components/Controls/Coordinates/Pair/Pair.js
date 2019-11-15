import React, { Fragment } from "react";

export default function Pair({ pairId }) {
    return (
        <Fragment>
            <label htmlFor="x">X</label>
            <input id={`${pairId}-x`} size="4" />
            <label htmlFor="y">Y</label>
            <input id={`${pairId}-y`} size="4" />
        </Fragment>
    );
}
