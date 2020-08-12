import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import EpisodeList from "./components/EpisodeList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [initialPage] = useState(1);
  const [page, setPage] = useState(1);
  const [searchEpisode, setSearchEpisode] = useState("");

  useEffect(() => {
    const fetchEpisodes = async (page) => {
      await axios
        .get(
          `https://rickandmortyapi.com/api/episode/?page=${page}&name=${searchEpisode}`
        )
        .then((res) => {
          setEpisodes(res.data.results);
        });
    };
    fetchEpisodes(page);
  }, [page, searchEpisode]);

  const handleInput = (e) => {
    setSearchEpisode(e.target.value.toLowerCase());
    setPage(initialPage);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-info mb-3 col-md-4">
        <strong>
          <i>Rick and Morty episodes</i>
        </strong>
      </h1>
      <SearchBox handleInput={handleInput} />
      <br />
      <EpisodeList
        currentEpisodes={episodes}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default App;
