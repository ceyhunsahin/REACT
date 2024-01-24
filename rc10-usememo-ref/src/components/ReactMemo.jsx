import React from 'react'
import Header from "../components/Header"
import "../index.css"
import fs from "../assets/fs.png"
import aws from "../assets/aws.png"
export default function ReactMemo() {

    const [count, setCount] = React.useState(0)

    console.log(count)

    const [img, setImg] = React.useState(null)

    console.log(img)

    const increment = () => {
        setCount(count + 1)
    }
    
    return (
        <div className='header'>
            <Header img = {img} />
            <p>Count : {count}</p>
            <button onClick = {increment}>Increase</button>
            <button onClick = {() => setImg(fs)}>FS</button>
            <button onClick = {() => setImg(aws)}>AWS</button>
        </div>
    )
}
