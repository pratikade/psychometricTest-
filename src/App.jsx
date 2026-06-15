import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Assessment from "./components/Assessment.jsx";
import Results from "./components/Result.jsx";
import Header from "./components/Header.jsx";
import "./Styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment/:id" element={<Assessment />} />
            <Route path="/results/:id" element={<Results />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
