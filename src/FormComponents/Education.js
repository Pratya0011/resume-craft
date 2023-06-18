import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEducation } from "../features/Home/HomeSlice";

function Education() {
  const [educationList, setEducationList] = useState([
    {
      school: "",
      startDate: "",
      endDate: "",
      about: "",
    },
  ]);

  useSelector((state)=>state.allResume.setResume)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addEdu = () => {
    setEducationList([
      ...educationList,
      {
        school: "",
        startDate: "",
        endDate: "",
        about: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const onChangeVal = [...educationList];
    onChangeVal[index][name] = value;
    setEducationList(onChangeVal);
  };

 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const educationObj = {
      education: educationList,
    }
    dispatch(addEducation(educationObj))
    navigate("/experience")
  };

  return (
    <div className="educationResume">
      <h2>Education</h2>
      <div className="formContainer">
      <form onSubmit={onSubmitHandler}>
        {educationList.map((data, index) => (
          <div key={index} className="extra">
            <div className='smallbox'>
            <label htmlFor="school">School/Univercity:</label>
            <input
            name="school"
              type="text"
              id="school"
              onChange={(e) => {
                handleChange(e,index);
              }}
              required
            />
            <label htmlFor="startDate">Start Date:</label>
            <input
            name="startDate"
              type="date"
              id="startDate"
              onChange={(e) => {
                handleChange(e,index);
              }}
            />
            </div>
            <div className='smallbox'>
            <label htmlFor="endDate">End Date:</label>
            <input
            name="endDate"
              type="date"
              id="endDate"
              onChange={(e) => {
                handleChange(e,index);
              }}
            />
            <label htmlFor="about">About Degree/Cirtification:</label>
            <input
            name="about"
              type="text"
              id="about"
              onChange={(e) => {
                handleChange(e,index);
              }}
            /> 
            </div>
          </div>
        ))}
        <button type="submit">Save & Next</button>
      </form>
      </div>
      <div className="btndiv"><button onClick={addEdu} className="addBtn">Add</button></div>
    </div>
  );
}

export default Education;
