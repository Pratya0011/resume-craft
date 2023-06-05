import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../features/UpdateData/UpdateData";

function UpdateProject() {
  const [projectList, setProjectList] = useState([{
    title:"",
    tenure:"",
    projectUrl:"",
    projectDescription:""
}]);


const dispatch = useDispatch();
const navigate = useNavigate()

const addProj=()=>{
    setProjectList([...projectList, {
    title:"",
    tenure:"",
    projectUrl:"",
    projectDescription:""}])
    
  }

  const handleChange=(e,index)=>{
    const {name,value} = e.target
    const onChangeVal = [...projectList]
    onChangeVal[index][name] = value
    setProjectList(onChangeVal)
  }

 
  const submitProject=(e)=>{
    e.preventDefault()
    const projectObj = {
      project: projectList
    }
    dispatch(updateProjects(projectObj))
    navigate('/update/skills')
    
  }
  return (
    <div>
      <form onSubmit={submitProject}>
        {projectList.map((data,index)=>(
            <div key={index}>
            <label htmlFor="title">Project Title:</label>
            <input
            name="title"
              type="text"
              id="title"
              onChange={(e) => handleChange(e,index)}
            />
            <label htmlFor="projectTenure">Tenure:</label>
            <input
            name="tenure"
              type="text"
              id="projectTenure"
              onChange={(e) => handleChange(e,index)}
            />
            <label htmlFor="projectUrl">Project Url:</label>
            <input
            name="projectUrl"
              type="text"
              id="projectUrl"
              onChange={(e) => handleChange(e,index)}
            />
            <label htmlFor="projectDescription">Project Description:</label>
            <textarea
            name="projectDescription"
              type="text"
              id="projectDescription"
              onChange={(e) =>
                handleChange(e,index)
              }
            />
             
          </div>
        ))}
        
        <button type="submit" style={{margin: "10px"}}>Save & Next</button>
      </form>
      <button onClick={addProj} style={{margin: "10px"}}>Add</button>
    </div>
  )
}

export default UpdateProject