import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searchTerm, onSearchChange } = this.props;

    return (
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={onSearchChange}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    );
  }
}

export default SearchBar;
