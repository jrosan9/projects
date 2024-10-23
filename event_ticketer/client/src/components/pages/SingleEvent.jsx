import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useGetAllVenuesQuery } from "../../../slices/api";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InfoIcon from "@mui/icons-material/Info";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import Checkoutpage from "./Checkoutpage";

function SingleEvent({ onCheckout }) {
  const events = useSelector((state) => state.events);
  const venues = useSelector((state) => state.venue);

  const params = useParams();
  const { isLoading } = useGetAllVenuesQuery();
  const token = useSelector((state) => state.auth.token);
  const selectedEvent = events.find((i) => i.id === Number(params.id));
  const selectedVenue = venues.find((i) => i.id === selectedEvent?.venue_id);
  const [minPrice, setMinPrice] = useState(
    selectedEvent ? selectedEvent.price_range / 10 : 0
  );
  const [maxPrice, setMaxPrice] = useState(
    selectedEvent ? selectedEvent.price_range : 0
  );
  const ticketFloorAmount = selectedEvent.price_range / 2;
  //   const [tickets, setTickets] = useState([]);

  //   const [minPrice, setMinPrice] = useState(0);
  //   const [maxPrice, setMaxPrice] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const valuetext = (value) => {
    return `$${value}`;
  };

  useEffect(() => {
    // if (selectedEvent && selectedVenue) {
    // Extract price range values
    //   const min_price = selectedEvent.price_range / 10;
    //   const max_price = selectedEvent.price_range;

    // setMinPrice(min_price);
    // setMaxPrice(max_price);
    // console.log("Selected Event:", selectedEvent);
    // console.log("Selected Venue:", selectedVenue);
    // console.log("Min Price:", minPrice);
    // console.log("Max Price:", maxPrice);

    const seed = `${selectedEvent.id}${selectedVenue.id}`;
    const localStorageKey = `ticketPrices-${seed}`;

    let tickets_array = JSON.parse(localStorage.getItem(localStorageKey)) || [];

    // Function to generate a random price within the given range
    if (tickets_array.length === 0) {
      const generateRandomPrice = (min, max) => {
        if (isNaN(min) || isNaN(max) || min >= max) {
          return 0; // Return a default value if the input is invalid
        }
        return (Math.random() * (max - min) + min).toFixed(2);
      };

      const ticketCount = parseInt(selectedVenue.ticket_availability, 10) || 0;
      tickets_array = Array.from({ length: ticketCount }, (_, index) => {
        const ticketPrice = generateRandomPrice(minPrice, maxPrice); // Generate a random price for each ticket
        return { number: index + 1, price: ticketPrice };
      });

      // Store generated prices in localStorage
      localStorage.setItem(localStorageKey, JSON.stringify(tickets_array));
    }

    // Filter tickets based on minPrice and maxPrice
    const filteredTickets = tickets_array.filter((ticket) => {
      const price = parseFloat(ticket.price);
      return price >= minPrice && price <= maxPrice;
    });

    setTickets(filteredTickets);
    // }
  }, [selectedEvent, selectedVenue, minPrice, maxPrice]);

  if (isLoading) {
    return <p>Loading venue...</p>;
  }

  if (!selectedEvent || !selectedVenue) {
    return <p>Event or Venue not found.</p>;
  }

  const handleSliderChange = (event, newValue) => {
    console.log("Slider change:", newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };
  const handleSliderCommit = (event, newValue) => {
    console.log("Slider commit:", newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading venue...</p>
      ) : (
        <div id={"single_event_wrapper"}>
          <div className={"ticket_wrapper"}>
            <div className={"tickets_section"}>
              <h3>Available Tickets:</h3>
              <div className={"slider_range"}>
                <input type="text" value={minPrice} />
                <Box className="slider" sx={{ width: 300 }}>
                  <Slider
                    value={[minPrice, maxPrice]}
                    onChange={(event, newValue) => {
                      setMinPrice(newValue[0]);
                      setMaxPrice(newValue[1]);
                    }}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={selectedEvent.price_range / 10} // Set according to your actual minimum price
                    max={selectedEvent.price_range} // Set according to your actual maximum price
                    color="secondary"
                    disableSwap
                  />
                </Box>
                <input type="text" value={maxPrice} />
              </div>
              <ul>
                {tickets.slice(0, 10).map((ticket) => (
                  <li className={"tickets"} key={ticket.number}>
                    Standard Ticket Price: ${ticket.price}
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                    <Link to={"/checkout"}>
                      <button
                        id={"checkout_button"}
                        onClick={() => {
                          onCheckout(ticket.price, quantity);
                        }}
                      >
                        Checkout
                      </button>
                    </Link>
                    {ticket.price < ticketFloorAmount ? (
                      <div className="info_icon">
                        <InfoIcon />
                        <p type={"hidden"}>Obstructed view</p>
                      </div>
                    ) : (
                      <div className="info_icon">
                        <InfoIcon />
                        <p type={"hidden"}>Clear view</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
