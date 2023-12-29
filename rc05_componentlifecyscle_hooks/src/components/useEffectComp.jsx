import React from 'react'
import { useEffect, useState } from 'react'

function UseEffectComp() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(15)

    const increment = (() => setCount(count => count+1))

    useEffect(() => {
        console.log("useEffect componentDidMount  mounted")
        count !== 0 && alert(`new notification, total : ${count}`)

        let timer  = setTimeout(() => {
            alert ('hello world')
        }, 3000)

        //! clean up function
        return () => {
            console.log("useEffect componentWillUnmount  mounted")
            clearTimeout(timer)
        }
    },[count]) //*bagil degisken her degisitinde useEffect calisir

    console.log("Func Component Rendered")






    return (
        <div>
            <h3>useEffectComp</h3>
            <h3>Count : {count}</h3>
            <button onClick={increment}>Increment</button>
            <h3>Age : {age}</h3>
            <button onClick={() => setAge(age + 1)}>Age Increment</button>
        </div>
    )
}

export default UseEffectComp
