import React from "react";

const SimpleButton = (props) => {
  const btnStyling = {
    width: "100px",
    backgroundColor: "red",
    color: "white",
    height: "20px",
    fontSize: "2rem",
  };

  return (
    <>
      <button style={btnStyling}>{props.btnName}</button>
    </>
  );
};

export default SimpleButton;
