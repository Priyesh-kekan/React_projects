import { useState } from "react"

function App() {
  const handleRedirect = () => {
    window.location.href = 'https://music.youtube.com/'; // Replace with your target URL
  };

  const [color, setColor] = useState("red")
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 w-full">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2">
          <button
            onClick={handleRedirect}
            className="w-6 h-6 rounded-full bg-red-600"
          ></button>
          <button
            onClick={() => setColor("green")}
            className="w-6 h-6 rounded-full bg-green-600"
          ></button>
          <button
            onClick={() => setColor("blue")}
            className="w-6 h-6 rounded-full bg-blue-600"
          ></button>
          <button
            onClick={() => setColor("yellow")}
            className="w-6 h-6 rounded-full bg-yellow-600"
          ></button>
          <button
            onClick={() => setColor("purple")}
            className="w-6 h-6 rounded-full bg-purple-600"
          ></button>  

        </div>
      </div>
    </div>
  )
}

export default App
