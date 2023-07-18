import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Vector } from "../../assets/img/Vector.svg";

const Select = () => {
  return (
    <div className={style.select}>
      <input placeholder="Search"></input>
      <label htmlFor="select">
        <Vector />
      </label>
    </div>
  );
};

export default Select;
