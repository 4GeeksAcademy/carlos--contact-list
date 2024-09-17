import React from "react";
import "../../styles/contactCard.css"


const ContactCard = ({ images, name, address, phone, email }) => {
    return (
        <div className = "container border-2 d-flex gap-3 justify-content-between">
            <div className= "imageContact">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mcdA_uoJahxn3PQ-IC9WROV-GF2wuTl2FQ&s" alt="contact_image.jpg" />
            </div>
            <div className= "infoContact">
                <p className="nameContact">{name} </p>
                <p className="addressContact">{address} </p>  
                <p className="phoneContact">{phone}</p>
                <p className="emailContact">{email}</p>
            </div>
            <div className="edit">
                <spam className= "editContact">Editar</spam>
                <spam className= "deleteContact">Borrar</spam> 
            </div>
            
        </div>
    )
}

export default ContactCard;