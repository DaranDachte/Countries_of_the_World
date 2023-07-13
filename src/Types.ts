export type Country = {
  name: {
    common: string;
    official: string;
  };

  independent: boolean;

  capital: string[];
  region: string;

  maps: { googleMaps: string; openStreetMaps: string };

  population: number;

  flags: { png: string; svg: string; alt: string };
};
