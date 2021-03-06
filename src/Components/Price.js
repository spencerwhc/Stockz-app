import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import usePriceHistroy from "./PriceHistroyAPI";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { useParams } from "react-router";

export default function PriceHistroy() {
  const { symbol } = useParams();
  const { loading, PriceHistroy, error } = usePriceHistroy(symbol);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="container">
      <div className="Pirce-Histroy">
        <h2> {symbol} Price Histroy</h2>
        <div className="ag-theme-balham-dark" style={{ height: 500 }}>
          <AgGridReact rowData={PriceHistroy}>
            <AgGridColumn field="date" headerName="Date"></AgGridColumn>
            <AgGridColumn field="open"></AgGridColumn>
            <AgGridColumn field="high"></AgGridColumn>
            <AgGridColumn field="low"></AgGridColumn>
            <AgGridColumn field="close"></AgGridColumn>
            <AgGridColumn field="volume"></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
