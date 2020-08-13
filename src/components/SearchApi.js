import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import EpisodeList from "./EpisodeList";

const SearchApi = () => {
  const [searchEpisode, setSearchEpisode] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [initialPage] = useState(1);
  const [page, setPage] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    const fetchEpisodes = async (page) => {
      await axios
        .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
        .then((res) => {
          setEpisodes(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchEpisodes(page);
  }, [page]);

  const handleInput = (e) => {
    setSearchEpisode(e.target.value.toLowerCase());
    setPage(initialPage);
    search();
  };

  const search = () => {
    let filteredEpisodes = episodes.filter((episode) => {
      return episode.name.toLowerCase().includes(searchEpisode.toLowerCase());
    });
    if (filteredEpisodes.length > 0) {
      const fetchEpisodes = async (searchEpisode) => {
        await axios
          .get(`https://rickandmortyapi.com/api/episode/?name=${searchEpisode}`)
          .then((res) => {
            setEpisodes(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchEpisodes(searchEpisode);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
    setNextDisabled(true);
    setPrevDisabled(false);
  };

  const prevPage = () => {
    setPage(page - 1);
    setPrevDisabled(true);
    setNextDisabled(false);
  };

  return (
    <div>
      <SearchBox handleInput={handleInput} />
      <br />
      <EpisodeList
        currentEpisodes={episodes}
        nextPage={nextPage}
        prevPage={prevPage}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
      />
      <br />
      <br />
    </div>
  );
};

export default SearchApi;
