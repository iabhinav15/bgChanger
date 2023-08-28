import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("red")

  return (
    <div className="main w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='myname'>hello, I am {color}</div>
      <div className='colorchange fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2 '>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor("green")}>Green</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor("blue")}>Blue</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor("red")}>Red</button>
        <button className="bg-slate-800  hover:bg-black text-white font-bold py-2 px-4 rounded" onClick={() => setColor("black")}>Black</button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded" onClick={() => setColor("orange")}>Orange</button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded" onClick={() => setColor("yellow")}>yellow</button>
      </div>
    </div>  
  )
}

export default App
