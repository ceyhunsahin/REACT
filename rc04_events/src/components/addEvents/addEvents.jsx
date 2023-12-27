import React from "react";

export const AddEvents = () => {
    // Componentin icinde bu kullanıcıya göndermek için
    const shoot = (e, name) => {
        alert( `Great Shoot ${name}`)
    }
    return (
        <div>
         {/* <button onClick = {(e) => shoot(e, 'Kamil')}>Take the shoot</button> */}
            <button onClick = {shoot}>Take the shoot</button>
        </div>
    )
}

