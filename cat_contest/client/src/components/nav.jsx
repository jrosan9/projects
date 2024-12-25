import React from "react";
import { useGetAllCatsQuery } from "../../slices/api";
import { Link } from "react-router-dom";

function Navbar() {
  //   const { isLoading, data: cats, error } = useGetAllCatsQuery();
  //   if (isLoading) {
  //     return `Loading...`;
  //   } else {
  //     return `Error Loading cats: ${error.message} `;
  //   }

  return (
    <>
      <Link to="/">Gallery</Link>
    </>
  );
}

export default Navbar;
