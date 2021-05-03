import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Person = () => {
  const user = useContext(MyContext);

  return (
    <div className="person">
      <p>Age: {user.state.age}</p>
      <p>Name: {user.state.name}</p>
      <button onClick={user.growOlder}>🍰🍥🎂</button>
    </div>
  );
};

export default Person;
