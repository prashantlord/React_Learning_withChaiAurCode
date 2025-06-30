function ColorBox({ colorState }) {
  const color = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-black", 
    "bg-orange-500",
    "bg-yellow-500",
    "bg-gray-500",
  ];
  return (
    <>
      <div className="bg-white w-fit h-15 flex gap-10 items-center justify-center px-5   rounded-xl mb-10">
        {color.map((item, key) => (
          <button
            key={key}
            className={`w-20 h-10 text-white ${item} px-2 rounded-md cursor-pointer`}
            onClick={() => colorState(item)}
          >
            {item.replace("bg-", "").replace("-500", "")}
          </button>
        ))}
      </div>
    </>
  );
}

export default ColorBox;
