import React, { Fragment } from "react";
import './App.css';

//Components
import InputAction from "./components/InputAction"
import ListAction from "./components/ListAction"

function App() {
  return (
    <Fragment>
    <div className="container">
      <InputAction />
      <ListAction />
    </div>
    </Fragment>
  );
}

export default App;
