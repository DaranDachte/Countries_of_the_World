import style from "./style.module.scss";
import { ReactComponent as IconSearch } from "../../assets/img/IconSearch.svg";

type Props = {
  onInput: (value: string) => void;
  value: string;
  placeholder?: string;
};

const SearchForm: React.FunctionComponent<Props> = ({
  value,
  onInput,
  placeholder = "Search",
}) => {
  const SubmitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
  };
  return (
    <label className={style.searchForm}>
      <IconSearch />
      <input
        className={style.input}
        placeholder={placeholder}
        onInput={SubmitHandler}
        value={value}
      />
    </label>
  );
};

export default SearchForm;
