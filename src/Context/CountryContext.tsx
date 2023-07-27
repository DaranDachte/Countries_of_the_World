import { createContext, useState } from "react";
import { Country } from "../Types";

type Props = {
  activeCountry: Country | null;
  onClick: () => void;
};

type CountryContextProviderProps = {
  children: React.ReactNode;
};

const CountryContext = createContext<Props>({
  activeCountry: Country | null,
  onClick: () => {},
});

export default CountryContext;

export const CountryContextProvider = ({
  children,
}: CountryContextProviderProps) => {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const onClick = () => setActiveCountry(country);

  return (
    <CountryContext.Provider value={(activeCountry, onClick)}>
      {children}
    </CountryContext.Provider>
  );
};
