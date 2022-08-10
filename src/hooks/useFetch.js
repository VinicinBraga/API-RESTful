import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url]);

  return { data, isFetching };
}

export default useFetch;
