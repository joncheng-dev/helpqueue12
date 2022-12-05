import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Moe and Barney",
      location: "Moe's Tavern",
      issue: "out of beer",
    },
    {
      names: "Patty and Selma",
      location: "Try 'n Save",
      issue: "cigarettes are fake",
    },
    {
      names: "Bart and Lisa",
      location: "Springfield Elementary",
      issue: "no pick up",
    },
  ];

  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
