import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [password, setPassword] = useState("Password");
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let symbl = "!@#$%^&*(){}[]";
    let numbr = "1234567890";
    num ? (str += numbr) : "";
    char ? (str += symbl) : "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    pass.length === 0 ? setPassword("Password Generator") : setPassword(pass);
  }, [length, char, num, setPassword]);
  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);
  return (
    <>
      <div className="w-dvw h-dvh flex bg-black  justify-center">
        <div className=" bg-white shadow-md rounded-xl shadow-black w-fit h-50 mt-20 p-5 flex items-center flex-col">
          <h1 className="font-bold text-3xl text-center ">
            Random Password Generator
          </h1>
          <div className=" flex justify-between rounded-xl w-full mt-5  ">
            <h3
              ref={passwordRef}
              className="bg-gray-500 text-white w-110 h-12 p-3 rounded-l-md cursor-text overflow-auto "
            >
              {password}
            </h3>
            <button
              onClick={copyPassword}
              className="font-bold w-20 rounded-r-md bg-gray-200 cursor-pointer hover:bg-gray-300 transition-colors duration-300 focus:bg-black/25   "
            >
              Copy
            </button>
          </div>
          <div className="flex gap-10 items-center  mt-5 ">
            <div className="flex gap-2">
              <input
                type="range"
                name="length"
                id="length"
                min="0"
                max="50"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <input
                type="number"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="w-13"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="character"
                id="character"
                onChange={() => {
                  setChar((prevChar) => !prevChar);
                }}
              />
              <label htmlFor="character">Characters</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                onChange={() => {
                  setNum((prevNum) => !prevNum);
                }}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
