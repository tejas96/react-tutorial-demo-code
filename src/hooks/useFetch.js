import { useState } from "react";

function useFetch() {
  const [responseData, setResponseData] = useState();
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);

  const callApi = (url, options = {}) => {
    setLoader(() => true);
    //reseting
    setError(() => null);
    fetch(url, options)
      .then((res) => res.json())
      .then((result) => setResponseData(result))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoader(() => false);
      });
  };

  return {
    responseData,
    callApi,
    error,
    loader
  };
}

export default useFetch;
