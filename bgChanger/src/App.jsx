import { useState } from "react"

function App() {
  const [color, setColor] = useState('Olive')
  return (
    <div className="w-full h-screen duration-1000 justify-center" style= {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-4 px-2">
          <div className=" flex flex-wrap gap-3 justify-center shadow-2xl bg-white px-3 py-2 rounded-3xl">
            <button onClick= {() => {setColor('Red')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Red'}}>Red</button>
            <button onClick= {() => {setColor('Green')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Green'}}>Green</button>
            <button onClick= {() => {setColor('Magenta')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Magenta'}}>Magenta</button>
            <button onClick= {() => {setColor('Blue')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Blue'}}>Blue</button>
            <button onClick= {() => {setColor('Black')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Black'}}>Black</button>
            <button onClick= {() => {setColor('Orange')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Orange'}}>Orange</button>
            <button onClick= {() => {setColor('Purple')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Purple'}}>Purple</button>
            <button onClick= {() => {setColor('Brown')}}className= "outline-none px-2 py-1 rounded-full shadow-2xl text-white font-bold" style={{backgroundColor: 'Brown'}}>Brown</button>
          </div>
      </div>
    </div>
  )
}

export default App
