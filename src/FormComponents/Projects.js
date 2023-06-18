import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProjects } from "../features/Home/HomeSlice";

function Projects() {
  const [projectList, setProjectList] = useState([{
    title:"",
    tenure:"",
    projectUrl:"",
    projectDescription:""
}]);

useSelector((state)=>state.allResume.setResume)
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
    dispatch(addProjects(projectObj))
    navigate('/skills')
  }
  return (
    <div className="projectResume">
    <h2>Project</h2>
 <div className="formContainer">
      <form onSubmit={submitProject}>
        {projectList.map((data,index)=>(
            <div key={index} className="extra">
              <div className='smallbox'>
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
            </div>
            <div className='smallbox'>
            <label htmlFor="projectUrl">Project Url:</label>
            <input
            name="projectUrl"
              type="text"
              id="projectUrl"
              onChange={(e) => handleChange(e,index)}
            />
            </div>
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
        
        <button type="submit">Save & Next</button>
      </form>
      </div>
      <div className="btndiv"><button onClick={addProj} className="addBtn">Add</button></div>  
    </div>
  );
}

export default Projects;
