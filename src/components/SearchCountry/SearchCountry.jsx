/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import style from "./Search.module.css";
const SearchCountry = (props) => {
  const [searchCountry, setSearchCountry] = useState("");
  useEffect(() => {
    props.onSearch(searchCountry);
  }, [searchCountry]);

  return (
    <div  className={style.search}>
      <input
        type="text"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
    </div>
  );
};

export default SearchCountry;
