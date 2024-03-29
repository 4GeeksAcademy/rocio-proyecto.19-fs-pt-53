import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

export const EditContactForm = () => {

	const { id } = useParams();
	const { store, actions } = useContext(Context);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const contact = store.contacts.find(c => c.id == id)
		if (!contact) return
		setName(contact.full_name)
		setEmail(contact.email)
		setAddress(contact.address)
		setPhone(contact.phone)
	}, [store.contacts])


	const updateContact = () => {

		actions.updateContact(
			{
				"full_name": name,
				"email": email,
				"agenda_slug": "rocios_agenda",
				"address": address,
				"phone": phone,
			}, id)

		navigate("/")

	}

	return (

		<div className="p-5">
			<div className="mb-3">
				<label for="formGroupExampleInput" className="form-label">Full Name</label>
				<input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput2" className="form-label">Email</label>
				<input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput3" className="form-label">Phone</label>
				<input value={phone} onChange={e => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput3" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput4" className="form-label">Address</label>
				<input value={address} onChange={e => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput4 " />
			</div>
			<div className="d-grid gap-2">
				<button className="btn btn-primary" type="button" onClick={updateContact}>Update Contact</button>
			</div>
		</div>
	)
}