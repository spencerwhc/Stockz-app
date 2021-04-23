import React, { useState } from "react";
import ReactDOM from "react-dom"; // add this one
import { useStockProfile } from "./StockProfileAPI"; // import from a local file

function StockTable(props) {
  return (
    <div className="stockTable">
      <button>Symbol: {props.symbol}</button>
      <p>Name:{props.name}</p>
      <p>Sector: {props.sector}</p>
    </div>
  );
}

export default function Stocks(props) {
  const { loading, stocksProfile, error } = useStockProfile();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  return (
    <div className="Stock">
      <h2>Stocks List</h2>
      {stocksProfile.map((stock) => (
        <StockTable
          symbol={stock.symbol}
          name={stock.companyName}
          sector={stock.sector}
          key={stock.symbol}
        />
      ))}
    </div>
  );
}
