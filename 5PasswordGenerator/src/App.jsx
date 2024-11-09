import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)


  const passwordGeneratoor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "1234567890";
    if (isCharAllowed) str += "!@#$%^&*()_+-={}[]|:;<>,.?/~";

    for (let index = 1; index < length; index++) {
      let charIdx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIdx);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);


  const copyPasswordToClipbpoard = useCallback(()=>{
    passwordRef.current?.select()

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => passwordGeneratoor(), [isCharAllowed, isNumberAllowed, length, passwordGeneratoor])


  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg px-4 py-2 mx-4 my-4 text-orange-600 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button onClick={copyPasswordToClipbpoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              id="numberInput"
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="charInput"
              onChange={() => setIsCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Charactors</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
