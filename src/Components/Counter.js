import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0)
    const [display, setDisplay] = useState(0)

    function handleChange(e) {
        // let length = e.target.value.length

        setCount(e.target.value.length)
    }

    function handleClick() {
        setDisplay(display + count)
    }

    return (
        <div>
            <input onChange={handleChange} type='text'></input>
            <button onClick={handleClick}>Click Me</button>
            <p>{display}</p>
        </div>
    )
}

export default Counter