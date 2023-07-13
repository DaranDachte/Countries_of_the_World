import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Icon } from "../../assets/img/IconDelete.svg";

type Props = {
  onClick?: () => void;
  title: string;
};

const ButtonComponent: React.FunctionComponent<Props> = ({
  onClick,
  title,
}) => {
  return (
    <button className={style.button} onClick={onClick}>
      <span>{title}</span> <Icon />
    </button>
  );
};

export default ButtonComponent;
