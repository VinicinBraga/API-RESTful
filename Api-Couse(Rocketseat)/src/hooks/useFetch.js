import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "https://api.github.com/" });

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        console.log(response.data);
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
