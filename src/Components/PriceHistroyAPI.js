import { useState, useEffect } from "react";
const API_KEY = "9fd7a30ee7bb8f392596d329572b28eb";

async function getHistroyPrice(symbol) {
  const url =
    "https://financialmodelingprep.com/api/v3/historical-price-full/" +
    symbol +
    "?timeseries=100&apikey=" +
    API_KEY;

  let res = await fetch(url);
  let price = await res.json();
  return price;
}

export function useStockProfile() {
  const [loading, setLoading] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [priceHistroy, setPriceHistroy] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true);
      try {
        const stocks = await getStocksProfile();
        setStocksProfile(stocks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return {
    loading,
    stocksProfile,
    error: null,
  };
}
