import React, { StrictMode, useEffect } from "react";
import "../../styles/home.css";
import ContactCard from "../component/contactCard.js"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useActionData } from "react-router";


export const Home = () => {
	
	const {store} = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className = "container">
				{store.contactList.map((item)=>{
					return (
						<div className="component" key= {item.id}>
							<ContactCard 
								name= {item.name}
								address= {item.address}
								phone= {item.phone}
								email= {item.email}
								deleteContact={() => deleteContact(item.id)}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
};

export default Home