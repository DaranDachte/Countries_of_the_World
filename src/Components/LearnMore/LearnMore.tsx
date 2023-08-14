import { useState, useMemo } from "react";
import style from "./LearnMore.module.scss";
import { Country } from "../../Types";
import ReactDOM from "react-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

type Props = {
  country: Country;
  onClose: () => void;
};

const LearnMore: React.FunctionComponent<Props> = ({ country, onClose }) => {
  const [isClose, setIsClose] = useState(false);
  const asideClassName = useMemo(() => {
    return isClose ? style.animationOut : style.animationIn;
  }, [isClose]);

  const closeHandler = () => {
    setIsClose(true);
    setTimeout(() => {
      onClose();
    }, 850);
  };

  return ReactDOM.createPortal(
    <div className={style.learnMoreWrapper}>
      <aside className={asideClassName}>
        <div className={style.imgWrapper}>
          <img src={country.flags.svg} alt={country.flags.alt} />
          <div className={style.closeButton}>
            <ButtonComponent onClick={closeHandler} title={"Close"} />
          </div>
        </div>
        <h2>{country.name.common}</h2>
        <div className={style.inform}>
          <p>Capital:{country.capital}</p>
          <p>Population: {country.population.toLocaleString()}</p>
        </div>
      </aside>
    </div>,
    document.body
  );
};

export default LearnMore;
