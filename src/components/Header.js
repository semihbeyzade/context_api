import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div>Active Theme: {theme}
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button></div>
  )
}

export default Header