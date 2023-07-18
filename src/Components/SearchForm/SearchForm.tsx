import React from "react";
import style from "./style.module.scss";
import { ReactComponent as IconSearch } from "../../assets/img/IconSearch.svg";

const SearchForm = () => {
  return (
    <div className={style.searchForm}>
      <label htmlFor="countrySearch">
        <IconSearch />
      </label>
      <input className={style.input} placeholder="Search"></input>
    </div>
  );
};

export default SearchForm;
