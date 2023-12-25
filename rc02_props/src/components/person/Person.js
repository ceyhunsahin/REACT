import Message from '../msg/msg';
import './style.css';
import ButtonCard from './button';
import SecondButtonCard from './button2';
import Modal from '../modal/modal';
import React, { useState } from 'react';


const handleButtonClick = () => {
    console.log('Butona App bileşeninden basıldı!');

    return(
        alert("oha oldu")
    )

    // Burada istediğiniz işlemi yapabilirsiniz.
};

const handleSecondClick =() => {
    return (
        alert('oldu yine')


    )
}



const Person = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prev => !prev);
    };


    return (
        <div className="card">
            
            <div className="card-image"></div>
            <Message name = {props.name} surname = {props.surname}/>
                <div className="card-content">
                    <img src = {props.img} alt = "resim" style ={{"width": "300px", "height": "200px"}}/>
                </div>
                <div>
                
                    <p> {props.tel ? props.tel : "tel yok"}</p>
                    <p> {`${props.name }.${ props?.surname  ?? "belirtilmemis"}@clarusway.com`}</p>
                </div>
            <ButtonCard ButtonClick={handleButtonClick} />
            <SecondButtonCard secondButton = {handleSecondClick}/> 
            <button onClick={toggleModal}>
                {showModal ? 'Close Modal' : 'Open Modal'}
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        
        </div>
    )
}

export default Person;