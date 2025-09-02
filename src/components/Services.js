import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import structuralImg from "../Assets/structurals.png";
import technicalImg from "../Assets/technicald.jpg";
import consultationImg from "../Assets/consultation.jpg";
import renovationImg from "../Assets/renovation.jpg";

const services = [
  { image: structuralImg },
  { image: technicalImg },
  { image: consultationImg },
  { image: renovationImg }
];

function Services() {
  return (
    <div className="services-section">
      {/* ✨ One single text overlay */}
      <div className="services-text">
        <h2>Our Services</h2>
        <p>We offer a wide range of civil engineering services to meet your needs.</p>
      </div>

      {/* Background slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="services-swiper"
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
  );
}

export default Services;
