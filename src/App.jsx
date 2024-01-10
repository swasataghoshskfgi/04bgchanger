import { useState } from "react"



function App() {

  const [color, setColor] = useState("olive");





  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center insert-x-0 px-2 py-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("red")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          > Red</button>
          <button
          onClick={()=>{setColor("green")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          > Green</button>
          <button
          onClick={()=>{setColor("blue")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          > Blue</button>
          <button
          onClick={()=>{setColor("black")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          > Black</button>
          <button
          onClick={()=>{setColor("aqua")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "aqua" }}
          > Aqua</button>
          <button
          onClick={()=>{setColor("purple")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          > Purple</button>
          <button
          onClick={()=>{setColor("#ff00ff")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#ff00ff" }}
          > Pink</button>


        </div>
      </div>
    </div>
  )
}

export default App
