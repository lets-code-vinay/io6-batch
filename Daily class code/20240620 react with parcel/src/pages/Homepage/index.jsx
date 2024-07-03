import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CountrySection from "../../components/CountrySection";
import SingleCountry from "../../components/SingleCountry";

const Homepage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  /**
   * @description Getting value from Child Component in CallBack
   * @param {String} name
   */
  const getCountryName = (name) => {
    setSelectedCountry(name);
  };

  return (
    <React.Fragment>
      <Header onCountryName={getCountryName} />

      {Boolean(selectedCountry) && (
        <SingleCountry selectedCountry={selectedCountry} />
      )}
      {Boolean(!selectedCountry) && <CountrySection onCountryName={getCountryName} />}

      <Footer />
    </React.Fragment>
  );
};

export default Homepage;
