import React, { useState } from 'react'

export default function Calculator() {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const [result, setResult] = useState('');


    function addition() {
        if(input1 == '' || input2 == ''){
            setResult("Enter a value");
            return;
        }
        setResult((Number(input1) + Number(input2)).toString())
    }

    return (
        <div>
            <input data-testid='txt-input1' value={input1} onChange={e => setInput1(e.target.value)} />
            <br />
            <input data-testid='txt-input2' value={input2} onChange={e => setInput2(e.target.value)}/>
            <br />
            <button data-testid='btn-calculate' onClick={() => addition()}>Calculate</button>
            <br />
            <label data-testid='lbl-output'>{result}</label>
        </div>
    )
}
