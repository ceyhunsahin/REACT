import React, { useEffect } from 'react'

export default function UseRefComponent() {

    useEffect(() => {

        document.querySelector('input').focus();
        console.log(document.querySelector('input'))

    },[])


    return (
        <div className='useref'>
            <h1>UseRef Component</h1>
            <input type='text' placeholder='Enter Text' 
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
        </div>
    )
}
