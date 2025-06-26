import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const addFn = () => {
    setCount(count + 1);
  };
  const reduceFn = () => {
    if (count <= 0) {
      console.log(count);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1 className="font-bold m-5 text-3xl "> Count No: {count}</h1>

      <button className="button" onClick={addFn}>
        Add Counter by 1
      </button>
      <button className="button" onClick={reduceFn}>
        Reduce Counter by 1
      </button>
    </>
  );
}
export default App;
