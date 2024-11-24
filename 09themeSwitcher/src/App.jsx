
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeBtn from "./componenets/Themebtn";
import Card from "./componenets/CardUi";
import { useState, useEffect } from "react";

function App() {

  const [theme, setTheme] = useState('light')

  const darktheme = ()=>{
    setTheme('dark')
  }

  const lighttheme = ()=>{
    setTheme('light')
  }

  useEffect(() => {
    const doc = document.querySelector('html')
    doc.classList.remove('light', 'dark')
    doc.classList.add(theme)
  }, [theme])
  
  return (
    <ThemeProvider value={{themeMode: "light", lighttheme, darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
   </ThemeProvider>
  );
}

export default App;
