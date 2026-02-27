import React, { useState }  from 'react'
import  './BottomSamples.css'
export default function BottomSamples() {
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
        <div className="flex-container">
            <div className="container1" >
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <div className="container2">
                <button onClick={() => setShow(!show)}>
                    Show List
                </button>
                {show && showList()}
            </div>
        </div>
    )
}
