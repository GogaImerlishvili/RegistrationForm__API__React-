import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import Page1 from "./components/Page1";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
