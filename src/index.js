import React from "react";
import ReactDOM from "react-dom";
import Tab from "./components/Tab";
import "./styles.css";

function App() {
  return <Tab />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
