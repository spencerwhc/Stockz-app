import { useState, useEffect } from "react";
const API_KEY = "9fd7a30ee7bb8f392596d329572b28eb";

async function getPriceHistory(symbol) {
  const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=100&apikey=${API_KEY}`;

  let res = await fetch(url);
  let price = await res.json();
  return price.historical;
}

function usePriceHistroy(symbol) {
  const [loading, setLoading] = useState(false);
  const [PriceHistroy, setPriceHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      setLoading(true);
      try {
        const price = await getPriceHistory(symbol);
        setPriceHistory(price);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceHistory();
  }, [symbol]);

  return {
    loading,
    PriceHistroy,
    error,
  };
}

export default usePriceHistroy;
