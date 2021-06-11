import React from "react";

import "./App.css";

import HueChart from "./Components/HueChart/HueChart";
import MalicAcidChart from "./Components/MalicAcidChart/MalicAcidChart";

function App() {
  return (
    <div className="App">
      {/* adding HueChart here */}
      <HueChart />
      {/* adding Malic acid chart here  */}
      <MalicAcidChart />
    </div>
  );
}

export default App;
