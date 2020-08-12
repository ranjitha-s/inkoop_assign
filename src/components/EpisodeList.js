import React from "react";
import Episode from "./Episode";

function EpisodeList(props) {
  let episodes = props.currentEpisodes.map((episode, i) => {
    return (
      <Episode
        key={i}
        name={episode.name}
        date={episode.air_date}
        code={episode.episode}
      />
    );
  });
  return (
    <div>
      <div>{episodes}</div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-lg btn-outline-dark previous"
          onClick={props.prevPage}
        >
          &laquo; Prev
        </button>
        <span>&nbsp; &nbsp;</span>
        <button
          className="btn btn-lg btn-outline-dark next"
          onClick={props.nextPage}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

export default EpisodeList;
