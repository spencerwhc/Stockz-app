import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useStockProfile } from "./StockProfileAPI"; // import from a local file
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import SearchBar from "./SearchBar";

export default function Stocks() {
  const { loading, stocksProfile, error } = useStockProfile();
  const [search, setSearch] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    const filteredResult = stocksProfile.filter((stock) =>
      stock.symbol.toUpperCase().includes(search.toUpperCase())
    );
    setFilteredStocks(filteredResult);
  }, [search]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="Stock">
      <h2>Stocks List</h2>
      <SearchBar onChange={setSearch} value={search} />
      <div
        className="ag-theme-balham-dark"
        style={{ height: 1000, width: 600 }}
      >
        <AgGridReact
          rowData={filteredStocks}
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
