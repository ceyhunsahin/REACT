import React from 'react';
import "./styleSheet.css";


export const StyleSheet = (props) => {
    const isSecenek = props.secenek ? "once" : "sonra"
    return (
        <div className=''>

            <img className = 'logo' src='https://images.unsplash.com/photo-1610564558732-a36a4e28151c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt = ""/>
            <h1 className='header' >Regular style --- STYLESHEET</h1>
            <p className= {isSecenek}>Welcome to Clarusway</p>
        </div>
    )
}
