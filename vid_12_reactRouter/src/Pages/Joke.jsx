import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function Joke() {
  const [fetchData, setFetchData] = useState("Any");
  const [depenFetch, setDepenFetch] = useState(true);
  const [type, setType] = useState("Programming");
  useEffect(() => {
    console.log(type);
    try {
      fetch(`https://v2.jokeapi.dev/joke/${type}?type=single`)
        .then((res) => res.json())
        .then((data) => setFetchData(data));
    } catch (error) {
      console.error("Error while fetching data from API" + error);
    }
  }, [depenFetch]);

  return (
    <>
      <div className="w-full h-150 flex items-center justify-center flex-col gap-10">
        <h1 className="font-semibold text-xl md:text-2xl text-center mx-5 w-auto">
          {fetchData.joke}
        </h1>
        <button
          onClick={() => setDepenFetch((prev) => !prev)}
          className="border-2 border-red-800 p-2 rounded-full hover:bg-red-800 hover:text-white transition-colors duration-200 ease-in cursor-pointer "
        >
          Another One
        </button>
        <div className="flex gap-5 mx-auto w-fit px-2 justify-center w-full ">
          <div className="flex flex-wrap gap-1 justify-center">
            <input
              type="radio"
              name="Category"
              id="Any"
              onBlur={() => {
                setType("Any");
                setDepenFetch((prev) => !prev);
              }}
            />
            <label htmlFor="Any"> Any</label>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            <input
              type="radio"
              name="Category"
              id="Programming"
              onBlur={() => {
                setType("Dark");
                setDepenFetch((prev) => !prev);
              }}
            />
            <label htmlFor="Programming"> Programming</label>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            <input
              type="radio"
              name="Category"
              id="Dark"
              onBlur={() => {
                setType("Dark");
                setDepenFetch((prev) => !prev);
              }}
            />
            <label htmlFor="Dark"> Dark</label>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            <input
              type="radio"
              name="Category"
              id="Pun"
              onBlur={() => {
                setType("Pun");
                setDepenFetch((prev) => !prev);
              }}
            />
            <label htmlFor="Pun"> Pun</label>
          </div>

          <div className="flex flex-wrap gap-1 justify-center">
            <input
              type="radio"
              name="Category"
              id="Miscellaneous"
              onBlur={() => {
                setType("Miscellaneous");
                setDepenFetch((prev) => !prev);
              }}
            />
            <label htmlFor="Miscellaneous"> Miscellaneous</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joke;
