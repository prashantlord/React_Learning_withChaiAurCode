import { useEffect, useState } from "react";

function useCurrencyRates(
  from = "USD",
  to = "AUD",
  amount = 1000,
  click = true
) {
  const [result, setResult] = useState({});

  useEffect(() => {
    fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    )
      .then((res) => res.json())
      .then((res) => setResult(Object.values(res.rates)));
  }, [click]);
  return result;
}

export default useCurrencyRates;
