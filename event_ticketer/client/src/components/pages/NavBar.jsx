import React from "react";
import { useGetAllCategoriesQuery } from "../../../slices/api";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../../slices/authSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Navbar() {
  const { isLoading, data } = useGetAllCategoriesQuery();
  const categories = useSelector((state) => state.categories);
  const uniqueCategoryNames = [
    ...new Set(categories.map((category) => category.name)),
  ];
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
                    <Link
                      className={"ctgy_nav_links"}
                      to={"events/category/" + category.id}
                    >
                      <h3 className={"subcategory"}>
                        {category.subCategories}
                      </h3>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
          {token ? (
            <button onClick={handleLogout} className="loginLink">
              Logout
            </button>
          ) : (
            <Link to="/login" className="loginLink">
              Login/Register
            </Link>
          )}
        </div>
      )}
    </>
  );
}
export default Navbar;
