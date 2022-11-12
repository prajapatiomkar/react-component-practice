import React, { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import "./App.css"
export default function App() {
  const [theme, setTheme] = useState(false)
  function toggle() {
    setTheme(prevState => !prevState)
  }
  const styles = {
    backgroundColor : theme ? "#1B1B1B" : "white",
    color : theme ? "white" : "#1B1B1B",
    transition:"background 0.5s"
  }
  return (
    <div className='app' style={styles}>
      <ThemeToggle
        theme={theme}
        toggle={toggle}
      />
    </div>
  )
}
