import React, { useState, useEffect } from "react";

const useFetchHook = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPI(url);
  }, [url]);
  function fetchAPI(url) {
    fetch(url)
      .then((result) => result.json())

      .then((result) => {
        setProducts(result.products);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setProducts([]);
      });
  }
  return { products, loading, error };
};

export default useFetchHook;
