import React from 'react';


const Modal = ({ showModal, setShowModal }) => {
    if (!showModal) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                <form action="/submit-your-form" method="post">
                    <label htmlFor="fname">First Name:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label htmlFor="lname">Last Name:</label><br />
                    <input type="text" id="lname" name="lname" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Modal;