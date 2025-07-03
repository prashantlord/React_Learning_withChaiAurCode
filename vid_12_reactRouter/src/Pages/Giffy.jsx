import React, { useEffect, useState } from "react";

function Giffy() {
  const [fetchData, setFetchData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=OUr59fWLBSz8krYhgJPqSG17q9o6Pv3f&tag=&rating=g"
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        console.log(fetchData);
      });
  }, [fetchData]);

  return (
    <>
      <div className="w-full h-100 flex items-center">
        <h1 className="mx-auto text-5xl font-semibold">
          Getting its own Project...
        </h1>
      </div>
    </>
  );
}

export default Giffy;
