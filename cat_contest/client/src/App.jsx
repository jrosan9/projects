import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/nav";
import HomePage from "./components/homePage";

function App() {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
