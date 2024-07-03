import React from "react";
import "./style.css";

const Card = (props) => {
  const dummyFlag =
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png";

  const getSelectedCountry = (name) => {
    console.log("c-->", name);
    props.onCountryName(name);
  };

  return (
    <>
      <div className="card" onClick={() => getSelectedCountry(props?.name)}>
        <img
          src={props?.flag ? props?.flag : dummyFlag}
          alt="Avatar"
          className="image"
        />
        <div className="container">
          <p className="name">
            Name: <strong> {props.name || ""}</strong>
          </p>
          <p className="title">
            Population: <strong>{props.population || ""}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
