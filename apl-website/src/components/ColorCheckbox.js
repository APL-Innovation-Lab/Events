import React from "react";
import "./ColorCheckbox.css";

export default function ColorCheckbox({ id }, {checked}, onChange) {
  var colorScheme = {
    1900: "#ed0e0e",
    2478: "#f5b342",
    1993: "#882CC0",
    1925: "#128353",
    2557: "#D073C7",
    2069: "#2C56C0",
    "category-1900": "#ed0e0e",
    "category-2478": "#f5b342",
    "category-1993": "#882CC0",
    "category-1925": "#128353",
    "category-2557": "#D073C7",
    "category-2069": "#2C56C0",
    "age-all": "#ed0e0e",
    "age-adult": "#f5b342",
    "age-youth12": "#882CC0",
    "age-youth7": "#128353",
    "age-youth9": "#D073C7",
    "age-youth4": "#2C56C0",
    "all-events": "#ed0e0e",
  };
  return (
    <div
      className="box"
      style={{
        background: `linear-gradient(to right, ${colorScheme[id]} 5%, 
            ${colorScheme[id]} 5%,${colorScheme[id]} 5%, white 5%, white 100%)`,
      }}
    >
      <input
        class="check"
        type="checkbox"
        id="locations"
        checked={checked}
        onChange={onChange}
      />
      <label for="locations">{id}</label>
    </div>
  );
}
