import { useSelector } from "react-redux";

function View() {
  const selector = useSelector((state) => state.allResume.viewData);

  return (
    <div className="showContainer">
       
        <div className="leftPotion">
          <div className="showPersonal">
             
            <h2 style={{fontSize: '35px'}} className="showName"> {selector.data[0].name}</h2>
            <div>{selector.data[0].email}</div>
            <div>{selector.data[0].number}</div>
            <div>{selector.data[0].website}</div>
            <div>{selector.data[0].address}</div>
            <div>{selector.data[0].designation}</div>
          </div>
          <div className="showSkills">
            <h2 className="showSkill">Skills</h2>
            {selector.data[5].skills.map((data, index) => (
              <div>
                <div>{data.skills}</div>
                <div>{data.level}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rightPotion">
          <div className="showAbtCnt">
            <h2 className="showAbout">About</h2>
            <div>{selector.data[1].about}</div>
          </div>
          <div className="showEdContainer">
            <h2 className="showEducation">Education</h2>
            {selector.data[2].education.map((data, index) => (
              <div>
                <div>{data.school}</div>
                <div>{data.about}</div>
                <div>{data.startDate}</div>
                <div>{data.endDate}</div>
              </div>
            ))}
          </div>
          <div className="showExContainer">
            <h2 className="showExperience">Experience</h2>
            {selector.data[3].experience.map((data, index) => (
              <div>
                <div>{data.designation}</div>
                <div>{data.company}</div>
                <div>{data.tenure}</div>
                <div>{data.location}</div>
                <div>{data.description}</div>
              </div>
            ))}
          </div>
          <div className="showProContainer">
            <h2 className="showProj">Project</h2>
            {selector.data[4].project.map((data, index) => (
              <div>
                <div>{data.title}</div>
                <div>{data.tenure}</div>
                <div>{data.projectUrl}</div>
                <div>{data.projectDescription}</div>
              </div>
            ))}
          </div>
        </div> 
    </div>
  );
}

export default View;
