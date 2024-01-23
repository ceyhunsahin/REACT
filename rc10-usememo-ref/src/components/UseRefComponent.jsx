import React, { useEffect } from 'react'




export default function UseRefComponent() {
    const inputRef = React.useRef(null) // temel amaci DOM'a ulasmak
    //console.log(inputRef.current)

    const divRef = React.useRef(null) // temel amaci DOM'a ulasmak

    const [value, setValue] = React.useState(0)

    const valueRef = React.useRef(0) // ayni sekilde obje'de olusturabiliriz
    console.log("valueRef", valueRef)
    
    

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))};
    useEffect(() => {

        //document.querySelector('input').focus();
        inputRef.current.focus();
    
        
      
        
        //inputRef.current.parentNode.style.backgroundColor = 'red'
       

    }, []) 
   

    const ChangeBGColor = async () => {
       // await sleep(1000)
        const randomColor = () => Math.trunc(Math.random() * 256)
        const backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
        
        divRef.current.style.backgroundColor = backgroundColor

       // console.log("inputRef.current.value",inputRef.current.value)
    }

    const Increase =()  => {
        //setValue(value + 1)
        valueRef.current = valueRef.current + 1
        setValue(valueRef.current)
    }





    return (
        <div className='useref' ref = {divRef} >
            <h1>UseRef Component</h1>
            <input ref = {inputRef} type='text' placeholder='Enter Text' 
                style = {{
                        height: "1rem",
                        width: "20vw",
                        border: "1px solid black",
                        borderRadius: "5px",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        }}
                   
               
                
                    />
            <button onClick = {ChangeBGColor}>ChangeBGColor</button>
            <button onClick = {Increase}>Increase</button>
        </div>
    )
}
