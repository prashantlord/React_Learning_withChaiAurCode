import React from "react";
import Card from "../Components/Card";
// URL https://api.genderize.io/?name=prashant

function Home() {
  const APItools = [
    {
      name: "Gender Guessr",
      desc: "Give your name and I will Guess your Gender",
      renderPage: "genderguessr",
      demoURL: "https://api.genderize.io/?name=prashant",
    },

    {
      name: "Random Cat Image",
      desc: "Get a random image of cats ",
      renderPage: "randomcat",

      demoURL: "https://api.thecatapi.com/v1/images/search?limit=1",
    },
    // {
    //   name: "Giffy",
    //   desc: "Random Giffs to see for all",
    //   renderPage: "giffy",
    //   demoURL: "https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}",
    // },
    {
      name: "Jokes",
      desc: "Get some actually funny jokes",
      renderPage: "jokes",
      demoURL: "https://v2.jokeapi.dev/joke/Any?type=single",
    },
  ];

  return (
    <>
      <main className="flex flex-wrap justify-center gap-5 my-10  px-10">
        {APItools.map((item, key) => (
          <Card
            key={key}
            name={item.name}
            desc={item.desc}
            renderPage={item.renderPage}
            url={item.url}
            demoURL={item.demoURL}
          />
        ))}
      </main>
    </>
  );
}

export default Home;
