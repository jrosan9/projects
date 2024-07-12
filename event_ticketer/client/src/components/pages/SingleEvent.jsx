import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useGetAllVenuesQuery } from "../../../slices/api";

function SingleEvent() {
  const events = useSelector((state) => state.events);
  const venues = useSelector((state) => state.venue);
  const params = useParams();
  const { isLoading } = useGetAllVenuesQuery();
  const selectedEvent = events.find((i) => i.id === Number(params.id));
  const selectedVenue = venues.find((i) => i.id === selectedEvent.venue_id);

  return (
    <>
      {isLoading ? (
        <p>Loading venue...</p>
      ) : (
        <div id={"single_event_wrapper"}>
          <div className={"venue_img"}>
            <img
              src={selectedVenue.seating_arrangement_img}
              alt={selectedVenue.name}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default SingleEvent;
