import React, { useState } from "react";
import { Example, Selected, Action } from "./example";
//import "./styles.css";

export default function App() {
  const [selected, setSelected] = useState();
  const [action, setAction] = useState();
  return (
    <div className="App">
      <h1>React-Select onChange() Example</h1>
      <h2>Select an option:</h2>
      <Example {...{ setSelected, setAction }} />
      <Selected {...{ selected }} />
      <Action {...{ action }} />
    </div>
  );
}
