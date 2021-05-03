import React, { useState } from "react";
import { MyContext } from "../context/MyContext";
import Family from "./Family";

function MyProvider() {
  const [state, setState] = useState({
    age: 25,
    name: "Sarvar",
  });

  const growOlder = () => {
    setState({
      age: state.age + 1,
      name: "Sarvar",
    });
  };
  return (
    <MyContext.Provider value={{ state, growOlder }}>
      <div className="App">
        <p>I am the app</p>
        <Family />
      </div>
    </MyContext.Provider>
  );
}

export default MyProvider;
