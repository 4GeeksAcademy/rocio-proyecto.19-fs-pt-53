import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import UserImage from "./RandomImage";

export const Contacts = () => {

	const navigate = useNavigate();

	const { store, actions } = useContext(Context);

	const { deleteContact } = actions;

	return (
		<div className="text-center mt-5 row">
			<h1>
				Contacts:
			</h1>
			<div className="mb-1">
				<button type="button" className="btn btn-success"
					onClick={() => { navigate("/add-contact") }}>
					Add New Contact
				</button>
			</div>

			<div>
				<ul>
					{
						store.contacts.map((element) => {
							return (

								<li key={element.id} className="list-group-item d-flex justify-content-between align-items-start">
									<UserImage />
									<div className="col-6">
										<div className="fw-bold"> {element.full_name}</div>
										<div><i className="fa-solid fa-envelope"></i> {element.email}</div>
										<div><i className="fa-solid fa-location-dot"></i> {element.address}</div>
										<div><i className="fa-solid fa-phone-flip"></i> {element.phone}</div>
									</div>
									<div className="col-2 ml-1">
										<button type="button" className="btn btn-outline-dark border-0"
											onClick={() => { navigate(`/editContactForm/${element.id}`) }}>
											<i className="fa-solid fa-pencil"></i>
										</button>
										<button type="button" className="btn btn-outline-dark border-0"
											onClick={() => deleteContact(element.id)}>
											<i className="fa-solid fa-trash-can"></i>
										</button>
									</div>

								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
};