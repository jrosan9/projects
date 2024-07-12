import React from "react";
import Navbar from "./components/pages/NavBar";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "./components/pages/LoginRegister";
import Homepage from "./components/pages/Homepage";
import SingleEvent from "./components/pages/SingleEvent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path={"/product/:id"} element={<SingleEvent />} />
        <Route path={"/login"} element={<LoginRegister />} />
      </Routes>
    </>
  );
}

export default App;
