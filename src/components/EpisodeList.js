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
      <div>
        <button
          type="button"
          className="btn btn-lg btn-outline-dark previous"
          onClick={props.prevPage}
          disabled={props.prevDisabled}
        >
          &laquo; Prev
        </button>
        <button
          type="button"
          className="btn btn-lg btn-outline-dark next"
          onClick={props.nextPage}
          disabled={props.nextDisabled}
          style={{ marginLeft: "730px" }}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

export default EpisodeList;
