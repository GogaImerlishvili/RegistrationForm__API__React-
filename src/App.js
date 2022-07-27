import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Page1 from "./components/Page1";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/page1" element={<Page1 />} />
      </Routes>
    </div>
  );
}

export default App;
