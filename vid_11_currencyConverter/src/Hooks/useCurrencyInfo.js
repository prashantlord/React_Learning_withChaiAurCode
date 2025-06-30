// Currency API = https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}
// Currency Names API = https://api.frankfurter.app/currencies

import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.frankfurter.app/currencies`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return data;
}

export default useCurrencyInfo;
