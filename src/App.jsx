import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  const arrayLessons = ["one", "two", "three"]

  const showList = () => {
    return arrayLessons.map((item) => {
      return (
        <div key={item}>
          <label>{item}</label>
        </div>
      )
    })
  }

  return (
    <>
      <div>
        Sample Start
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card">
        <button onClick={() => setShow(!show)}>
          Show List
        </button>

        {show && showList()}
      </div>
    </>
  )
}

export default App