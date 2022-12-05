import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainTicketList: [],
      selected: null,
    };
  }

  handleClick = () => {
    if (this.state.selected !== null) {
      this.setState({
        selected: null,
      });
    } else {
      this.setState((prevState) => ({
        formShowing: !prevState.formShowing,
      }));
    }
  };

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      formShowing: false,
      mainTicketList: newMainTicketList,
    });
  };

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter((ticket) => ticket.id === id)[0];
    this.setState({
      selected: selectedTicket,
    });
  };

  handleDeleteTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter((ticket) => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selected: null,
    });
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.selected !== null) {
      currentlyDisplayed = <TicketDetail ticket={this.state.selected} onDeleteClick={this.handleDeleteTicket} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.formShowing) {
      currentlyDisplayed = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplayed = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = "Add Ticket to List";
    }

    return (
      <React.Fragment>
        {currentlyDisplayed}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
