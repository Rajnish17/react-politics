import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
