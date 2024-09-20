import React from "react";
import "../../styles/contactCard.css";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faLocationPin, faMailBulk, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { Context } from "../store/appContext";



const ContactCard = ({ id, name, email, phone, address  }) => {
    
    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    return (
        <div className = "container border border-dark-subtle d-flex gap-3 justify-content-between p-3 col-12">
            <div className= "imageContact col-4">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mcdA_uoJahxn3PQ-IC9WROV-GF2wuTl2FQ&s" 
                    alt="contact_image.jpg"/>
            </div>
            <div className= "infoContact">
                <strong className="nameContact ">{name}</strong>
                <p className="addressContact"><FontAwesomeIcon icon={faLocationPin} className="mx-2 justify-content-start"/>{address}</p>
                <p className="phoneContact"><FontAwesomeIcon icon={faPhone} className="mx-2 justify-content-start"></FontAwesomeIcon>{phone}</p>
                <p className="emailContact"> <FontAwesomeIcon icon={faMailBulk} className="mx-2 justify-content-start"></FontAwesomeIcon>{email}</p>
            </div>
            <div className="edit d-flex flex justify-content-end col-3" >
                <FontAwesomeIcon icon={faEdit} className="editIcon mx-4" 
                    onClick={() => navigate("/edit-contact")}/>
                <FontAwesomeIcon icon={faTrash} className="deleteIcon mx-4" 
                    onClick={() => actions.deleteContact(id)} /> 
            </div>
        </div>
    )
}

export default ContactCard;