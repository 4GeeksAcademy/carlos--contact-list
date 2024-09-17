import React from "react";
import { Link } from "react-router-dom";

const FormNewContact = () => {
    return(
        <div className="container justify-content-center">
            <h1>Add a new contact</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Full name</span>
                <input type="text" className="form-control" placeholder="Add your full name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" className="form-control" placeholder="Add your email address" aria-label="Email" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="text" className="form-control" placeholder="Add your phone" aria-label="Phone" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" className="form-control" placeholder="Add your address" aria-label="Address" aria-describedby="basic-addon1"/>
            </div>

            <div>
                <button className="saveContact btn btn-success">
                    Save
                </button>
                <p>
                    <Link to="/">
                        <spam>or go back to contact</spam>
                    </Link>
                </p>
                
            </div>
        </div>
    )
}

export default FormNewContact;