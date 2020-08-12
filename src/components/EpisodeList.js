import React, { Component } from "react";
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
        <div className="btn btn-primary previous" onClick={props.prevPage}>
          &laquo; Prev
        </div>
        <div className="btn btn-primary next" onClick={props.nextPage}>
          Next &raquo;
        </div>
      </div>
    </div>
  );
}

export default EpisodeList;
