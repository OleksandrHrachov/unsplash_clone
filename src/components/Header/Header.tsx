import { useEffect, useState } from "react";
import { Button } from "../Button";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { changeTemplate } from "../../store/viewSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { columnsCount } = useAppSelector((state) => state.viewSlice);

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlerSubmit = async () => {
    const trimString = search.trim();
    const query = trimString.split(" ").join("-");
    if (trimString) {
      navigate(`/search/${query}`);
    }
    setSearch("");
  };

  const onKeyDownHandlerSubmit = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      const trimString = search.trim();
      const query = trimString.split(" ").join("-");
      if (trimString) {
        navigate(`/search/${query}`);
      }
      setSearch("");
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      dispatch(changeTemplate(1));
    } else if (window.innerWidth > 768 && columnsCount < 3) {
      dispatch(changeTemplate(3));
    }
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      dispatch(changeTemplate(3));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [columnsCount]);

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
          onKeyDown={(e) => onKeyDownHandlerSubmit(e)}
        />
        <Button title="SEARCH" handlerClick={handlerSubmit} />
      </div>
      <div className="header__view-btns">
        <Button
          customClassName={columnsCount === 3 ? "header__view-btn--active" : ""}
          handlerClick={() => dispatch(changeTemplate(3))}
        >
          <div className="header__view-template">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Button>
        <Button
          customClassName={columnsCount === 5 ? "header__view-btn--active" : ""}
          handlerClick={() => dispatch(changeTemplate(5))}
        >
          <div className="header__view-template">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Button>
      </div>
    </div>
  );
};
