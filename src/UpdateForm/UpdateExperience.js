import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateExperience } from "../features/UpdateData/UpdateData";

function UpdateExperience() {
  const [experienceList, setExperienceList] = useState([{
    designation: "",
    companny: "",
    tenure: "",
    location: "",
    description: "",
  }]);
  useSelector((state)=>state.allResume.setResume)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleAddExp=()=>{
    setExperienceList([...experienceList, 
      {
        designation: "",
        companny: "",
        tenure: "",
        location: "",
        description: ""
      },
      ]);
    
  }

  const handleChange=(e,index)=>{
    const {name,value} = e.target
    const onChangeVal = [...experienceList]
    onChangeVal[index][name] = value
    setExperienceList(onChangeVal)
  }

 
  const onSubmitHandlerExp = (e) => {
    e.preventDefault();
    const experienceObj = {
      experience: experienceList
    }
    dispatch(updateExperience(experienceObj))
    navigate("/update/project")
    
  };
  return (
    <div>
      <form onSubmit={onSubmitHandlerExp}>
        {experienceList.map((data, index) => (
          <div key={index}>
            <label htmlFor="designation">Designation:</label>
            <input
            name="designation"
              type="text"
              id="designation"
              onChange={(e) => {
                handleChange(e,index)
              }}
            />
            <label htmlFor="company">Company Name:</label>
            <input
            name="company"
              type="text"
              id="company"
              onChange={(e) => {
                handleChange(e,index)
              }}
            />
            <label htmlFor="tenure">Tenure:</label>
            <input
            name="tenure"
              type="text"
              id="tenure"
              onChange={(e) => {
                handleChange(e,index)
              }}
            />
            <label htmlFor="location">Location:</label>
            <input
            name="location"
              type="text"
              id="location"
              onChange={(e) => {
                handleChange(e,index)
              }}
            />
            <label htmlFor="description">Description:</label>
            <input
            name="description"
              type="text"
              id="description"
              onChange={(e) => {
                handleChange(e,index)
              }}
            />
             
          </div>
        ))}
        
        <button type="submit" style={{margin: "10px"}}>Save & Next</button>
      </form>
      <button onClick={handleAddExp} style={{margin: "10px"}}>Add</button>
    </div>
  )
}

export default UpdateExperience