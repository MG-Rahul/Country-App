/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { v4 as uuidv4 } from "uuid";

import Country from "./Country";
import style from "./Countries.module.css";

const CountriesReceive = (props) => {
  return (
    <div className={style.container}>
      {props.countries.map((country, i) => {
        const countryNew = { country, i, id: uuidv4() };
        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </div>
  );
};

export default CountriesReceive;
