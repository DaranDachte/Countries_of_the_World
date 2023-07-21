import style from "./style.module.scss";

type Props = {
  text: string;
  isChecked?: boolean;
  onChange: (value: boolean) => void;
};

const Toggler: React.FunctionComponent<Props> = ({
  text,
  isChecked,
  onChange,
}) => {
  return (
    <div className={style.toggler} onClick={() => onChange(!isChecked)}>
      <div
        className={`${style.togglerSwitch} ${
          isChecked ? style.togglerSwitchRight : style.togglerSwitchLeft
        }`}
      ></div>
      <span>{text}</span>
    </div>
  );
};

export default Toggler;
