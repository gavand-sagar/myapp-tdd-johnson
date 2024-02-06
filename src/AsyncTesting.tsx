import React, { useState } from 'react'

export default function AsyncTesting() {

    const [value, setValue] = useState('')

    function handleClick() {
        setTimeout(()=>{
            setValue("Apple")
        },15000)
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <div>{value}</div>
        </div>
    )
}
