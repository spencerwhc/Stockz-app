import { useState, useEffect } from "react";
const API_KEY = "9fd7a30ee7bb8f392596d329572b28eb";

async function getHistroyPrice() {
  const url =
    "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?timeseries=5&apikey=9fd7a30ee7bb8f392596d329572b28eb";

  let res = await fetch(url);
  let price = await res.json();
  return price.historical;
}

function usePriceHistroy() {
  const [loading, setLoading] = useState(false);
  const [PriceHistroy, setPriceHistroy] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPriceHistroy = async () => {
      setLoading(true);
      try {
        const price = await getHistroyPrice();
        setPriceHistroy(price);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceHistroy();
  }, []);

  return {
    loading,
    PriceHistroy,
    error,
  };
}

export default usePriceHistroy;
