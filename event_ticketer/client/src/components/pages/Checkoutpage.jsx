import React from "react";

function Checkoutpage({ quantity, ticketValue }) {
  return (
    <>
      <div>
        <h1>Checkout</h1>
        <p>Ticket Price: ${ticketValue}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${ticketValue * quantity}</p>
      </div>
    </>
  );
}

export default Checkoutpage;
