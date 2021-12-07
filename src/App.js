import './App.css';
import React, { Component  } from "react";
import { Route,Routes } from "react-router-dom";
import  {Main}  from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route  path="/footer" element={<Footer />}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
