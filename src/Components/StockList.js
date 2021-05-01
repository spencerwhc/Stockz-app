import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStockProfile } from "./StockProfileAPI"; // import from a local file
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import SearchBar from "./SearchBar";
import SelectBar from "./SelectBar";

export default function StockList() {
  const { loading, stocksProfile, error } = useStockProfile();
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let filteredResult = [];

    filteredResult = stocksProfile.filter((stock) =>
      stock.symbol.toUpperCase().includes(selectedStock.toUpperCase())
    );

    if (selectedSector) {
      filteredResult = filteredResult.filter(
        (stock) => stock.sector === selectedSector
      );
      console.log(filteredResult, "filteredresults");
    }
    setFilteredStocks(filteredResult);
  }, [selectedStock, stocksProfile, selectedSector]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  const sectors = ["Technology", "Consumer Services"];
  return (
    <div className="container">
      <h2>Stocks List</h2>
      <div>
        <div className="row">
          <div className="col">
            <label>Search by Stock</label>
            <SearchBar
              onChange={setSelectedStock}
              value={selectedStock.toUpperCase()}
            />
          </div>
          <div className="col">
            <label>Search by Sector</label>
            <SelectBar
              onChange={(sector) => {
                setSelectedSector(sector);
              }}
              sectors={sectors}
              value={selectedSector}
            />
          </div>
        </div>
      </div>
      <div className="ag-theme-balham-dark">
        <AgGridReact
          rowData={filteredStocks}
          pagination={true}
          paginationPageSize={30}
          domLayout="autoHeight"
        >
          <AgGridColumn
            field="symbol"
            headerName="Stock"
            onCellClicked={(event) => history.push(`/price/${event.value}`)}
          ></AgGridColumn>
          <AgGridColumn field="companyName" width="400"></AgGridColumn>
          <AgGridColumn field="sector"></AgGridColumn>
          <AgGridColumn
            field="price"
            filter="agNumberColumnFilter"
            sortable="true"
          ></AgGridColumn>
          <AgGridColumn
            field="volume"
            filter="agNumberColumnFilter"
            sortable="true"
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}
