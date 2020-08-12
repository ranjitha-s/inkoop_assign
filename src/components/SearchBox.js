import React from "react";

function SearchBox(props) {
  return (
    <div className="md-form mb-2 " style={{ width: "90rem" }}>
      <input
        className="form-control"
        onChange={props.handleInput}
        type="text"
        placeholder="Search"
        aria-label="Search"
        style={{ height: "35px" }}
      />
    </div>
  );
}

export default SearchBox;
