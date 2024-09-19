import { container } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
	
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: async() => {
				const response = await fetch ("https://playground.4geeks.com/contact/agendas/agendasCarlos",{
					method: "GET"
				})
				const data = await response.json();
				setStore({contactList: data.contacts})
			},

			saveContact: async(contactData) =>{
				// Validando campos antes de enviarlos
				if (!contactData.name || !contactData.email || !contactData.phone || !contactData.address) {
					console.error("All fields are required.");
					return;
				}
				const response = await fetch ("https://playground.4geeks.com/contact/agendas/agendasCarlos/contacts", {
					method: "POST",
					body: JSON.stringify(contactData),
					headers: {
						"Content-Type": "application/json"
					}
				})
				getActions().loadContacts();
			},

			deleteContact: async(id) =>{
				const response = await fetch ("https://playground.4geeks.com/contact/agendas/agendasCarlos/" + id, {
					method: "DELETE",
				})
				const data = await response.json();
				setStore({contactList: data.contacts})
				console.log("Usuario borrado")
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
