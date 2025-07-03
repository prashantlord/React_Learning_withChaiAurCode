import React, { useEffect, useState } from "react";

function GenderGuessr() {
  const [name, setName] = useState("Prashant");
  const [gender, setGender] = useState("");
  const [APIcall, setAPIcall] = useState(true);
  useEffect(() => {
    fetch(`https://api.genderize.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => setGender(data.gender.toUpperCase()));
  }, [APIcall, setAPIcall]);

  document.addEventListener("keypress", (event) => {
    event.key === "Enter" ? setAPIcall((prev) => !prev) : null;
  });

  return (
    <>
      <h1 className="mx-10 my-5 font-semibold text-3xl ">Gender Guessr</h1>
      <div className="w-full h-120 flex flex-col justify-center gap-20   ">
        <h1 className="mx-auto font-bold text-3xl">
          {gender || "Cannot Determine"}
        </h1>
        <div className="mx-auto flex flex-col gap-2 items-center ">
          <label htmlFor="Name">Ender your Name</label>
          <input
            type="text"
            placeholder="Prashant"
            className="border-2 border-red-800 rounded-md focus:shadow-sm shadow-red-500 transition-shadow duration-300 ease-in p-2 focus:outline-none  "
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={() => {
              setAPIcall((prev) => !prev);
              setGender("Loading...");
            }}
            className="border-2 border-red-800 w-20 rounded-full p-2 cursor-pointer font-semibold hover:bg-red-950 hover:text-white transition-colors duration-200 ease-in  "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default GenderGuessr;
