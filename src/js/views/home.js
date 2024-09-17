import React, { StrictMode } from "react";
import "../../styles/home.css";
import ContactCard from "../component/contactCard.js"
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Home = () => {
	
	const {store} = useContext(Context);
	return (
		<div className="text-center mt-5">
			<div className = "container">
				{store.contactList.map((item,index)=>{
					return (
						<div> 
							<ContactCard 
								key= {item.id}
								name= {item.name}
								address= {item.address}
								phone= {item.phone}
								email= {item.email}
							/>

							<ContactCard 
								key= {item.id}
								name= {item.name}
								address= {item.address}
								phone= {item.phone}
								email= {item.email}
							/>

							<ContactCard 
								key= {item.id}
								name= {item.name}
								address= {item.address}
								phone= {item.phone}
								email= {item.email}
							/>

							<ContactCard 
								key= {item.id}
								name= {item.name}
								address= {item.address}
								phone= {item.phone}
								email= {item.email}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
};

export default Home