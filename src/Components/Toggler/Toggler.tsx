import React from "react";
import style from "./style.module.scss";
import { ReactComponent as FormCheckInput } from "../../assets/img/FormCheckInput.svg";

const Toggler = () => {
  return (
    <div className={style.toggler}>
      <FormCheckInput />
      <p className={style.light}>Light</p>
    </div>
  );
};

export default Toggler;
