import React, { useState } from "react";
import { MyContext } from "../context/MyContext";
import "./App.css";
import Family from "./Family";
import MyProvider from "./MyProvider";

function App() {
  return <MyProvider />;
}

export default App;
