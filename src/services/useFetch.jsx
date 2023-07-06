import { useState, useEffect } from "react";

const useFetchDeals = () => {
  const [deals, setDeals] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/deals", {
          method: "GET",
        });
        const results = await response.json();
        setDeals(results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return { deals, error };
};

export default useFetchDeals;
