import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Loader from "../Loader";
import NothingFound from "../NothingFound";

const SingleCountry = (props) => {
  console.log("proips", props);

  const [isLoading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState({});

  const dummyFlag =
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png";
  const countryWithNameApi = `https://restcountries.com/v3.1/name/#NAME#?fullText=true`;

  useEffect(() => {
    setCountryData({});
    fetchCountry();
  }, [props.selectedCountry]);

  const fetchCountry = async () => {
    try {
      setLoading(true);
      const formattedApi = countryWithNameApi.replace(
        "#NAME#",
        props.selectedCountry
      );
      console.log("formattedAPi", formattedApi);
      const res = await axios(formattedApi);
      console.log("res-->", res);
      const { status, data = {} } = res;
      const [country = {}] = data;
      if (status == 200) {
        setLoading(false);
        setCountryData(country);
      }
    } catch (err) {
      console.error("--Error in fetching Country Data--", err);
      setLoading(false);
    }
  };
  console.log("countryData", countryData, Object.keys(countryData).length);
  const {
    name: { common = "" } = {},
    flags: { svg = dummyFlag } = {},
    capital = "",
    continents = "",
    independent = "",
    languages = [],
    population = 0,
  } = countryData || {};

  const isCorrectCountry = Object.keys(countryData).length > 0;

  return (
    <>
      {isLoading && <Loader />}

      {isCorrectCountry ? (
        <>
          <h1 style={{ fontSize: "5rem", textAlign: "center" }}>{common}</h1>
          <div className="single-country-area">
            <div className="middle-section">
              <div className="card">
                <img src={svg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{common}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Capital: <strong>{capital}</strong>
                  </li>
                  <li className="list-group-item">
                    Continent: <strong>{continents}</strong>
                  </li>
                  <li className="list-group-item">
                    Is Independent: <strong>{independent}</strong>
                  </li>
                  <li className="list-group-item">
                    Languages: <strong>{Object.values(languages)}</strong>
                  </li>
                  <li className="list-group-item">
                    Population: <strong>{population}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NothingFound />
      )}
    </>
  );
};

export default SingleCountry;
