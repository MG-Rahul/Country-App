/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import style from "./Country.module.css";
const Country = (props) => {
  const { country, onRemoveCountry } = props;
  const {
    name = {},
    flags = {},
    capital = [],
    population,
    area,
    languages = {},
    timezones = [],
    continents = [],
    startOfWeek,
    currencies = {},
    region,
    subregion,
    postalCode = {},
  } = country;

  const currencyEntries = Object.entries(currencies);
  const currency = currencyEntries.length > 0 ? currencyEntries[0] : null;

  const languageEntries = Object.entries(languages);
  const language = languageEntries.length > 0 ? languageEntries[0][1] : null;
  const handleRemoveCountry = (name) => {
    onRemoveCountry(name);
  };
  return (
    <div className={style.content}>
      <div className={style.card}>
        <img src={flags.png} alt={flags.alt} />
        <p style={{ textAlign: "center" }}>
          <b> {name.common}</b>
        </p>
        <p style={{ textAlign: "center" }}>
          <b>Official Name: </b>
          {name.official}
        </p>
        <div className={style.text}>
          <div>
            {/* <p>
        <b>{i}</b>
      </p> */}
            <p>
              <b>Capital: </b> {capital}
            </p>
            <p>
              <b>Languages: </b> {language}
            </p>
            <p>
              <b>Region: </b>
              {region}
            </p>
            <p>
              <b>SubRegion: </b>
              {subregion}
            </p>
            <p>
              <b>Populations: </b>
              {population}
            </p>
            <p>
              <b>Area: </b>
              {area}
            </p>
          </div>
          <div>
            <p>
              <b>TimeZone: </b>
              {timezones[0]}
            </p>
            <p>
              <b>Continents: </b>
              {continents[0]}{" "}
            </p>
            <p>
              <b>Currency Name: </b>
              {currency ? currency[1].name : "Do not insert"}
            </p>
            <p>
              <b>
                Currency Symbol:{" "}
                {currency ? currency[1].symbol : "Do not insert"}{" "}
              </b>
            </p>
            <p>
              <b>Start of Week: </b>
              {startOfWeek}
            </p>
            <p>
              <b>PostalCode: </b>
              {Object.keys(postalCode).length === 0
                ? "Do not insert"
                : postalCode.format}
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => handleRemoveCountry(name.common)}>Remove</button>
    </div>
  );
};

export default Country;
