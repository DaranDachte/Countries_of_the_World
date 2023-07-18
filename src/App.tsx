import { useState, useEffect, useMemo } from "react";
import { fetcher } from "./Helpers/fetcher";
import { Country } from "./Types";

import "./App.css";
import Card from "./Components/Card/Card";

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
