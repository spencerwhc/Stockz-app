import React, { useState } from "react";
import ReactDOM from "react-dom"; // add this one
import { useStockProfile } from "./StockProfileAPI"; // import from a local file
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

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
      <div
        className="ag-theme-balham-dark"
        style={{ height: 1000, width: 600 }}
      >
        <AgGridReact
          rowData={stocksProfile}
          pagination={true}
          paginationPageSize={30}
        >
          <AgGridColumn field="symbol" headerName="Stock"></AgGridColumn>
          <AgGridColumn field="companyName"></AgGridColumn>
          <AgGridColumn field="sector"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}
