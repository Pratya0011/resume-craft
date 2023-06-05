import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEducation } from "../features/UpdateData/UpdateData";

function UpdateEducation() {
  const selector = useSelector((state) => state.updateResume.updateResume);
  const [educationList, setEducationList] = useState([
    {
      school: "",
      startDate: "",
      endDate: "",
      about: "",
    },
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    };

    dispatch(updateEducation(educationObj));
    navigate("/update/experience");
  };
  return (
    <div>
      <h1>Education</h1>
      <form onSubmit={onSubmitHandler}>
        {educationList.map((data, index) => (
          <div key={index}>
            <label htmlFor="school">School/Univercity</label>
            <input
              name="school"
              type="text"
              id="school"
              defaultValue={data.school}
              onChange={(e) => {
                handleChange(e, index);
              }}
              required
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              name="startDate"
              type="date"
              id="startDate"
              defaultValue={data.startDate}
              onChange={(e) => {
                handleChange(e, index);
              }}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              name="endDate"
              type="date"
              id="endDate"
              defaultValue={data.endDate}
              onChange={(e) => {
                handleChange(e, index);
              }}
            />
            <label htmlFor="about">About Degree/Cirtification</label>
            <input
              name="about"
              type="text"
              id="about"
              defaultValue={data.about}
              onChange={(e) => {
                handleChange(e, index);
              }}
            />
             
          </div>
        ))}

        <button type="submit" style={{margin: "10px"}}>Save & Next</button>
      </form>
      <button onClick={addEdu} style={{margin: "10px"}}>Add</button>
    </div>
  );
}

export default UpdateEducation;
