import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchResume, deletePost, viewData } from "./HomeSlice";
import { updateDetails } from "../UpdateData/UpdateData";


function Home() {
  const selector=useSelector((state) => state.allResume.resume);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchResume());
  }, [fetchResume]);

  const buildResume=()=>{
    navigate('/personalDetails')
  }

  const deleteData=(id)=>{
    dispatch(deletePost(id))
  }

  const updateData=(data)=>{
    dispatch(updateDetails(data))
    navigate('/update/personalDetails')
  }
  const viewResume=(data)=>{
    dispatch(viewData(data))
    navigate('/view')
  }
  return (
    <div className="home">

<div className="content">
              <div className="main-cnt"> 
             <p className="para">
              Standing-out,Professional,Recruiter-approved. Ready in mintues
              with our step by step builder
             </p>
            </div>
</div>
      <button onClick={buildResume} id="buildBtn">Build Resume</button>
      <div>{selector.map((data)=>(
        <div>
        <div className="showResumeName">{data.data[0].name}</div>
        <div className="btns"> 
        <button onClick={()=>{viewResume(data)}} id="btn1">View</button>
        <button onClick={()=>{updateData(data)}} id="btn2">Edit</button>
        <button onClick={()=>{deleteData(data.id)}} id="btn3">Delete</button>
        </div>
        </div>
      ))}</div>
    </div>
  );
}

export default Home;
