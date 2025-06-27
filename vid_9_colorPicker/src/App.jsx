import { useState } from "react";
import ColorBox from "./Componnets/ColorBox";
function App() {
  const [color, setColor] = useState(
    JSON.parse(localStorage.getItem("localColor"))
  );

  localStorage.setItem("localColor", JSON.stringify(color));
  return (
    <>
      <div
        className={"w-dvw h-dvh flex items-end justify-center" + ` bg-${color}`}
      >
        <ColorBox colorState={setColor} />
      </div>
    </>
  );
}

export default App;
