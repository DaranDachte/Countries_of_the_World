import { useState, useEffect, useMemo } from "react";
import { fetcher } from "./Helpers/fetcher";
import { Country } from "./Types";

import style from "./App.module.scss";
import Card from "./Components/Card/Card";
import Toggler from "./Components/Toggler/Toggler";
import SearchForm from "./Components/SearchForm/SearchForm";
import Select from "./Components/Select/Select";
import LearnMore from "./Components/LearnMore/LearnMore";
import { SelectOption } from "./Components/Select/Select";
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
//import { CountryContextProvider } from "./Context/CountryContext";

export const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const [error, setError] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [checker, setChecker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [openLearnMore, setOpenLearnMore] = useState(false);

  //можем получать сюда значение из стора
  const { option } = useSelector((state: RootState) => state.activeOption);
  const regionFilter = option;

  console.log(regionFilter);

  const dispatch = useDispatch();

  //   const [regionFilter, setRegionFilter] = useState("");

  const setRegionFilter = (value: string) => {
    console.log(value);
    dispatch({ type: "CHANGE_OPTION", payload: value });
  };

  /*
   * Здесь  с помощью ассинхронной функции мы делаем запрос, чтобы получить массив стран.
   *  Обращение к Апи идет через функцию fetcher (описание функции в файле fetcher).
   *
   */

  const getData = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const data = await fetcher<Country[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
      setIsLoading(false);
      error;
    } catch (error) {
      setError("Something goes wrong! 🙁");
      setCountries([]);
    } finally {
      console.log("What happened?");
    }
  };

  // собираем массив регионов, перебирая массив стран, забирая оттуда строку country.region с названием региона. С помощью useMemo  мы запоминаем эти данные и обновляем их, только если изменяется массив стран [countries]. Далее с помощью фильтра мы оставляем только оригинальные названия регионов.
  const regions = useMemo(() => {
    return countries
      .map((country) => {
        return country.region;
      })
      .filter((item, idx, arr) => arr.indexOf(item) === idx);
  }, [countries, regionFilter]);

  /*мы  создали массив объектов для последующей передачи в компонент Select. С помощью метода map
  мы перебрали регионы и на основании каждого региона создали объект выпадающего списка с текстом и значением.  
  */

  const regionOptions: SelectOption[] = useMemo(() => {
    const base: SelectOption = { text: "All", value: "" };
    return [
      base,
      ...regions.map((region) => {
        return {
          text: region,
          value: region,
        };
      }),
    ];
  }, [regions]);

  // Здесь если массив стран пуст (ничего не загружено), то мы вызываем функцию getData()
  useEffect(() => {
    if (!countries.length) getData();
  });
  console.clear();

  const filteredCountries = () => {
    if (!regionFilter && !countryFilter.length) return countries;
    if (regionFilter && !countryFilter.length)
      return countries.filter((country) => country.region === regionFilter);
    if (!regionFilter && countryFilter.length)
      return countries.filter((country) =>
        country.name.official
          .toLowerCase()
          .includes(countryFilter.toLowerCase())
      );

    return countries.filter(
      (country) =>
        country.region === regionFilter &&
        country.name.official
          .toLowerCase()
          .includes(countryFilter.toLowerCase())
    );
  };
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.name}>
          <h1>Countries of the world</h1>
          <p>Interactive Reference Guide</p>
        </div>
        <Toggler
          text={checker ? "Dark" : "Light"}
          isChecked={checker}
          onChange={setChecker}
        />
        <SearchForm
          onInput={(value) => setCountryFilter(value)}
          value={countryFilter}
        />
        <Select
          options={regionOptions}
          onChange={(value) => setRegionFilter(value)}
        />
      </div>
      {!isLoading && !filteredCountries.length && <p>Sorry, no matches 🙁</p>}
      {isLoading && <p>Waiting Loading, Relax 🙁</p>}
      <ul className={style.countriesList}>
        {filteredCountries().map((country, index) => (
          <li key={index}>
            <Card
              flagUrl={country.flags.svg}
              name={country.name.official}
              capital={""}
              population={country.population}
              onClick={() => setActiveCountry(country)}
            />
          </li>
        ))}
      </ul>
      {activeCountry && (
        <LearnMore
          country={activeCountry}
          onClose={() => setActiveCountry(null)}
        />
      )}
    </div>
  );
};

export default App;
