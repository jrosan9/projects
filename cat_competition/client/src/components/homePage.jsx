import React from "react";
import { useState, useEffect } from "react";
import { useGetAllCatsQuery } from "../../slices/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const { isLoading, data: cats, error } = useGetAllCatsQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filteredCats, setFilteredCats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cats && searchValue === "") {
      setFilteredCats(cats); // Show all cats when the search box is empty
    }
  }, [cats, searchValue]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchValue(query);

    // if (cats) {
    //   if (query === "") {
    //     setFilteredCats(cats);
    //   } else {
    //     const results = cats.filter((cat) =>
    //       cat.name.toLowerCase().includes(query)
    //     );
    //     setFilteredCats(results);
    //   }
    // }
  };
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (cats) {
        if (searchValue === "") {
          setFilteredCats(cats);
        } else {
          const results = cats.filter((cat) =>
            cat.name.toLowerCase().includes(searchValue)
          );
          setFilteredCats(results);
        }
      }
    }, 300); // Delay in ms before filtering occurs

    // Cleanup the previous timeout when the component re-renders
    return () => clearTimeout(debounceTimeout);
  }, [cats, searchValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error loading cats:", error);
    return <div>Error loading cats. Please try again later.</div>;
  }

  return (
    <div id={"cats_section"}>
      <div id={"search_bar_div"}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={handleSearch}
          className={"search_bar"}
        />
      </div>

      <div id={"cat_wrapper"}>
        <div className={"cat_div"}>
          <ul>
            {filteredCats.length === 0 ? (
              <div>No cats found</div>
            ) : (
              filteredCats.map((cat) => (
                <Link to={`/cat/${cat.id}`} key={cat.id}>
                  <div id="cat">
                    <img
                      className="cat_img"
                      alt={cat.name}
                      src={
                        cat.img ||
                        `https://wdjus-cat-images.s3.amazonaws.com${cat.img}`
                      }
                    />
                    <li>{cat.name}</li>
                    <p>{cat.description}</p>
                  </div>
                </Link>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
