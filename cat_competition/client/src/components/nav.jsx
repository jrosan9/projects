import React from "react";
import { Link, useLocation } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const [details, setDetails] = useState("Already Registered?");
  const token = useSelector((state) => state.auth.token);
  const subscriber = useSelector((state) => state.auth.user);
  //   console.log(subscriber);

  return (
    <>
      <div id={"nav_section"}>
        <div className="logo_div">
          <img
            src="https://cdn.marketing.newsday.com/assets/NewsdayLogo_contests.png"
            alt="Newsday logo"
          />
        </div>

        <div className="links">
          {location.pathname === "/" ? (
            <Link to="/auth/login">{details}</Link>
          ) : (
            <Link to="/">Gallery</Link>
          )}
          <Link to="/search_bar" id="search_link">
            <SearchIcon className="search_icon" />
            Search
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
