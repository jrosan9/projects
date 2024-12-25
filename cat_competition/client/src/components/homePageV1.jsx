import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useGetAllCatsQuery } from "../../slices/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SingleCatPage from "./singleCatPage";

function OfficialHomePage() {
  const { isLoading, data: cat_candidates, error } = useGetAllCatsQuery();
  const navigate = useNavigate();
  //   console.log(cat_candidates);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error loading cats:", error);
    return <div>Error loading cats. Please try again later.</div>;
  }

  const handleClick = () => {
    navigate("/cat_form");
  };

  return (
    <div id={"cats_section"}>
      <div className={"camera_icon_div"} onClick={() => handleClick()}>
        <CameraAltIcon id={"camera_icon"} />
      </div>

      <div id={"cat_wrapper"}>
        <ul>
          {cat_candidates.length === 0 ? (
            <div>No cats found</div>
          ) : (
            cat_candidates.map((cat) => (
              <Link to={`/cat/${cat.id}`} key={cat.id}>
                <div id="cat">
                  <img className="cat_img" alt={cat.name} src={cat.img} />
                  <li>{cat.name}</li>
                  <p>{cat.description}</p>
                </div>
              </Link>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
export default OfficialHomePage;
