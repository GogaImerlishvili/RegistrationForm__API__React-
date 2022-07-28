import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/page1" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
