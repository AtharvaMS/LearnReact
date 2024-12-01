import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-white bg-gray-500 text-4xl">Hello world!</h1>
      {console.log(import.meta.env.VITE_APPWRITE_URL)}
      {console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)}
      {console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID)}
      {console.log(import.meta.env.VITE_APPWRITE_COLLECTION_ID)}
      {console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID)}
      {console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID)}
    </>
  );
}

export default App;
