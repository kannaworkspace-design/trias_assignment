import React, { Component } from "react";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";
import AddContact from "./components/AddContact";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 1, name: "Raj", phone: "9876543210" },
        { id: 2, name: "Kumar", phone: "9876501234" },
        { id: 3, name: "Suresh", phone: "9876012345" },
      ],
      searchTerm: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: Date.now(), ...newContact }],
    }));
  };

  render() {
    const { contacts, searchTerm } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="app-container">
        <h1> My Contacts</h1>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={this.handleSearchChange}
        />
        <AddContact addContact={this.addContact} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
