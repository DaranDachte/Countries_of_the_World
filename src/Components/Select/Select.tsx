import React from "react";
import style from "./style.module.scss";

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
    </div>
  );
};

export default Select;
