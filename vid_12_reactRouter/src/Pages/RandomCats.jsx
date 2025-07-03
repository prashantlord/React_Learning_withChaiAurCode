import React, { useEffect, useState } from "react";

function RandomCats() {
  // https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=beng&api_key=live_7PdVF2Mu55Cqfmz3PijtO7o9efnaGNzqKXTTLQS5y268TiaNmZdOm5dSD3krH4cf%27
  const [imgURL, setImgUrl] = useState([]);
  const [lmt, setLmt] = useState(10);

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${lmt}&breed_ids=beng&api_key=live_cwd0wmDbyK59GQa7dHqkMpwFCYodd2E2Bx4P2oCMjMXMMK32zFYQQPVNqtLZrwrx`
    )
      .then((res) => res.json())
      .then((data) => setImgUrl(data));
  }, [lmt, setLmt]);

  return (
    <>
      <div className="m-10   gap-5 parent">
        {imgURL.map((item, key) => (
          <img
            src={item.url}
            key={key}
            className="rounded-xl child w-full mx-2 my-5"
          />
        ))}
      </div>
      <div className="w-full flex items-center gap-5 justify-center my-20  ">
        <button
          onClick={() => {
            setLmt((prev) => prev + 5);
            console.log(lmt);
          }}
          className=" border-2 rounded-full p-2 border-red-800 px-10 hover:bg-red-800 hover:text-white transition-colors duration-200 ease-in cursor-pointer"
        >
          Reset +5
        </button>
      </div>
    </>
  );
}

export default RandomCats;
