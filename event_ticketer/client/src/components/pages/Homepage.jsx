import { useSelector } from "react-redux";
import { useGetAllEventsQuery } from "../../../slices/api";
import { Link } from "react-router-dom";

function Homepage() {
  const { isLoading } = useGetAllEventsQuery();
  const events = useSelector((state) => state.events);
  const numberOfImagesToDisplay = 6;
  return (
    <>
      {isLoading ? (
        <p>Loading events...</p>
      ) : (
        <>
          <h2>Trending Events</h2>
          <div id={"event_wrapper"}>
            {events.slice(0, numberOfImagesToDisplay).map((event) => (
              <Link to={"/product/" + event.id} key={event.id}>
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
      )}
    </>
  );
}

export default Homepage;
