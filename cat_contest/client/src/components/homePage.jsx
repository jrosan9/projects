import React from "react";
import { useState, useEffect } from "react";
import { useGetAllCatsQuery } from "../../slices/api";

function HomePage() {
  const { isLoading, data: cats, error } = useGetAllCatsQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filteredCats, setFilteredCats] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchValue(query);

    if (cats) {
      if (query === "") {
        setFilteredCats(cats);
      } else {
        const results = cats.filter((cat) =>
          cat.name.toLowerCase().includes(query)
        );
        setFilteredCats(results);
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error loading cats:", error);
    return <div>Error loading cats. Please try again later.</div>;
  }

  useEffect(() => {
    if (filteredCats && searchValue === "") {
      setFilteredCats(cats); // Show all cats when the search box is empty
    }
  }, [cats, searchValue]);

  return (
    <div id={"cats_section"}>
      <input
        type="text"
        value={searchValue}
        placeholder="Search cats by name..."
        onChange={handleSearch}
        className={"search_bar"}
      />
      <div id={"cat_wrapper"}>
        <ul>
          {filteredCats.length === 0 ? (
            <div>No cats found</div>
          ) : (
            filteredCats.map((cat) => (
              <div id="cat" key={cat.id}>
                <img className="cat_img" alt={cat.name} src={cat.img} />
                <li>{cat.name}</li>
                <p>{cat.description}</p>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
