import React from 'react'
import styles from '../ModuleCss/ModuleBtn.module.css'


export const ModuleBtn = ({btnStyle , btnName, btnHandler }) => {
    return (
        <div className={styles.main}>
        <button className={styles[btnStyle]} name = "ceyhun" onClick = { btnHandler }>{btnName}</button>  
        </div>
    )
}

