// src/pages/Project.js
import React, { useEffect, useState } from "react";
import { supabase } from "../supabase-clients";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "./Project.css";



// Local images for background services slider
import ConsultationImage from "../Assets/consult.jpg";
import PlanningImage from "../Assets/Service2.jpg";
import DesignImage from "../Assets/Service3.jpg";
import ImplementationImage from "../Assets/service6.jpg";
import ReviewImage from "../Assets/Services5.jpg";
import CompletionImage from "../Assets/Building2.jpg";

function Project() {
  const [projects, setProjects] = useState([]);

  // Background services images
  const services = [
    { image: ConsultationImage },
    { image: PlanningImage },
    { image: DesignImage },
    { image: ImplementationImage },
    { image: ReviewImage },
    { image: CompletionImage },
  ];

  useEffect(() => {
    async function fetchImages() {
      const { data, error } = await supabase.from("project_images").select("*");

      if (error) {
        console.error("Error fetching images:", error.message);
        return;
      }

      // Attach public URL + new sequential id
      const withUrls = data.map((row, index) => {
        const { data: urlData } = supabase.storage
          .from("project_images")
          .getPublicUrl(row.url);

        return {
          ...row,
          publicUrl: urlData.publicUrl,
          newId: index + 1, // ✅ sequential ID starting at 1
        };
      });

      setProjects(withUrls);
    }

    fetchImages();
  }, []);

  return (
    <div className="project-section">
      {/* === Services Background Slider === */}
      <div className="services-section">
        <div className="services-text">
          <h2>Services & Projects We Have Done</h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{ delay: 3000 }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, EffectFade]}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="service-slide"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Projects Carousel === */}
      <div className="project-container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          observer={true}
          observeParents={true}
          className="proj-img"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.newId}>
              <div className="slide-card">
                <img src={p.publicUrl} alt={p.title} className="carousel-img" />
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                {/* ✅ use newId for the link */}
                <Link to={`/projects/${p.newId}`}>
                  <button>Learn More</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link to="/upload">
          <button className="bttn">Upload Project</button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
