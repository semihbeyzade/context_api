import React from 'react'
import Button from './Button'
import Header from './Header'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme}`} >
    
     <Header />
       <br></br>
     <Button />
    
    </div>
  )
}

export default Container