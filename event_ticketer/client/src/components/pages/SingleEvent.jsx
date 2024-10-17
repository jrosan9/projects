// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { useGetAllVenuesQuery } from "../../../slices/api";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// function SingleEvent() {
//   const events = useSelector((state) => state.events);
//   const venues = useSelector((state) => state.venue);

//   const params = useParams();
//   const { isLoading } = useGetAllVenuesQuery();
//   const selectedEvent = events.find((i) => i.id === Number(params.id));
//   const selectedVenue = venues.find((i) => i.id === selectedEvent.venue_id);
//   //   const [minPrice, setMinPrice] = useState(
//   //     selectedEvent ? selectedEvent.price_range / 10 : 0
//   //   );
//   //   const [maxPrice, setMaxPrice] = useState(
//   //     selectedEvent ? selectedEvent.price_range : 0
//   //   );
//   //   const [tickets, setTickets] = useState([]);

//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(0);
//   const [tickets, setTickets] = useState([]);
//   const valuetext = (value) => {
//     return `$${value}`;
//   };

//   useEffect(() => {
//     if (selectedEvent && selectedVenue) {
//       // Extract price range values
//       const min_price = selectedEvent.price_range / 10;
//       const max_price = selectedEvent.price_range;

//       setMinPrice(min_price);
//       setMaxPrice(max_price);

//       const seed = `${selectedEvent.id}${selectedVenue.id}`;
//       const localStorageKey = `ticketPrices-${seed}`;

//       let tickets_array =
//         JSON.parse(localStorage.getItem(localStorageKey)) || [];

//       // Function to generate a random price within the given range
//       if (tickets_array.length === 0) {
//         const generateRandomPrice = (min, max) => {
//           if (isNaN(min) || isNaN(max) || min >= max) {
//             return 0; // Return a default value if the input is invalid
//           }
//           return (Math.random() * (max - min) + min).toFixed(2);
//         };

//         const ticketCount =
//           parseInt(selectedVenue.ticket_availability, 10) || 0;
//         tickets_array = Array.from({ length: ticketCount }, (_, index) => {
//           const ticketPrice = generateRandomPrice(min_price, max_price); // Generate a random price for each ticket
//           return { number: index + 1, price: ticketPrice };
//         });

//         // Store generated prices in localStorage
//         localStorage.setItem(localStorageKey, JSON.stringify(tickets_array));
//       }
//       //   const generateRandomPrice = (min, max) => {
//       //     if (isNaN(min) || isNaN(max) || min >= max) {
//       //       return 0; // Return a default value if the input is invalid
//       //     }
//       //     return (Math.random() * (max - min) + min).toFixed(2);
//       //   };

//       //   const storedPrices = localStorage.getItem(localStorageKey);
//       //   if (storedPrices) {
//       //     tickets_array = JSON.parse(storedPrices);
//       //   } else {
//       //     const ticketCount =
//       //       parseInt(selectedVenue.ticket_availability, 10) || 0;
//       //     tickets_array = Array.from({ length: ticketCount }, (_, index) => {
//       //       const ticketPrice = generateRandomPrice(min_price, max_price); // Generate a random price for each ticket
//       //       console.log(tickets_array);
//       //       return { number: index + 1, price: ticketPrice };
//       //     });
//       //     localStorage.setItem(localStorageKey, JSON.stringify(tickets_array));

//       // Filter tickets based on minPrice and maxPrice
//       const filteredTickets = tickets_array.filter((ticket) => {
//         const price = parseFloat(ticket.price);
//         return price >= minPrice && price <= maxPrice;
//       });

//       setTickets(filteredTickets);
//     }
//   }, [selectedEvent, selectedVenue, minPrice, maxPrice]);

//   if (isLoading) {
//     return <p>Loading venue...</p>;
//   }

//   if (!selectedEvent || !selectedVenue) {
//     return <p>Event or Venue not found.</p>;
//   }

//   const handleSliderChange = (event, newValue) => {
//     setMinPrice(newValue[0]);
//     setMaxPrice(newValue[1]);
//   };
//   const handleSliderCommit = (event, newValue) => {
//     setMinPrice(newValue[0]);
//     setMaxPrice(newValue[1]);
//   };
//   //   const numberOfTicketsToDisplay = 10;
//   // Extract price range values and ensure they are valid numbers
//   //   const min_price = parseFloat(selectedEvent.price_range / 10);
//   //   const max_price = parseFloat(selectedEvent.price_range);
//   //   const handleSliderChange = (event, newValue) => {
//   //     setMinPrice(newValue[0]);
//   //     setMaxPrice(newValue[1]);
//   //   };
//   //   const handleSliderCommit = (event, newValue) => {
//   //     setMinPrice(newValue[0]);
//   //     setMaxPrice(newValue[1]);
//   //   };
//   //   const seed = `${selectedEvent.id}${selectedVenue.id}`;
//   //   const localStorageKey = `ticketPrices-${seed}`;
//   // Function to generate a random price within the given range
//   //   const generateRandomPrice = (min, max) => {
//   //     if (isNaN(min) || isNaN(max) || min >= max) {
//   //       return (0).toFixed(2); // Return a default value if the input is invalid
//   //     }
//   //     return (Math.random() * (max - min) + min).toFixed(2);
//   //   };
//   //   let tickets_array = [];
//   //   const storedPrices = localStorage.getItem(localStorageKey);
//   //   if (storedPrices) {
//   //     // Parse and use the stored prices
//   //     tickets_array = JSON.parse(storedPrices);
//   //   } else {
//   //   Generate and store new prices
//   //   const ticketCount = parseInt(selectedVenue.ticket_availability, 10) || 0;
//   //   tickets_array = Array.from({ length: ticketCount }, (_, index) => {
//   //     const ticketPrice = generateRandomPrice(
//   //       (setMinPrice(min_price), setMaxPrice(max_price))
//   //     ); // Generate a random price for each ticket
//   //     return { number: index + 1, price: ticketPrice };
//   //   });
//   // localStorage.setItem(localStorageKey, JSON.stringify(tickets_array));
//   // const filteredTickets = tickets_array.filter((ticket) => {
//   //   const price = parseFloat(ticket.price);
//   //   return price >= minPrice && price <= maxPrice;
//   // });
//   // setTickets(filteredTickets);
//   //   }
//   return (
//     <>
//       {isLoading ? (
//         <p>Loading venue...</p>
//       ) : (
//         <div id={"single_event_wrapper"}>
//           <div className={"ticket_wrapper"}>
//             <div className={"tickets_section"}>
//               <h3>Available Tickets:</h3>
//               <input type="text" value={minPrice} />
//               <Box className={"slider"} sx={{ width: 200 }}>
//                 <Slider
//                   getAriaLabel={() => "Price range"}
//                   value={[minPrice, maxPrice]}
//                   onChange={handleSliderChange}
//                   //   onChangeCommitted={handleSliderCommit}
//                   valueLabelDisplay="auto"
//                   getAriaValueText={valuetext}
//                   min={minPrice}
//                   max={maxPrice}
//                   color="secondary"
//                   disableSwap
//                 />
//               </Box>
//               <input type="text" value={maxPrice} />
//               <ul>
//                 {tickets.slice(0, 10).map((ticket) => (
//                   <li className={"tickets"} key={ticket.number}>
//                     Standard Ticket Price: ${ticket.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className={"venue_img"}>
//             <img
//               src={selectedVenue.seating_arrangement_img}
//               alt={selectedVenue.name}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// export default SingleEvent;
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useGetAllVenuesQuery } from "../../../slices/api";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function SingleEvent() {
//   const events = useSelector((state) => state.events);
//   const venues = useSelector((state) => state.venue);
//   const params = useParams();
//   const { isLoading } = useGetAllVenuesQuery();
//   const selectedEvent = events.find((i) => i.id === Number(params.id));
//   const selectedVenue = venues.find((i) => i.id === selectedEvent?.venue_id);

//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(0);
//   const [tickets, setTickets] = useState([]);

//   const valuetext = (value) => {
//     return `${value}$`;
//   };

//   useEffect(() => {
//     if (selectedEvent && selectedVenue) {
//       const min_price = selectedEvent.price_range / 10;
//       const max_price = selectedEvent.price_range;

//       setMinPrice(min_price);
//       setMaxPrice(max_price);

//       const seed = `${selectedEvent.id}${selectedVenue.id}`;
//       const localStorageKey = `ticketPrices-${seed}`;
//       let tickets_array =
//         JSON.parse(localStorage.getItem(localStorageKey)) || [];

//       if (tickets_array.length === 0) {
//         const generateRandomPrice = (min, max) => {
//           if (isNaN(min) || isNaN(max) || min >= max) {
//             return 0;
//           }
//           return (Math.random() * (max - min) + min).toFixed(2);
//         };

//         const ticketCount =
//           parseInt(selectedVenue.ticket_availability, 10) || 0;
//         tickets_array = Array.from({ length: ticketCount }, (_, index) => {
//           const ticketPrice = generateRandomPrice(min_price, max_price);
//           return { number: index + 1, price: ticketPrice };
//         });

//         localStorage.setItem(localStorageKey, JSON.stringify(tickets_array));
//       }

//       const filteredTickets = tickets_array.filter((ticket) => {
//         const price = parseFloat(ticket.price);
//         return price >= minPrice && price <= maxPrice;
//       });

//       setTickets(filteredTickets);
//     }
//   }, [selectedEvent, selectedVenue, minPrice, maxPrice]);

//   const handleSliderChange = (event, newValue) => {
//     setMinPrice(newValue[0]);
//     setMaxPrice(newValue[1]);
//   };

//   if (isLoading) {
//     return <p>Loading venue...</p>;
//   }

//   if (!selectedEvent || !selectedVenue) {
//     return <p>Event or Venue not found.</p>;
//   }

//   return (
//     <div id="single_event_wrapper">
//       <div className="ticket_wrapper">
//         <div className="tickets_section">
//           <h3>Available Tickets:</h3>
//           <input type="text" value={`$${minPrice}`} readOnly />
//           <Box className="slider" sx={{ width: 200 }}>
//             <Slider
//               getAriaLabel={() => "Price range"}
//               value={[minPrice, maxPrice]}
//               onChange={handleSliderChange}
//               valueLabelDisplay="auto"
//               getAriaValueText={valuetext}
//               min={minPrice}
//               max={maxPrice}
//               color="secondary"
//               disableSwap
//             />
//           </Box>
//           <input type="text" value={`$${maxPrice}`} readOnly />
//           <ul>
//             {tickets.slice(0, 10).map((ticket) => (
//               <li className="tickets" key={ticket.number}>
//                 Standard Ticket Price: ${ticket.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="venue_img">
//         <img
//           src={selectedVenue.seating_arrangement_img}
//           alt={selectedVenue.name}
//         />
//       </div>
//     </div>
//   );
// }

// export default SingleEvent;
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   useGetAllEventsQuery,
//   useGetAllVenuesQuery,
// } from "../../../slices/api";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function SingleEvent() {
//   const { isLoading: loadingEvents } = useGetAllEventsQuery();
//   const events = useSelector((state) => state.events || []);
//   const venues = useSelector((state) => state.venue || []);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { isLoading } = useGetAllVenuesQuery();

//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(0);

//   useEffect(() => {
//     const selectedEvent = events.find((event) => event.id === Number(id));
//     const selectedVenue = venues.find(
//       (venue) => venue.id === selectedEvent?.venue_id
//     );

//     if (selectedEvent && selectedVenue) {
//       setMinPrice(selectedEvent.price_range / 10);
//       setMaxPrice(selectedEvent.price_range);

//       const min_price = parseFloat(selectedEvent.price_range / 10);
//       const max_price = parseFloat(selectedEvent.price_range);
//       const seed = `${selectedEvent.id}${selectedVenue.id}`;
//       const localStorageKey = `ticketPrices-${seed}`;

//       let tickets;
//       const storedPriceRange = localStorage.getItem(localStorageKey);
//       if (storedPriceRange) {
//         const { minPrice, maxPrice } = JSON.parse(storedPriceRange);
//         tickets = Array.from(
//           { length: selectedVenue.ticket_availability },
//           (_, index) => {
//             const ticketPrice = generateRandomPrice(minPrice, maxPrice);
//             return { number: index + 1, price: ticketPrice };
//           }
//         );
//       } else {
//         const ticketPriceRange = { minPrice: min_price, maxPrice: max_price };
//         localStorage.setItem(localStorageKey, JSON.stringify(ticketPriceRange));
//         tickets = Array.from(
//           { length: selectedVenue.ticket_availability },
//           (_, index) => {
//             const ticketPrice = generateRandomPrice(min_price, max_price);
//             return { number: index + 1, price: ticketPrice };
//           }
//         );
//       }
//     } else {
//       navigate("/error"); // Navigate to error page if event or venue is not found
//     }
//   }, [id, events, venues, navigate]);

//   const valuetext = (value) => `${value}$`;

//   const handleSliderChange = (event, newValue) => {
//     setMinPrice(newValue[0]);
//     setMaxPrice(newValue[1]);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <p>Loading venue...</p>
//       ) : (
//         <div id={"single_event_wrapper"}>
//           <div className={"ticket_wrapper"}>
//             <div className={"tickets_section"}>
//               <h3>Available Tickets:</h3>
//               <input type="text" value={minPrice} readOnly />
//               <Box className={"slider"} sx={{ width: 200 }}>
//                 <Slider
//                   getAriaLabel={() => "Price range"}
//                   value={[minPrice, maxPrice]}
//                   onChange={handleSliderChange}
//                   min={0} // Update min to 0 or appropriate min value
//                   max={100} // Update max to 100 or appropriate max value
//                   valueLabelDisplay="auto"
//                   getAriaValueText={valuetext}
//                   color="secondary"
//                 />
//               </Box>
//               <input type="text" value={maxPrice} readOnly />
//               <ul>
//                 {tickets.slice(0, 10).map((ticket) => (
//                   <li className={"tickets"} key={ticket.number}>
//                     Standard Ticket Price: ${ticket.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className={"venue_img"}>
//             <img
//               src={selectedVenue?.seating_arrangement_img}
//               alt={selectedVenue?.name}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default SingleEvent;

// // Function to generate a random price
// const generateRandomPrice = (min, max) => {
//   if (isNaN(min) || isNaN(max) || min >= max) {
//     return (0).toFixed(2);
//   }
//   return (Math.random() * (max - min) + min).toFixed(2);
// };

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useGetAllVenuesQuery } from "../../../slices/api";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function SingleEvent() {
//   const events = useSelector((state) => state.events || []);
//   const venues = useSelector((state) => state.venue || []);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { isLoading } = useGetAllVenuesQuery();

//   // Define state for slider values
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(0);
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     const selectedEvent = events.find((event) => event.id === Number(id));
//     const selectedVenue = venues.find(
//       (venue) => venue.id === selectedEvent?.venue_id
//     );

//     if (selectedEvent && selectedVenue) {
//       const min_price = parseFloat(selectedEvent.price_range / 10);
//       const max_price = parseFloat(selectedEvent.price_range);

//       setMinPrice(min_price);
//       setMaxPrice(max_price);

//       const seed = `${selectedEvent.id}${selectedVenue.id}`;
//       const localStorageKey = `ticketPrices-${seed}`;

//       let storedPriceRange = localStorage.getItem(localStorageKey);

//       if (storedPriceRange) {
//         // Get the existing tickets from localStorage
//         const ticketPriceRange = JSON.parse(storedPriceRange);
//         setTickets(
//           generateTickets(
//             ticketPriceRange.minPrice,
//             ticketPriceRange.maxPrice,
//             selectedVenue.ticket_availability
//           )
//         );
//       } else {
//         // Generate and store new tickets
//         const ticketPriceRange = { minPrice: min_price, maxPrice: max_price };
//         localStorage.setItem(localStorageKey, JSON.stringify(ticketPriceRange));
//         const newTickets = generateTickets(
//           min_price,
//           max_price,
//           selectedVenue.ticket_availability
//         );
//         setTickets(newTickets);
//       }
//     } else {
//       navigate("/error"); // Navigate to error page if event or venue is not found
//     }
//   }, [id, events, venues, navigate]);

//   const generateRandomPrice = (min, max) => {
//     if (isNaN(min) || isNaN(max) || min >= max) {
//       return (0).toFixed(2);
//     }
//     return (Math.random() * (max - min) + min).toFixed(2);
//   };

//   const generateTickets = (minPrice, maxPrice, ticketCount) => {
//     return Array.from({ length: ticketCount }, (_, index) => {
//       const ticketPrice = generateRandomPrice(minPrice, maxPrice);
//       return { number: index + 1, price: ticketPrice };
//     });
//   };

//   const valuetext = (value) => `${value}$`;

//   const handleSliderChange = (event, newValue) => {
//     setMinPrice(newValue[0]);
//     setMaxPrice(newValue[1]);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <p>Loading venue...</p>
//       ) : (
//         <div id={"single_event_wrapper"}>
//           <div className={"ticket_wrapper"}>
//             <div className={"tickets_section"}>
//               <h3>Available Tickets:</h3>
//               <input type="text" value={minPrice} readOnly />
//               <Box className={"slider"} sx={{ width: 200 }}>
//                 <Slider
//                   getAriaLabel={() => "Price range"}
//                   value={[minPrice, maxPrice]}
//                   onChange={handleSliderChange}
//                   min={0} // Set to a valid minimum price value
//                   max={100} // Set to a valid maximum price value
//                   valueLabelDisplay="auto"
//                   getAriaValueText={valuetext}
//                   color="secondary"
//                 />
//               </Box>
//               <input type="text" value={maxPrice} readOnly />
//               <ul>
//                 {tickets.slice(0, 10).map((ticket) => (
//                   <li className={"tickets"} key={ticket.number}>
//                     Standard Ticket Price: ${ticket.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className={"venue_img"}>
//             <img
//               src={
//                 venues.find(
//                   (venue) =>
//                     venue.id ===
//                     events.find((event) => event.id === Number(id))?.venue_id
//                 )?.seating_arrangement_img
//               }
//               alt={
//                 venues.find(
//                   (venue) =>
//                     venue.id ===
//                     events.find((event) => event.id === Number(id))?.venue_id
//                 )?.name
//               }
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default SingleEvent;

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   useGetAllVenuesQuery,
//   useGetEventsByVenueIdQuery,
// } from "../../../slices/api";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function SingleEvent() {
//   const events = useSelector((state) => state.events || []); // Default to an empty array
//   const venues = useSelector((state) => state.venue || []); // Default to an empty array
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data: allVenues, isLoading: isLoadingVenues } =
//     useGetAllVenuesQuery();

//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(0);
//   const [tickets, setTickets] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedVenue, setSelectedVenue] = useState(null);

//   useEffect(() => {
//     const event = events.find((event) => event.id === Number(id));
//     const venue = venues.find((venue) => venue.id === event?.venue_id);

//     setSelectedEvent(event);
//     setSelectedVenue(venue);

//     if (event && venue) {
//       const min_price = parseFloat(event.price_range / 10);
//       const max_price = parseFloat(event.price_range);
//       setMinPrice(min_price);
//       setMaxPrice(max_price);

//       const seed = `${event.id}${venue.id}`;
//       const localStorageKey = `ticketPrices-${seed}`;

//       const storedPriceRange = localStorage.getItem(localStorageKey);

//       if (storedPriceRange) {
//         const { minPrice: storedMinPrice, maxPrice: storedMaxPrice } =
//           JSON.parse(storedPriceRange);
//         setTickets(
//           generateTickets(
//             storedMinPrice,
//             storedMaxPrice,
//             venue.ticket_availability
//           )
//         );
//       } else {
//         const ticketPriceRange = { minPrice: min_price, maxPrice: max_price };
//         localStorage.setItem(localStorageKey, JSON.stringify(ticketPriceRange));
//         const newTickets = generateTickets(
//           min_price,
//           max_price,
//           venue.ticket_availability
//         );
//         setTickets(newTickets);
//       }
//     } else {
//       navigate("/error");
//     }
//   }, [id, events, venues, navigate]);

//   const generateRandomPrice = (min, max) => {
//     if (isNaN(min) || isNaN(max) || min >= max) {
//       return (0).toFixed(2);
//     }
//     return (Math.random() * (max - min) + min).toFixed(2);
//   };

//   const generateTickets = (minPrice, maxPrice, ticketCount) => {
//     return Array.from({ length: ticketCount }, (_, index) => {
//       const ticketPrice = generateRandomPrice(minPrice, maxPrice);
//       return { number: index + 1, price: ticketPrice };
//     });
//   };

//   const valuetext = (value) => `${value}$`;

//   const handleSliderChange = (event, newValue) => {
//     setMinPrice(newValue[0]);
//     setMaxPrice(newValue[1]);
//   };

//   if (isLoadingVenues) {
//     return <p>Loading venue...</p>;
//   }

//   return (
//     <>
//       {!selectedEvent || !selectedVenue ? (
//         <p>Event or Venue not found.</p>
//       ) : (
//         <div id={"single_event_wrapper"}>
//           <div className={"ticket_wrapper"}>
//             <div className={"tickets_section"}>
//               <h3>Available Tickets:</h3>
//               <input type="text" value={minPrice} readOnly />
//               <Box className={"slider"} sx={{ width: 200 }}>
//                 <Slider
//                   getAriaLabel={() => "Price range"}
//                   value={[minPrice, maxPrice]}
//                   onChange={handleSliderChange}
//                   //   min={minPrice} // Adjust min value based on your requirements
//                   //   max={maxPrice} // Adjust max value based on your requirements
//                   //   min={Math.min(minPrice)} // Dynamic min and max values
//                   //   max={Math.max(maxPrice)}
//                   valueLabelDisplay="auto"
//                   getAriaValueText={valuetext}
//                   color="secondary"
//                 />
//               </Box>
//               <input type="text" value={maxPrice} readOnly />
//               <ul>
//                 {tickets.slice(0, 10).map((ticket) => (
//                   <li className={"tickets"} key={ticket.number}>
//                     Standard Ticket Price: ${ticket.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className={"venue_img"}>
//             <img
//               src={selectedVenue?.seating_arrangement_img}
//               alt={selectedVenue?.name}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default SingleEvent;

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

function SingleEvent() {
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
    console.log("Selected Event:", selectedEvent);
    console.log("Selected Venue:", selectedVenue);
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);

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
    //   const generateRandomPrice = (min, max) => {
    //     if (isNaN(min) || isNaN(max) || min >= max) {
    //       return 0; // Return a default value if the input is invalid
    //     }
    //     return (Math.random() * (max - min) + min).toFixed(2);
    //   };

    //   const storedPrices = localStorage.getItem(localStorageKey);
    //   if (storedPrices) {
    //     tickets_array = JSON.parse(storedPrices);
    //   } else {
    //     const ticketCount =
    //       parseInt(selectedVenue.ticket_availability, 10) || 0;
    //     tickets_array = Array.from({ length: ticketCount }, (_, index) => {
    //       const ticketPrice = generateRandomPrice(min_price, max_price); // Generate a random price for each ticket
    //       console.log(tickets_array);
    //       return { number: index + 1, price: ticketPrice };
    //     });
    //     localStorage.setItem(localStorageKey, JSON.stringify(tickets_array));

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
  //   const numberOfTicketsToDisplay = 10;
  // Extract price range values and ensure they are valid numbers
  //   const min_price = parseFloat(selectedEvent.price_range / 10);
  //   const max_price = parseFloat(selectedEvent.price_range);
  //   const handleSliderChange = (event, newValue) => {
  //     setMinPrice(newValue[0]);
  //     setMaxPrice(newValue[1]);
  //   };
  //   const handleSliderCommit = (event, newValue) => {
  //     setMinPrice(newValue[0]);
  //     setMaxPrice(newValue[1]);
  //   };
  //   const seed = `${selectedEvent.id}${selectedVenue.id}`;
  //   const localStorageKey = `ticketPrices-${seed}`;
  // Function to generate a random price within the given range
  //   const generateRandomPrice = (min, max) => {
  //     if (isNaN(min) || isNaN(max) || min >= max) {
  //       return (0).toFixed(2); // Return a default value if the input is invalid
  //     }
  //     return (Math.random() * (max - min) + min).toFixed(2);
  //   };
  //   let tickets_array = [];
  //   const storedPrices = localStorage.getItem(localStorageKey);
  //   if (storedPrices) {
  //     // Parse and use the stored prices
  //     tickets_array = JSON.parse(storedPrices);
  //   } else {
  //   Generate and store new prices
  //   const ticketCount = parseInt(selectedVenue.ticket_availability, 10) || 0;
  //   tickets_array = Array.from({ length: ticketCount }, (_, index) => {
  //     const ticketPrice = generateRandomPrice(
  //       (setMinPrice(min_price), setMaxPrice(max_price))
  //     ); // Generate a random price for each ticket
  //     return { number: index + 1, price: ticketPrice };
  //   });
  // localStorage.setItem(localStorageKey, JSON.stringify(tickets_array));
  // const filteredTickets = tickets_array.filter((ticket) => {
  //   const price = parseFloat(ticket.price);
  //   return price >= minPrice && price <= maxPrice;
  // });
  // setTickets(filteredTickets);
  //   }
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
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
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
