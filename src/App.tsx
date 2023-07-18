import { useState, useEffect, useMemo } from "react";
import { fetcher } from "./Helpers/fetcher";
import { Country } from "./Types";

import style from "./App.module.scss";
import Card from "./Components/Card/Card";
import Toggler from "./Components/Toggler/Toggler";
import SearchForm from "./Components/SearchForm/SearchForm";
import Select from "./Components/Select/Select";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [activeCountry, setActiveCountry] = useState("");
  const [error, setError] = useState("");

  /**
   * Здесь  с помощью ассинхронной функции мы делаем запрос, чтобы получить массив стран.
   *  Обращение к Апи идет через функцию fetcher (описание функции в файле fetcher).
   *
   */
  const getData = async () => {
    try {
      const data = await fetcher<Country[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
      setError("");
    } catch (err) {
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
  }, [countries]);

  // Здесь если массив стран пуст (ничего не загружено), то мы вызываем функцию getData()
  useEffect(() => {
    if (!countries.length) getData();
  });
  console.clear();
  console.log(regions);

  return (
    <>
      <div className={style.header}>
        <div className={style.name}>
          <h1>Countries of the world</h1>
          <p>Interactive Reference Guide</p>
        </div>
        <Toggler />
        <SearchForm />
        <Select />
      </div>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Card
              flagUrl={country.flags.svg}
              name={country.name.official}
              capital={""}
              population={country.population}
              onClick={() => setActiveCountry("")}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
