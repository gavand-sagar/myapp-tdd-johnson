import React, { useState } from 'react'

type propType = {
    max?: number
}

export default function Counter({ max = 5 }: propType) {

    let [value, setValue] = useState(0);

    function inc() {
        if (value < (max)) {
            setValue(value + 1)
        }
    }

    return (
        <div>
            <label data-testid="lbl-value">{value}</label>
            <button onClick={() => inc()} data-testid="btn-inc">+</button>
        </div>
    )
}
