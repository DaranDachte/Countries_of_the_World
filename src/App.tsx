import { useState, useEffect } from "react";
import { fetcher } from "./Helpers/fetcher";
import { Country } from "./Types";

import "./App.css";
import Card from "./Components/Card/Card";

const Regions: string[] = [
  "Asia",
  "Africa",
  "Europe",
  "America",
  "Australia and Oceania",
];

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [activeCountry, setActiveCountry] = useState("");
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const { data: categoriesFromAPI } = await fetcher<Country[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(categoriesFromAPI);
      setActiveCountry(categoriesFromAPI[0]);
      setError("");
    } catch (err) {
      setError("Something goes wrong! 🙁");
      setCountries([]);
    } finally {
      console.log("What happened?");
    }
  };

  useEffect(() => {
    if (!countries.length) getData();
  });
  console.log(countries);

  return (
    <>
      {Regions.map((region, index) => {
        <Card
          key={index}
          flags={"flags"}
          name={"name"}
          capital={"capital"}
          population={"population"}
          onClick={"onClick"}
        />;
      })}
    </>
  );
}

export default App;
