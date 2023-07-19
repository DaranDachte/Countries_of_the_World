import React from "react";
import style from "./style.module.scss";
import { ReactComponent as IconSearch } from "../../assets/img/IconSearch.svg";

const SearchForm = () => {
  return (
    <label className={style.searchForm}>
      <IconSearch />
      <input className={style.input} placeholder="Search"></input>
    </label>
  );
};

export default SearchForm;
