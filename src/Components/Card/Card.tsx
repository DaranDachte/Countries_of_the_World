import React from "react";
import style from "./style.module.scss";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

type Props = {
  flagUrl: string;
  name: string;
  capital: string[];
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
      <div className={style.imgWrapper}>
        <img src={flagUrl} alt={name} />
      </div>
      <figcaption>
        <p>{name}</p>
        <p>Capital: {capital}</p>
        <p>Population: {population.toLocaleString()}</p>
        <div className={style.buttonCard}>
          <ButtonComponent title="Learn more" onClick={onClick} />
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
