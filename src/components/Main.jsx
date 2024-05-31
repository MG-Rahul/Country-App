/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import useFetch from "./customHook/useFetch";
import CountriesReceive from "./Countries/CountriesReceive";
import SearchCountry from "./SearchCountry/SearchCountry";

const url = "https://restcountries.com/v3.1/all";
const Main = () => {
  const { countries, isloading, error } = useFetch(url);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [notFoundCountries, setNotFoundCountries] = useState(null);

  useEffect(() => {
    if (countries) {
      setFilteredCountries(countries);
      setNotFoundCountries(null);
    }
  }, [countries]);

  const handleRemoveCountry = (name) => {
    // console.log(name);
    setFilteredCountries(
      filteredCountries.filter((country) => country.name.common !== name)
    );
    setNotFoundCountries(null);
  };
  const handleSearch = (name) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(name.toLowerCase())
      )
    );
    setNotFoundCountries(null);
  };
  useEffect(() => {
    if (filteredCountries.length === 0) {
      setNotFoundCountries("No Country Found");
    } else {
      setNotFoundCountries(null);
    }
  }, [filteredCountries]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Country App</h1>
      <SearchCountry onSearch={handleSearch} />
      {isloading && <p className="para">Data is Loading</p>}
      {error && <p className="para">{error}</p>}
      {notFoundCountries && <p className="para">{notFoundCountries}</p>}
      {filteredCountries && (
        <CountriesReceive
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
};

export default Main;
