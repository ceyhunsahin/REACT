import React from 'react'
import {Button} from './CounterCss.jsx'
import  {decrement, increment, reset }  from '../redux/Reducer.jsx'

import { useSelector, useDispatch } from 'react-redux'


export default function Counter() {

    const count = useSelector((state) => state.counters.value)

    const dispatch = useDispatch()
    // reducer'dan gelenleri ayikliyoruz. her biri bir fonk olarak yazilir

    return (
        < >
            <h3>Counter with Redux</h3>
            <h4>Counter : {count}</h4>
            <div >
                <Button renk = "true"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                   >Increase</Button>
                <Button renkres  = "true"
                onClick={() => dispatch(reset())}
                 >Reset</Button>
                <Button 
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >Decrease</Button>
            </div>
        </>
    )
}
