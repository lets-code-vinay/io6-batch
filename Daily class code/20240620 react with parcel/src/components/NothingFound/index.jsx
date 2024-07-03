import React from "react";
import NO_PAGE_FOUND from "../../assets/images/No-data-found.svg";
const NothingFound = () => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <img
        src={NO_PAGE_FOUND}
        alt="no data found"
        style={{ width: "500px", margin: "auto" }}
      />
    </div>
  );
};

export default NothingFound;
