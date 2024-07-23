import { useSelector } from "react-redux";
import { useGetTrendingEventsQuery } from "../../../slices/api";
import { useGetAllVenuesQuery } from "../../../slices/api";
import { Link } from "react-router-dom";
import { useState } from "react";

function Homepage() {
  const {
    data: trendingEvents,
    isLoading,
    isError,
    error,
  } = useGetTrendingEventsQuery();

  // Fetch venues without displaying them
  const {
    data: venues,
    isLoading: isLoadingVenues,
    isError: isErrorVenues,
    error: errorVenues,
  } = useGetAllVenuesQuery();

  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVenues, setFilteredVenues] = useState([]);

  if (isLoading) return <p>Loading trending events...</p>;
  if (isError) return <p>Error fetching trending events: {error.message}</p>;

  if (isLoadingVenues) return <p>Loading venues...</p>;
  if (isErrorVenues) return <p>Error fetching venues: {errorVenues.message}</p>;

  if (!trendingEvents || trendingEvents.length === 0) {
    return <p>No trending events available.</p>;
  }

  // Handle the search query change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (venues) {
      // Filter venues based on the search query
      const results = venues.filter((venue) =>
        venue.name.toLowerCase().includes(query)
      );
      setFilteredVenues(results);
    }
  };

  return (
    <>
      {/* Search Input Field */}
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for venues..."
        />
        <ul className="search-results">
          {filteredVenues.map((venue) => (
            <li key={venue.id} className={"venue_name"}>
              <Link to={`/venue/${venue.id}`}>{venue.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <h2>Trending Events</h2>

      <div id={"event_wrapper"}>
        {trendingEvents.slice(0, 6).map((event) => (
          <Link to={`/event/${event.id}`} key={event.id}>
            <div className={"event"}>
              <img
                src={event.headliner_image}
                alt={`Image for event: ${event.name}`}
              />
              <p>{event.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Homepage;
