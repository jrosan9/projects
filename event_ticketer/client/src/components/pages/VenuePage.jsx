import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetEventsByVenueIdQuery,
  useGetReviewsByVenueIdQuery,
} from "../../../slices/api";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function VenuePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    data: venue_events,
    error,
  } = useGetEventsByVenueIdQuery(id);
  const {
    isLoading: loadingReviews,
    data: reviews,
    error: venue_retrieval_error,
  } = useGetReviewsByVenueIdQuery(id);
  const [rateValue, setRateValue] = useState({});
  useEffect(() => {
    if (error) {
      console.error("Error fetching events:", error);
      console.error("Error fetching events:", venue_retrieval_error);
      navigate("/error");
    }
  }, [error, venue_retrieval_error, navigate]);
  if (isLoading || loadingReviews) {
    return <p>Loading...</p>;
  }
  const handleTicketNavigation = (eventId) => {
    navigate(`/event/${eventId}`);
  };
  const handleReviewNavigation = () => {
    navigate("/review_form");
  };
  return (
    <div>
      {venue_events.length === 0 ? (
        <p>No events at this venue</p>
      ) : (
        <div>
          {venue_events.map((event) => (
            <div key={event.id}>
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <button onClick={() => handleTicketNavigation(event.id)}>
                Find Tickets
              </button>
              <hr />
            </div>
          ))}
        </div>
      )}
      {reviews.length === 0 ? (
        <p>No reviews yet...</p>
      ) : (
        <div>
          <Link to={"/review_form"}>
            <button
              onClick={() => {
                handleReviewNavigation;
              }}
              style={{ float: "right" }}
            >
              Write a review
            </button>
          </Link>
          {reviews.map((review) => (
            <div key={review.id}>
              <Typography component="legend">
                <Rating
                  name="read-only"
                  value={rateValue[review.id] || review.Rating}
                  readOnly
                />
              </Typography>
              <p>{review.Rating}/5</p>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VenuePage;
