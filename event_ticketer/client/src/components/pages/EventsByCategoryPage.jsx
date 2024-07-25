import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetEventsByCategoryIdQuery } from "../../../slices/api";
import { useNavigate } from "react-router-dom";

function EventsByCategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    data: category_events,
    error,
  } = useGetEventsByCategoryIdQuery(id);
  useEffect(() => {
    if (error) {
      console.error("Error fetching events:", error);
      navigate("/error");
    }
  }, [error, navigate]);

  if (isLoading) {
    return <p>Loading events...</p>;
  }

  const handleTicketNavigation = (eventId) => {
    navigate(`/event/${eventId}`);
  };
  return (
    <div id={"eventByCategoryWrapper"}>
      {category_events.length === 0 ? (
        <p>No events found for this category.</p>
      ) : (
        <ul>
          {category_events.map((event) => (
            <div key={event.id} className={"single_event_"}>
              <li>
                <h2>{event.name}</h2>
                <p>{event.date}</p>
                <p>{event.time}</p>
              </li>
              <button onClick={() => handleTicketNavigation(event.id)}>
                Find Tickets
              </button>
              <hr></hr>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
export default EventsByCategoryPage;
