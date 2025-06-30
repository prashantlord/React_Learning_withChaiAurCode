import React, { useEffect, useState } from "react";
import { UserSelect } from "./index";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";
import useCurrencyRates from "../Hooks/useCurrencyRates";

function Card() {
  const data = Object.keys(useCurrencyInfo());
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("AUD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState([]);
  const [click, setClick] = useState(true);
  const res = useCurrencyRates(from, to, amount, click);

  useEffect(() => {
    setResult(res);
  }, [res]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setClick((prev) => !prev);
        }}
        className="w-fit h-fit p-5 rounded-xl shadow-sm shadow-white flex flex-col justify-center items-center gap-4"
      >
        <div className="w-90 md:w-120  flex flex-col justify-center items-center gap-5  ">
          <UserSelect
            id="From"
            data={data}
            settg={from}
            setSettg={setFrom}
            amount={amount}
            setAmount={setAmount}
          />

          <button
            className="w-20 bg-blue-500 text-white p-2 rounded-md  z-50 border-white border-2 cursor-pointer hover:bg-blue-700 transition-colors duration-300 ease-in
                fixed 
             "
            onClick={() => {
              let temp = to;
              setTo(from);
              setFrom(temp);
              setClick((prev) => !prev);
            }}
          >
            Swap
          </button>

          <UserSelect
            id="To"
            data={data}
            settg={to}
            setSettg={setTo}
            amount={result}
            setAmount={setResult}
          />
        </div>
        <button
          className="
        bg-blue-500
        w-full h-12 
        rounded-md
        text-white
        font-bold text-md
        cursor-pointer
        border-1 border-white
        hover:bg-blue-700 trasnsition-colors duration-300 easi-in 
        "
          type="submit"
        >
          Convert {from} to {to}
        </button>
      </form>
    </>
  );
}

export default Card;
