import { useRef, useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*-_+=[]{}~`'

    for (let index = 1; index <= length; index++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)

      pass += str[charIndex]
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // Below useEffect generates new password everytime any of the optional dependency value changes
  // useEffect(() => {
  //   passwordGenerator()
  // }, [length, numberAllowed, charAllowed])

  // Below useEffect generates new password only on the first render
    useEffect(() => {
    passwordGenerator()
  }, [])

  const copyToClipBoard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={passwordGenerator}>Generate</button>
          <input type="text" placeholder='Password' className='outline-none w-full py-1 px-3' value={password} ref={passRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => setNumberAllowed(prev => !prev)}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => setCharAllowed(prev => !prev)}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
