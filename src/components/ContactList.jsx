import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div>
        {contacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <ul>
            {contacts.map((contact) => (
              <li
                key={contact.id}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                  listStyle: "none",
                }}
              >
                <strong>{contact.name}</strong> <br />
                <span>{contact.phone}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ContactList;
