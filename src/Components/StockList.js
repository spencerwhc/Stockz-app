import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStockProfile } from "./StockProfileAPI"; // import from a local file
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import SearchBar from "./SearchBar";
import Price from "./Price";

export default function StockList() {
  const { loading, stocksProfile, error } = useStockProfile();
  const [search, setSearch] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");

  let history = useHistory();

  useEffect(() => {
    const filteredResult = stocksProfile.filter((stock) =>
      stock.symbol.toUpperCase().includes(search.toUpperCase())
    );
    setFilteredStocks(filteredResult);
  }, [search, stocksProfile]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="StockList">
      <div
        className="ag-theme-balham-dark"
        style={{ height: 1000, width: 800 }}
      >
        <h2>Stocks List</h2>
        <SearchBar onChange={setSearch} value={search} />
        <AgGridReact
          rowData={filteredStocks}
          pagination={true}
          paginationPageSize={30}
        >
          <AgGridColumn
            field="symbol"
            headerName="Stock"
            onCellClicked={(event) => history.push(`/price/${event.value}`)}
          ></AgGridColumn>
          <AgGridColumn field="companyName" width="400px"></AgGridColumn>
          <AgGridColumn field="sector"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}
