import React from "react";
import style from "./style.module.scss";

import { Country } from "../../Types";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type Props = {
  flagUrl: string;
  name: string;
  capital: string;
  population: number;
  onClick: () => void;
};

const Card: React.FunctionComponent<Props> = ({
  flagUrl,
  name,
  capital,
  population,
  onClick,
}) => {
  return (
    <figure className={style.card}>
      <img src={flagUrl} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>Capital:{capital}</p>
        <p>Population: {population.toLocaleString()}</p>
        <ButtonComponent title="Learn more" onClick={onClick} />
      </figcaption>
    </figure>
  );
};

export default Card;
