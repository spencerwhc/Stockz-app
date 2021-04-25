import { useState, useEffect } from "react";
const API_KEY = "9fd7a30ee7bb8f392596d329572b28eb";

async function getStocksProfile() {
  const url =
    "https://financialmodelingprep.com/api/v3/stock-screener?&apikey=" +
    API_KEY;
  let res = await fetch(url);
  let stocks = await res.json();
  return stocks;
}

export function useStockProfile() {
  const [loading, setLoading] = useState(false);
  const [stocksProfile, setStocksProfile] = useState([]);
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
    error,
  };
}
