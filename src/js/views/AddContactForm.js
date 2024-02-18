import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddContactForm = () => {
	const { actions } = useContext(Context);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const navigate = useNavigate();

	const createContact = () => {

		actions.addContact(
			{
				"full_name": name,
				"email": email,
				"agenda_slug": "rocios_agenda",
				"address": address,
				"phone": phone,
			});

		navigate("/")
	}
	return (

		<div className="p-5">
			<div className="mb-3">
				<label for="formGroupExampleInput" className="form-label">Full Name</label>
				<input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput2" className="form-label">Email</label>
				<input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput3" className="form-label">Phone</label>
				<input value={phone} onChange={e => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter Phone" />
			</div>
			<div className="mb-3">
				<label for="formGroupExampleInput4" className="form-label">Address</label>
				<input value={address} onChange={e => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput4 " placeholder="Enter Adress" />
			</div>
			<div className="d-grid gap-2">
				<button className="btn btn-primary" type="button" onClick={createContact}>Add Contact</button>
			</div>
			<div>
				<Link to="/">My Contact List</Link>
			</div>
		</div>
	)
} 