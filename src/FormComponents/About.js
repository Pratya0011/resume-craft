import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPersonalDetails,addAbout } from "../features/Home/HomeSlice";

function About() {
  const [about, setAbout] = useState("");
  useSelector((state)=>state.allResume.setResume)
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const onSubmitHandler=(e)=>{
e.preventDefault()
  const aboutObj = {
    about:about
  }
  dispatch(addAbout(aboutObj))
  navigate('/education')
 }
  return (
    <div className="aboutResume">
     <h2>About</h2>
     <div className="formContainer">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="about">About</label>
        <textarea
          className="txt-area"
          type="text"
          id="about"
          minLength="200"
          maxLength="700"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
        <button type="submit">Save & Next</button>
      </form>
      </div>
    </div>
  );
}

export default About;
