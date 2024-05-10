// CustomMonthTitle.js
import React from "react";

const CustomMonthTitle = ({ label }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "700px", fontWeight: "bold" }}>{label}</h1>
    </div>
  );
};

export default CustomMonthTitle;