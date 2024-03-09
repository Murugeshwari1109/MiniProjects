import React, { useState } from 'react'
import Toggle from "./components/Toggle";
import Resultbox from "./components/Resultbox";

const App = () => {
    const [color,setColor]=useState('');
    const [hexValue,setHexValue]=useState('');
    const [isDark,setIsDark]=useState('true');
  return (
    <div className='App'>
        <Resultbox 
            color={color}
            hexValue={hexValue}
            isDark={isDark}
        
        />
        <Toggle 
            color={color}
            setColor={setColor}
            hexValue={hexValue}
            setHexValue={setHexValue}
            isDark={isDark}
            setIsDark={setIsDark}
        />
    </div>
  )
}

export default App