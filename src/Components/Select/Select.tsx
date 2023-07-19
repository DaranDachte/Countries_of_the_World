import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Vector } from "../../assets/img/Vector.svg";

export type SelectOption = {
  value: string;
  text: string;
  isSelected?: boolean;
};

type Props = {
  options: SelectOption[];
  onChange: (value: string) => void;
};

const Select: React.FunctionComponent<Props> = ({ options, onChange }) => {
  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={style.select}>
      <select onChange={changeHandler}>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
      <Vector />
    </div>
  );
};

export default Select;
