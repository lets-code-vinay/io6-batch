import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logos/rabbit-icon.png";

const Header = (props) => {
  const [searchedInput, setSearchedInput] = useState("");

  const handleSearchField = (event) => {
    setSearchedInput(event.target.value);
  };

  const handleClick = () => {
    console.log("click testing", searchedInput);
    props?.onCountryName(searchedInput);
  };

  const handleLogoClick = () => {
    props?.onCountryName("");
  };

  return (
    <>
      <div className="header">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="logo" />

          <p>Infoxygen</p>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="What do you want to Search?"
            onChange={(e) => handleSearchField(e)}
          />
          <button onClick={() => handleClick()}>Click</button>
        </div>

        <ul className="menus">
          <li>Home</li>
          <li>Product</li>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
