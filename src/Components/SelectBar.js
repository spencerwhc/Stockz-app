import React from "react";

export default function SelectBar(props) {
  //   const industryList = new Set()

  //   setIndustryList(() => industryList = props.map( (stock) => stock.sector));
  return (
    <div className="SelectBar">
      <select
        name="sector"
        id="sectors"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      >
        <option value={""}>--ANY--</option>
        {props.sectors &&
          props.sectors.map((sector) => (
            <option value={sector}>{sector}</option>
          ))}
      </select>
    </div>
  );

  return;
}
