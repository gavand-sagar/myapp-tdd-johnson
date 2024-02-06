import React, { useState } from 'react'
import { login } from './login.service'
import { useNavigate } from 'react-router-dom';

type Props = {}

export default function Login({ }: Props) {

    const [label, setLabel] = useState('');

    const navigate = useNavigate()

    function handleClick() {
        login().then(x => {
            if(x.result){
                navigate('/dashboard')
            }else{
                setLabel("FAILED")
            }
        })
    }

    return (
        <div>
            <input data-testid="txt-input1" />
            <input data-testid="txt-input2" />
            <button onClick={handleClick}>LOGIN</button>
            <span>{label}</span>
        </div>
    )
}