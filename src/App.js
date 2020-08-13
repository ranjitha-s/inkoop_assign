import React from "react";
import SearchApi from "./components/SearchApi";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-info mb-3">
        <strong>
          <i>Rick and Morty episodes</i>
        </strong>
      </h1>
      <br />
      <SearchApi />
    </div>
  );
};

export default App;
