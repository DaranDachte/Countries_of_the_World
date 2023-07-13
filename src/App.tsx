import "./App.css";
import { useState, useEffect } from "react";
import { fetcher } from "./Helpers/fetcher";
import { Country } from "./Types";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const getData = async () => {
    const data = await fetcher<Country[]>("https://restcountries.com/v3.1/all");
    setCountries(data);
  };

  useEffect(() => {
    if (!countries.length) getData();
  });
  console.log(countries);
  return <></>;
}

export default App;
