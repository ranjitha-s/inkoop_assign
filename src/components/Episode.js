import React from "react";

function Episode(episode) {
  return (
    <div className="container-fluid font-weight-normal font-size-small">
      <div
        className="card promoting-card white-skin bg-light border border-info rounded w-75"
        style={{ width: "15rem", fontSize: "15px", height: "150px" }}
      >
        <div className="card-body">
          <div>
            <h4 className="card-title font-weight-bold">{episode.name}</h4>
            <p className="card-text">
              <span className="glyphicon glyphicon-time"></span>
              <span> </span>
              {episode.date}
            </p>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            This is the episode from the famous Tv Show{" "}
            <strong>Rick and Morty</strong>
          </p>
          <p className="float-left font-italic">{episode.name}</p>
          <p className="float-right blue-text">{episode.code}</p>
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default Episode;
