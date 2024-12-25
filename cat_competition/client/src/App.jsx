import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav";
import HomePage from "./components/homePage";
import OfficialHomePage from "./components/homePageV1";
import CatFormPage from "./components/catFormPage";
import LoginPage from "./components/loginPage";
import SingleCatPage from "./components/singleCatPage";

function App() {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path={"/"} element={<OfficialHomePage />} />
          <Route path={"/search_bar"} element={<HomePage />} />
          <Route path={"/cat_form"} element={<CatFormPage />} />
          <Route path={"/auth/login"} element={<LoginPage />} />
          <Route path={"/auth/register"} element={<LoginPage />} />
          <Route path={"/cat/:id"} element={<SingleCatPage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
