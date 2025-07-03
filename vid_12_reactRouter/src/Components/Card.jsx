import React from "react";
import { Link } from "react-router-dom";

function Card({
  name = "Default",
  desc = "Default",
  renderPage = "Default",

  demoURL,
}) {
  return (
    <>
      <div className="border-1 p-5 rounded-xl w-70 flex flex-col justify-between h-40">
        <Link
          to={renderPage}
          className=" hover:text-red-800 transition-colors duration-300 "
        >
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="text-gray-600 "> {desc}</p>
        </Link>
        <a
          href={demoURL}
          target="_black"
          className="text-center border-1 flex justify-center font-semibold mt-3 rounded-md  hover:bg-red-950 hover:text-white transition-colors duration-200 ease-in cursor-pointer "
        >
          API Link
        </a>
      </div>
    </>
  );
}

export default Card;
