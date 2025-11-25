import React from "react";
import { Routes, Route } from "react-router-dom";
import Layouts from "./components/commons/Layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />} />

    </Routes>
  );
}

export default App;
