import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonalDetails } from "../features/UpdateData/UpdateData";

function UpdatePersonal() {
  const selector = useSelector((state) => state.updateResume.updateResume);
  const previousName = selector.data[0].name;
  const previousEmail = selector.data[0].email;
  const previousAddress = selector.data[0].address;
  const previousNumber = selector.data[0].number;
  const previousWebsite = selector.data[0].website;
  const previousDesignation = selector.data[0].designation;


  const [name, setName] = useState(previousName);
  const [email, setEmail] = useState(previousEmail);
  const [address, setAddress] = useState(previousAddress);
  const [number, setNumber] = useState(previousNumber);
  const [website, setWebsite] = useState(previousWebsite);
  const [designation, setDeignation] = useState(previousDesignation);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    const personalDetails = {
      name:name,
      email:email,
      address:address,
      number:number,
      website:website,
      designation:designation
  }
  dispatch(updatePersonalDetails(personalDetails))
    navigate('/update/about')
  }
  return (
    <div className='persnolResume'>
      <h2>Personal Details</h2>
      <div className="formContainer">
      <form onSubmit={onSubmitHandler}>
      <div className='smallbox'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label htmlFor="designation">Current Designation:</label>
        <input
          type="text"
          defaultValue={designation}
          id="designation"
          onChange={(e) => {
            setDeignation(e.target.value);
          }}
          required
        />
        </div>
        <div className='smallbox'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          defaultValue={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label htmlFor="number">Contact:</label>
        <input
          type="number"
          id="number"
          defaultValue={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          required
        />
        </div>
        <label htmlFor="address">Address</label>
        <textarea
          type="text"
          id="address"
          defaultValue={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          defaultValue={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        />
        <button type="submit">Save & Next</button>
      </form>
      </div>
    </div>
  );
}

export default UpdatePersonal;
