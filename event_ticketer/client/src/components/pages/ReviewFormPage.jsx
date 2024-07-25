import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { usePostReviewMutation } from "../../../slices/api";
import { useSelector } from "react-redux";

function ReviewFormPage() {
  const [rating, setRating] = useState(0);
  const [customerId, setCustomerId] = useState(0);
  const [venueId, setVenueId] = useState("");
  const [description, setDescription] = useState("");
  const [postReview] = usePostReviewMutation();
  const [text, setText] = useState("");
  //   const [value, setValueState] = useState();
  const token = useSelector((state) => state.auth.token);
  const handleCharChange = (e) => {
    console.log(e.target.value);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!token) {
      alert("You must be logged in to submit a review");
      return;
    }
    try {
      await postReview({
        venue_id: parseInt(venueId),
        customer_id: parseInt(customerId),
        Rating: rating,
        description: description,
      }).unwrap();
      console.log("Review submitted successfully!");
      setRating(0);
      setCustomerId("");
      setVenueId("");
      setDescription("");
    } catch (err) {
      console.error("Failed to submit review:", err);
    }
  };
  return (
    <>
      <div id={"review_form_wrapper"}>
        <div>
          <h2>1. Select Rating</h2>
          <Typography component="legend">
            <Rating
              onChange={(event, newValue) => setRating(newValue || 0)}
              value={rating}
              name="simple-controlled"
              //   value={value}
            />
          </Typography>
          <hr />
        </div>
        <div className={"inputs"}>
          <h2>2. Write Your Review</h2>
          <input
            onChange={(e) => setCustomerId(e.target.value)}
            value={customerId}
            type="text"
            placeholder="customer_id..."
          ></input>
          <input
            onChange={(e) => setVenueId(e.target.value)}
            value={venueId}
            type="text"
            placeholder="venue_id..."
          ></input>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows="10"
            type="text"
            placeholder={"Tell us about your experience..."}
          ></textarea>
          <button onClick={submit}>Submit Review</button>
          <hr />
        </div>
      </div>
    </>
  );
}
export default ReviewFormPage;
