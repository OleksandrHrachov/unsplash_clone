import { useState } from "react";
import { Button } from "../Button";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { searchImages } from "../../services/api";

export const Header = () => {
  const [search, setSearch] = useState("");

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlerSubmit = async () => {
    const serchResult = await searchImages(search);
    console.log('SEARCH RESULT =>', serchResult);
  };

  return (
    <div className="header">
      <NavLink to="/">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          version="1.1"
          aria-labelledby="unsplash-home"
          aria-hidden="false"
        >
          <desc lang="en-US">Unsplash logo</desc>
          <title id="unsplash-home">Unsplash Home</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
        </svg>
      </NavLink>
      <div className="header__search">
        <input
          className="header__search-input"
          type="text"
          value={search}
          onChange={(e) => handlerOnChange(e)}
        />
        <Button title="SEARCH" handlerClick={handlerSubmit} />
      </div>
    </div>
  );
};
