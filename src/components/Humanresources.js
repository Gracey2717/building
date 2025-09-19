import React from 'react'
import Professionalpic from '../Assets/Professionalpic.jpg'
import Servicer from '../Assets/Service3.jpg'
import Service2 from '../Assets/Service2.jpg'
import './Humanresources.css'

function Humanresources() {
  return (
    <div className="hr-section">
      <h1 className="hr-title">Meet Our Lead Engineers</h1>
      <p className="hr-subtitle">
        Our engineering team is dedicated to delivering high-quality projects on time and within budget.
      </p>

      <h2 className="hr-heading">Civil Engineering Team</h2>

      {/* First profile block */}
      <div className="lead-highlight">
        <img
          src={Professionalpic}
          alt="Lead Civil Engineer"
          className="lead-photo"
        />
        <div className="lead-text">
          <h3>Engr. Owolabi Olusegun</h3>
          <p>
            With over 15 years of experience in civil engineering, John leads
            our projects with unmatched precision and dedication.
          </p>
        </div>
      </div>

      {/* Other team info */}
      <div className="hr-content">
        <div className="hr-block">
          <p>
            Our team is composed of highly skilled professionals with diverse
            expertise.
          </p>
          <img src={Servicer} alt="Engineering Service" className="hr-img" />
        </div>

        <div className="hr-block reverse">
          <p>
            Using the best materials and equipment, we ensure the success of
            every project.
          </p>
          <img src={Service2} alt="Service Example" className="hr-img" />
        </div>
      </div>
    </div>
  )
}

export default Humanresources
