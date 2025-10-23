import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, phone } = this.state;

    if (name.trim() === "" || phone.trim() === "") {
      alert("Please fill in both fields!");
      return;
    }

    this.props.addContact({ name, phone });

    this.setState({ name: "", phone: "" }); // clear fields
  };

  render() {
    const { name, phone } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          style={{
            padding: "8px",
            marginRight: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={this.handleChange}
          style={{
            padding: "8px",
            marginRight: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddContact;
