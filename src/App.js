import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Main from "./components/Main";


function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )

}

export default App;
