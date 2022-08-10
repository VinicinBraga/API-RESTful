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
        // .then (Sucesso) e .catch (Erro)
        // Mas se eu quiser executar algo no useEfect, seja no erro ou sucesso, eu uso o ".finally"
        setIsFetching(false);
      });
  }, [url]);

  return { data, isFetching };
}

export default useFetch;
