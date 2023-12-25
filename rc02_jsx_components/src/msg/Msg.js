
//import styled from "styled-components";
/* import { TwicImg } from '@twicpics/components/react';
import '@twicpics/components/style.css' */
import './Msg.css'

const msgStyle = {
    fontFamily:'Tahoma',
    
}

/* const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`; */


const Message  = ({name}) => {
    return  (<div style = {{"backgroundColor" : "cyan", "width" : "32vh" }}>
                <h1 style = {msgStyle}>
                    My name is {name}
                </h1>
                <img className='msg-img'
                    src="https://cdn.pixabay.com/photo/2023/12/08/09/13/vine-8437282_1280.jpg"
                    alt="Avocado"
                />
                <p>ceyhun</p>
                
                {/* <Title>My name is {name}</Title> */}
            </div>)

};

export default Message;

//! In JSX, styling canbe performed in various ways :
//* Inline styling 
    //! ex: style = {{"backgroundColor" : "cyan", "width" : "32vh" }}
//* defined as a local/global ex
    //! ex: <h1 style = {msgStyle} 
//* external stylesheet
    //! ex : bu direkt css dosyasinin iceriye div olarak className olarak gecirilmesi