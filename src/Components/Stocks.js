import React, { useEffect, useState } from "react";

import { useStockProfile } from "./StockProfileAPI"; // import from a local file
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import SearchBar from "./SearchBar";
import StockList from "./StockList";
import Price from "./Price";
import usePriceHistroy from "./PriceHistroyAPI";

export default function Stocks() {
  return (
    <div className="container, Stock">
      <div className="row">
        <div className="col">
          <StockList />
        </div>
      </div>
    </div>
  );
}
