import React, { Fragment } from 'react';
import './App.css';
import CartesianPlane from '../CartesianPlane/CartesianPlane';
import Controls from '../Controls/Controls';

export default function App() {
  return (
    <Fragment>
      <CartesianPlane id="CartesianPlane" />
      <Controls id="Controls" />
    </Fragment>
  );
}
