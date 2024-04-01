import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import SearchIcon from "assets/searchIconBig.png";

import classes from "./Search.module.scss";
import { Paths } from "constants/paths";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleOnSearch = () => {
    navigate({
      pathname: Paths.Items,
      search: createSearchParams({ search }).toString(),
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearch(event.target.value);
  };

  return (
    <div className={classes.root}>
      <input
        type="text"
        className={classes.inputSearch}
        placeholder="Nunca dejes de buscar"
        value={search}
        onChange={handleInputChange}
      />
      <button className={classes.buttonSearch} onClick={handleOnSearch}>
        <img
          src={SearchIcon}
          className={classes.searchIcon}
          alt="Icono de busqueda"
        />
      </button>
    </div>
  );
};

export default Search;
