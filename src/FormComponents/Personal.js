import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addPersonalDetails } from '../features/Home/HomeSlice';

function Personal() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [designation, setDeignation] = useState("");

    useSelector((state)=>state.allResume.setResume)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const personalDetails = {
            name:name,
            email:email,
            address:address,
            number:number,
            website:website,
            designation:designation,
        }

        dispatch(addPersonalDetails(personalDetails))
        navigate('/about')
    };
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label htmlFor="designation">Current Designation:</label>
        <input
          type="text"
          value={designation}
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        
        <label htmlFor="number">Contact:</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          required
        />
        </div>
        <label htmlFor="address">Address:</label>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        />
        <button type="submit">Save & Next</button>
      </form>
      </div>
    </div>
  )
}

export default Personal