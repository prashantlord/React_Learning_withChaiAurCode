import React, { useEffect } from "react";

function UserSelect({ id, data, settg, setSettg, amount = 1, setAmount }) {
  const currencies = Object.values(data);

  useEffect(() => {
    amount === "0" ? setAmount(1) : null;
  }, [amount]);

  return (
    <>
      <div className="w-full grid grid-cols-1 gap-y-7 p-3 bg-white rounded-md">
        <div className="flex justify-between px-3">
          <p className=" text-gray-500">{id}</p>
          <p className=" text-gray-500">Currency Type</p>
        </div>
        <div className="flex justify-between px-3">
          <input
            type="text"
            value={amount}
            min={1}
            onChange={(e) => setAmount(e.target.value)}
            className="focus:outline-none "
          />
          <select
            value={settg}
            onChange={(e) => setSettg(e.target.value)}
            className="cursor-pointer bg-gray-100 p-2 rounded-xl w-20"
          >
            {currencies.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default UserSelect;
