import React from "react";
import style from "./style.module.scss";

import { Country } from "../../Types";

const Card: React.FunctionComponent<Country> = ({
  flags,
  name,
  capital,
  population,
  onClick,
}) => {
  return (
    <div className={style.card}>
      <div className={style.flag}>{flags}</div>
      <div className={style.description}>
        <h4>{name}</h4>
        <p>Capital:{capital}</p>
        <p>Population: {population}</p>
        <p>Learn more: {onClick}</p>
      </div>
    </div>
  );
};

export default Card;
