import React, { useState } from "react";
import { useState } from "react";
import Navbar from "./components/pages/NavBar";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "./components/pages/LoginRegister";
import Homepage from "./components/pages/Homepage";
import EventsByCategoryPage from "./components/pages/EventsByCategoryPage";
import SingleEvent from "./components/pages/SingleEvent";
import VenuePage from "./components/pages/VenuePage";
import ReviewFormPage from "./components/pages/ReviewFormPage";
import Checkoutpage from "./components/pages/Checkoutpage";

function App() {
  const [checkoutData, setCheckoutData] = useState(null);

  const handleCheckout = (ticketValue, quantity) => {
    setCheckoutData({ ticketValue, quantity });
  };
  return (
    <>
      <SingleEvent onCheckout={handleCheckout} />
      {checkoutData && <Checkoutpage {...checkoutData} />}
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path={"/venue/:id"} element={<VenuePage />} />
        <Route path={"/event/:id"} element={<SingleEvent />} />
        <Route path={"/login"} element={<LoginRegister />} />
        <Route
          path={"events/category/:id"}
          element={<EventsByCategoryPage />}
        />
        <Route path={"/review_form"} element={<ReviewFormPage />} />
        <Route path={"/checkout"} element={<Checkoutpage />} />
      </Routes>
    </>
  );
}

export default App;
