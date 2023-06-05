import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSkills, createPost, onSubmit } from "../features/Home/HomeSlice";


function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      skills: "",
      level: 0,
    },
  ]);
  const selector = useSelector((state)=>state.allResume.setResume)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addSk=()=>{
    setSkillsList([...skillsList, {
        skills: "",
        level: 0,}]) 
  }
  const handleChange=(e,index)=>{
    const {name,value} = e.target
    const onChangeVal = [...skillsList]
    onChangeVal[index][name] = value
    setSkillsList(onChangeVal)
  }
  
  
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    const skillObj = {
      skills: skillsList
    }
    dispatch(addSkills(skillObj))
    const postData = [...selector,skillObj]
    dispatch(createPost(postData))
    dispatch(onSubmit())
    navigate("/")
  }
  return (
    <div className="skillResume">
    <h2>Skills</h2>
      <form onSubmit={onSubmitHandler}>
        {skillsList.map((data, index) => (
          <div key={index}>
            <label htmlFor="skills">Add Skill:</label>
            <input
              name="skills"
              type="text"
              id="skills"
              onChange={(e) => handleChange(e, index)}
            />
            <label>Level:</label>
            <input
              name="level"
              type="number"
              id="level"
              min="1"
              max="5"
              onChange={(e) => handleChange(e, index)}
            />
           
          </div>
        ))}
        
        <button type="submit">Save & Submit</button>
      </form>
      <button onClick={addSk}>Add</button>
    </div>
  );
}

export default Skills;
