import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchResume, deletePost, viewData } from "./HomeSlice";
import { updateDetails } from "../UpdateData/UpdateData";

function Home() {
  const selector = useSelector((state) => state.allResume.resume);
  const [arr, setArr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchResume());
  }, [fetchResume]);

  const buildResume = () => {
    navigate("/personalDetails");
  };

  const deleteData = (id) => {
    dispatch(deletePost(id));
    window.location.reload();
  };

  const updateData = (data) => {
    dispatch(updateDetails(data));
    navigate("/update/personalDetails");
  };
  const viewResume = (data) => {
    dispatch(viewData(data));
    navigate("/view");
  };
  return (
    <div className="home">
      <div className="content">
        <div className="main-cnt">
          <p className="para">
          Craft Your Perfect Resume: Unleash Your Professional Potential with Our Online Resume Builder
          </p>
        </div>
      </div>
      <div onClick={buildResume} id="buildBtn">
        <div className="plus">+</div>
        <div className="build">Build</div>
      </div>
      <div>
        {selector.map((data) => (
          <div>
            <div className="showResumeName">{data.data[0].name}</div>
            <div className="btns">
              <button
                onClick={() => {
                  viewResume(data);
                }}
                id="btn1"
              >
                View
              </button>
              <button
                onClick={() => {
                  updateData(data);
                }}
                id="btn2"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteData(data.id);
                }}
                id="btn3"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
