function ColorBox({ colorState }) {
  const color = [
    "red-500",
    "green-500",
    "blue-500",
    "black",
    "orange-500",
    "yellow-500",
    "gray-500",
  ];
  return (
    <>
      <div className="bg-white w-fit h-15 flex gap-10 items-center justify-center px-5   rounded-xl mb-10">
        {color.map((item, key) => (
          <button
            key={key}
            className={`w-20 h-10 text-white bg-${item} px-2 rounded-md cursor-pointer  `}
            onClick={() => colorState(item)}
          >
            {item.split("-")[0]}
          </button>
        ))}
      </div>
    </>
  );
}

export default ColorBox;
