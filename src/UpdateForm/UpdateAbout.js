import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAbout } from "../features/UpdateData/UpdateData";

function UpdateAbout() {
  const selector = useSelector((state) => state.updateResume.updateResume);
  const previousAbout = selector.data[1].about

  const [about, setAbout] = useState(previousAbout);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    const aboutObj= {
      about:about
    }
    dispatch(updateAbout(aboutObj))
    navigate('/update/Education')
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="about">About</label>
        <textarea
          type="text"
          id="about"
          minLength="200"
          maxLength="700"
          defaultValue={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />
        <button type="submit">Save & Next</button>
      </form>
    </div>
  )
}

export default UpdateAbout