import React, {memo} from 'react'
import cw from '../assets/cw_logo.png'

//! 1.Kullanim
/* const Header = React.memo(({img}) => {

    console.log("HEader rendred")

    return (
        <div style = {{display : "flex", flexDirection:"column",  alignItems:"center"}}>
            
            <img src = {img ? img : cw} alt='cw_logo' style = {{margin: '1rem', maxHeight:'200px'}}/>
        </div>
    )
}) */

//! 2.Kullanim
/* const Header = memo(({img}) => {

    console.log("HEader rendred")

    return (
        <div style = {{display : "flex", flexDirection:"column",  alignItems:"center"}}>
            
            <img src = {img ? img : cw} alt='cw_logo' style = {{margin: '1rem', maxHeight:'200px'}}/>
        </div>
    )
}) */

//! 3.Kullanim

const Header = ({img}) => {

    console.log("HEader rendred")

    return (
        <div style = {{display : "flex", flexDirection:"column",  alignItems:"center"}}>
            
            <img src = {img ? img : cw} alt='cw_logo' style = {{margin: '1rem', maxHeight:'200px'}}/>
        </div>
    )
}



export default memo(Header)