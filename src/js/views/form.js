import React, { useContext, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { Context } from "../store/appContext";
import FormNewContact from "../component/formulario";


const NewContactPage = () => {
    const {actions} = useContext(Context);

    return(
        <div>
            <FormNewContact actions={actions}/>
        </div>

    );
};

export default NewContactPage;


// import React, { useState } from "react";
// import { Link, useActionData } from "react-router-dom";

// const FormNewContact = ({actions}) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');

//     const handleSaveContact = () => {
//         const contactData = {
//             name: name, 
//             email: email, 
//             phone: phone,
//             address: address
//         }
//         actions.saveContact(contactData);
//     };

//     return(
//         <div className="container justify-content-center">
//             <h1>Add a new contact</h1>
//             <div className="input-group mb-3">
//                 <span className="input-group-text" id="basic-addon1">Full name</span>
//                 <input type="text" 
//                     className="form-control"
//                     onChange={(event) => setName(event.target.value)}
//                     value={name} placeholder="Add your full name" aria-label="Username" aria-describedby="basic-addon1"
//                     />
//             </div>     

//             <div className="input-group mb-3">
//                 <span className="input-group-text" id="basic-addon1">Email</span>
//                 <input type="text" 
//                     className="form-control" 
//                     onChange={(event) => setEmail(event.target.value)}
//                     value={email} placeholder="Add your email address" aria-label="Email" aria-describedby="basic-addon1"/>
//             </div>

//             <div className="input-group mb-3">
//                 <span className="input-group-text" id="basic-addon1">Phone</span>
//                 <input type="text" 
//                     className="form-control" 
//                     onChange={(event) => setPhone(event.target.value)}
//                     value={phone} placeholder="Add your phone" aria-label="Phone" aria-describedby="basic-addon1"/>
//             </div>
            
//             <div className="input-group mb-3">
//                 <span className="input-group-text" id="basic-addon1">Address</span>
//                 <input type="text" 
//                     className="form-control" 
//                     onChange={(event) => setAddress(event.target.value)}
//                     value={address} placeholder="Add your address" aria-label="Address" aria-describedby="basic-addon1"/>
//             </div>

//             <div>
//                 <button className="saveContact btn btn-success w-100" 
//                     onClick={handleSaveContact}
//                 >
//                     Save
//                 </button>
//                 <p>
//                     <Link to="/">
//                         <span>or go back to contact</span>
//                     </Link>
//                 </p>
                
//             </div>
//         </div>
//     )
// }

// export default FormNewContact;