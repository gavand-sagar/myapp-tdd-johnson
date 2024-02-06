import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { increment } from './CounterSlice'

type Props = {}

export default function ReduxComponent({ }: Props) {
    const value = useSelector((s: RootState) => s.counter.value)

    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(increment())
    }

    return (
        <div>{
            value
        }
        <button onClick={handleClick}>+</button>
        </div>
    )
}