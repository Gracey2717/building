import React, { useState } from "react"
import ProjImg from "../Assets/Services5.jpg"
import ProjImg2 from "../Assets/Projectspic.png"
import Prof from "../Assets/Professionalpic.jpg"
import ProjImg3 from "../Assets/Buildings.jpg"
import ProjImg4 from "../Assets/Building2.jpg"
import AboutNew from "../Assets/Aboutnew.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import "./Project.css"

function Project({ user }) {   // ✅ accept user as a prop
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    { img: Prof, title: "Professional Project", desc: "Description about Prof" },
    { img: ProjImg, title: "Service Project", desc: "Description about Services5" },
    { img: ProjImg4, title: "Building Project", desc: "Description about Building2" },
    { img: ProjImg3, title: "Buildings", desc: "Description about Buildings" },
    { img: ProjImg2, title: "Project Pic", desc: "Description about Projectspic" },
    { img: AboutNew, title: "About Us", desc: "Description about AboutNew" },
  ]

  return (
    <div className="project-container">
      <div className="project-text">
        <h1>
          In several years of working, We've worked on a variety of projects,
          from residential buildings.
        </h1>
      </div>

      {/* ✅ Only admins see the Upload button */}
      {user?.role === "admin" && (
        <button className="upload-btn">Upload Image</button>
      )}

      {/* Carousel with arrows */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        className="proj-img"
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="slide-card">
              <img src={p.img} alt={p.title} className="carousel-img" />
              <h3>{p.title}</h3>
              <button onClick={() => setSelectedProject(p)}>Learn More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            <img src={selectedProject.img} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.desc}</p>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project
