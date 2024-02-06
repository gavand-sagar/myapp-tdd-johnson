import React, { useState } from 'react'
import { GetAsyncDataAfter15Seconds, getCatFact } from './AsyncCall'

export default function AsyncTesting() {

    const [value, setValue] = useState('')

    function handleClick() {
        getCatFact()
        .then((x)=>{
            setValue(x.fact);
        })
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <div>{value}</div>
        </div>
    )
}
