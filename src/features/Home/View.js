import { useSelector } from "react-redux";

function View() {
  const selector = useSelector((state) => state.allResume.viewData);
  return (
    <div className="showContainer">
       
        <div className="leftPotion">
          <div className="showPersonal">
             
            <h2 style={{fontSize: '35px'}} className="showName"> {selector.data[0].name}</h2>
            <h3>Contact</h3>
            <div>{selector.data[0].email}</div>
            <div>{selector.data[0].number}</div>
            <div>{selector.data[0].website}</div>
            <div>{selector.data[0].address}</div>
            <div>{selector.data[0].designation}</div>
          </div>
          <h3 className="showSkill">Skills</h3>
          <div className="showSkills">
           
            {selector.data[5].skills.map((data, index) => (
              <div key={index}>
                
                <div >
                {data.skills}
                <div className="div2">
                {data.level}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rightPotion">
          <div className="showAbtCnt">
            <h3 className="showAbout">About</h3>
            <div>{selector.data[1].about}</div>
          </div>
          <h3 className="showEducation">Education</h3>
          <div className="showEdContainer">
            
            {selector.data[2].education.map((data, index) => (
              <div className="edu" key={index}>
                <div className="div1">{data.about}</div>
                <div className="div2">{data.school}</div>
                <div className="div3">
                <span>{data.startDate}</span>
                <span> - </span>
                <span>{data.endDate}</span>
                </div>
              </div>
            ))}
          </div>
          <h3 className="showExperience">Experience</h3>
          <div className="showEdContainer">
            
            {selector.data[3].experience.map((data, index) => (
              <div className="edu" key={index}>
                <div className="div1">{data.designation}</div>
                <div className="div2">{data.company}</div>
                <div className="div3">
                <span>{data.tenure}</span>
                <span> , </span>
                <span>{data.location}</span>
                </div>
                <div className="div4">{data.description}</div>
              </div>
            ))}
          </div>
          <h3 className="showProj">Project</h3>
          <div className="showEdContainer">
            
            {selector.data[4].project.map((data, index) => (
              <div className="edu" key={index}>
                <div className="div1">{data.title}</div>
                <div className="div2">{data.tenure}</div>
                <div className="div3">{data.projectUrl}</div>
                <div className="div4">{data.projectDescription}</div>
              </div>
            ))}
          </div>
        </div> 
    </div>
  );
}

export default View;
