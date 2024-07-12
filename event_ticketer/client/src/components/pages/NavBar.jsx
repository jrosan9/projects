import React from "react";
import { useGetAllCategoriesQuery } from "../../../slices/api";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  const { isLoading, data } = useGetAllCategoriesQuery();
  const categories = useSelector((state) => state.categories);

  const uniqueCategoryNames = [
    ...new Set(categories.map((category) => category.name)),
  ];

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={"navWrapper"}>
          <Link to="/">
            <img
              src={"https://i.pngimg.me/thumb/f/720/comrawpixel6734648.jpg"}
              alt={"Home Icon"}
            />
          </Link>
          {uniqueCategoryNames.map((name) => (
            <div key={name} className={"category"}>
              <h2 className={"categoryName"}>{name}</h2>
              {categories
                .filter((category) => category.name === name)
                .map((category) => (
                  <div key={category.id}>
                    <h3 className={"subcategory"}>{category.subCategories}</h3>
                  </div>
                ))}
            </div>
          ))}
          <Link to="/login" className="loginLink">
            Login/Register
          </Link>
        </div>
      )}
    </>
  );
}
export default Navbar;
