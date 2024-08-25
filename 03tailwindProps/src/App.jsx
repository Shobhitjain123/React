import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compenents/card'

function App() {
  return (
    <>
      <h1 className='bg-green-500 text-amber-950 p-4 rounded-2xl mb-4'>Tailwind Test</h1>

      <Card  username= "Shobhit" btnText = "Click Me"/>
      <Card  username= "Rohit" btnText = ""/>
      <Card  username= "Raman" btnText = "Vist Me"/>
      <Card  username= "Kartik"/>

    </>
  )
}

export default App
