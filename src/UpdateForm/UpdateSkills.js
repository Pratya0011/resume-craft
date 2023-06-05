import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSkills, onSubmitUpdate, createUpdatedPost } from "../features/UpdateData/UpdateData";
import {  deletePost } from "../features/Home/HomeSlice";

function UpdateSkills() {
  const [skillsList, setSkillsList] = useState([
    {
      skills: "",
      level: 0,
    },
  ]);
  const selector = useSelector((state) => state.updateResume.setResume)
  const previousSelector = useSelector((state) => state.updateResume.updateResume);
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
    const id = previousSelector.id
    const skillObj = {
      skills: skillsList
    }
    dispatch(updateSkills(skillObj))
    const data = [...selector,skillObj]
    dispatch(deletePost(id))
    dispatch(createUpdatedPost(data))
    dispatch(onSubmitUpdate())
    navigate('/')
    window.location.reload()
  }
  return (
    <div>
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
        
        <button type="submit" style={{margin: "10px"}}>Save & Submit</button>
      </form>
      <button onClick={addSk} style={{margin: "10px"}}>Add</button>
    </div>
  )
}

export default UpdateSkills