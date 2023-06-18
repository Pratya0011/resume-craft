import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../features/Home/HomeSlice";

function Experience() {
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
        company: "",
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
    dispatch(addExperience(experienceObj))
    navigate("/project")
  };
  return (
    <div className="expResume">
    <h2>Your Experience</h2>
    <div className="formContainer">
      <form onSubmit={onSubmitHandlerExp}>
        {experienceList.map((data, index) => (
          <div key={index} className="extra">
            <div className='smallbox'>
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
            </div>
            <div className='smallbox'>
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
            </div>
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
        
        <button type="submit">Save & Next</button>
      </form>
      </div>
      <div className="btndiv"><button onClick={handleAddExp} className="addBtn">Add</button></div>
    </div>
  );
}

export default Experience;
