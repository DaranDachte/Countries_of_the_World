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
  const handlerChangeTheme = () => {
    onChange(!isChecked);
    document.body.setAttribute("them", isChecked ? "Light" : "Dark");
  };

  return (
    <div className={style.toggler} onClick={handlerChangeTheme}>
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
