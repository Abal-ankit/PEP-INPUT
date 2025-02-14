import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();
function UseContextExample() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        console.log("hello");
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }

  return (
    <div>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar() {
    return <ThemeButton />

}

function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h2>Use Context  Example</h2>
            <button style={{backgroundColor : theme === 'light' ? 'white' : 'black', color : theme === 'light' ? 'black' : 'white'}} onClick={toggleTheme}>Switch to Dark Mode</button>
        </div>
    )
}

export default UseContextExample;
