import { useState, useEffect } from 'react'

function App() {

  const [bgColor, setBgColor] = useState("blue")
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  return (
    <>
      <div className="button-container" style={{textAlign: "center"}}>
          <button
            className="button red"
            id="redBtn"
            onClick={() => setBgColor("red")}
          >
            Red
          </button>

          <button
            className="button green"
            id="greenBtn"
            onClick={() => setBgColor("green")}
          >
            Green
          </button>

          <button
            className="button blue"
            id="blueBtn"
            onClick={() => setBgColor("blue")}
          >
            Blue
          </button>

          <button
            className="button yellow"
            id="yellowBtn"
            onClick={() => setBgColor("yellow")}
          >
            Yellow
          </button>

          <button
            className="button purple"
            id="purpleBtn"
            onClick={() => setBgColor("purple")}
          >
            Purple
          </button>

          <button
            className="button orange"
            id="orangeBtn"
            onClick={() => setBgColor("orange")}
          >
            Orange
          </button>

          <button
            className="button black"
            id="blackBtn"
            onClick={() => setBgColor("black")}
          >
            Black
          </button>

          <button
            className="button white"
            id="whiteBtn"
            onClick={() => setBgColor("white")}
          >
            White
          </button>
       </div>

    </>
  )
}

export default App
