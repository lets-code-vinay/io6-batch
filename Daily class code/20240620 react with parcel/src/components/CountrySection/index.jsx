import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../Card";
import SimpleButton from "../SimpleButton";
import axios from "axios";
import Loader from "../Loader";

const CountrySection = (props) => {
  const [cData, setCdata] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const api = `https://restcountries.com/v3.1/all`;

      const response = await axios(api);
      console.log("response", response);
      const { status, data } = response || {};
      if (status == 200) {
        setCdata(data);
        setLoading(false);
      }
    } catch (err) {
      console.error(`--Error while fetching list of countries--`, err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const passCountryName = (name) => {
    console.log("passed county name in county section", name);

    props.onCountryName(name);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="country-section">
        {cData.map((ele, index) => {
          const {
            name: { common = "" } = {},
            flags: { svg = "" } = {},
            population = 0,
          } = ele || {};
          return (
            <Card
              key={`${common}-${index}`}
              flag={svg}
              name={common}
              population={population}
              onCountryName={passCountryName}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountrySection;
