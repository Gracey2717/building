// src/pages/ProjectDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Productdetails.css";

function ProjectDetails() {
  const { id } = useParams();

  const BASE_URL =
    "https://kaxsggwzyqsznrujrsle.supabase.co/storage/v1/object/public/project_images";

  const projects = [
  {
    id: 1,
    title: "Residential Estate Development",
    subtitle: "Modern housing estate with sustainable design",
    client: "ABC Developers",
    location: "Lagos, Nigeria",
    service: "Residential Construction",
    date: "2025",
    images: [
      `${BASE_URL}/Professionalpic.jpg`,
      `${BASE_URL}/build2.jpg`,
      `${BASE_URL}/build3.jpg`,
    ],
    overview:
      "A large-scale residential estate designed to provide affordable yet modern housing with durable infrastructure.",
    benefits: [
      "Affordable housing units",
      "Modern architectural design",
      "Sustainable building practices",
    ],
  },
  {
    id: 2,
    title: "Office Complex Renovation",
    subtitle: "Upgrading existing structures for better functionality",
    client: "XYZ Properties",
    location: "Abuja, Nigeria",
    service: "Commercial Renovation",
    date: "2024",
    images: [
      `${BASE_URL}/Service1.jpg`,
      `${BASE_URL}/Service2.jpg`,
    ],
    overview:
      "Renovation of a multi-story office complex with a focus on energy efficiency and improved workspace layouts.",
    benefits: [
      "Energy-efficient systems",
      "Modern office interiors",
      "Improved safety compliance",
    ],
  },
  {
    id: 3,
    title: "Highway Expansion Project",
    subtitle: "Dual carriageway expansion for smoother traffic flow",
    client: "Federal Ministry of Works",
    location: "Kaduna, Nigeria",
    service: "Road Construction",
    date: "2024",
    images: [
      `${BASE_URL}/highway1.jpg`,
      `${BASE_URL}/highway2.jpg`,
    ],
    overview:
      "Expansion of an existing highway into a dual carriageway to reduce traffic congestion and improve safety.",
    benefits: [
      "Reduced travel time",
      "Improved road safety",
      "Economic growth through better transport",
    ],
  },
  {
    id: 4,
    title: "Bridge Construction",
    subtitle: "Modern suspension bridge over the Niger River",
    client: "National Infrastructure Agency",
    location: "Onitsha, Nigeria",
    service: "Bridge Engineering",
    date: "2025",
    images: [
      `${BASE_URL}/bridge1.jpg`,
      `${BASE_URL}/bridge2.jpg`,
    ],
    overview:
      "Construction of a state-of-the-art suspension bridge to improve connectivity between communities.",
    benefits: [
      "Reduced travel distance",
      "Boosted trade and commerce",
      "Long-lasting structural design",
    ],
  },
  {
    id: 5,
    title: "University Lecture Hall",
    subtitle: "Educational infrastructure for 2,000 students",
    client: "University of Ibadan",
    location: "Ibadan, Nigeria",
    service: "Institutional Construction",
    date: "2023",
    images: [
      `${BASE_URL}/hall1.jpg`,
      `${BASE_URL}/hall2.jpg`,
    ],
    overview:
      "Construction of a modern lecture hall equipped with soundproofing, ventilation, and digital learning technology.",
    benefits: [
      "Increased student capacity",
      "Better learning environment",
      "Durable, low-maintenance design",
    ],
  },
  {
    id: 6,
    title: "Shopping Mall Project",
    subtitle: "State-of-the-art commercial complex",
    client: "Mega Retail Ltd.",
    location: "Lagos, Nigeria",
    service: "Commercial Construction",
    date: "2024",
    images: [
      `${BASE_URL}/mall1.jpg`,
      `${BASE_URL}/mall2.jpg`,
    ],
    overview:
      "Design and construction of a multi-level shopping mall with modern facilities and ample parking.",
    benefits: [
      "Boosted local economy",
      "Modern retail environment",
      "Efficient structural systems",
    ],
  },
  {
    id: 7,
    title: "Hospital Expansion",
    subtitle: "Upgrading healthcare facilities for capacity",
    client: "State Government",
    location: "Enugu, Nigeria",
    service: "Healthcare Construction",
    date: "2023",
    images: [
      `${BASE_URL}/hospital1.jpg`,
      `${BASE_URL}/hospital2.jpg`,
    ],
    overview:
      "Expansion of a general hospital with new wards, operating theaters, and improved utilities.",
    benefits: [
      "Improved patient care",
      "Increased capacity",
      "Modern medical facilities",
    ],
  },
  {
    id: 8,
    title: "Water Treatment Plant",
    subtitle: "Sustainable clean water supply project",
    client: "Water Corporation",
    location: "Kano, Nigeria",
    service: "Infrastructure Development",
    date: "2024",
    images: [
      `${BASE_URL}/water1.jpg`,
      `${BASE_URL}/water2.jpg`,
    ],
    overview:
      "Development of a water treatment facility to provide clean drinking water to over 500,000 residents.",
    benefits: [
      "Safe water access",
      "Public health improvement",
      "Long-term sustainability",
    ],
  },
  {
    id: 9,
    title: "Airport Runway Upgrade",
    subtitle: "Improving aviation infrastructure",
    client: "FAAN",
    location: "Port Harcourt, Nigeria",
    service: "Aviation Construction",
    date: "2025",
    images: [
      `${BASE_URL}/runway1.jpg`,
      `${BASE_URL}/runway2.jpg`,
    ],
    overview:
      "Reconstruction of an international airport runway with advanced materials for safety and durability.",
    benefits: [
      "Enhanced flight safety",
      "Reduced maintenance costs",
      "Support for larger aircraft",
    ],
  },
  {
    id: 10,
    title: "Drainage & Flood Control Project",
    subtitle: "Protecting communities from seasonal flooding",
    client: "State Government",
    location: "Benin City, Nigeria",
    service: "Civil Infrastructure",
    date: "2024",
    images: [
      `${BASE_URL}/drainage1.jpg`,
      `${BASE_URL}/drainage2.jpg`,
    ],
    overview:
      "A drainage and flood control system built to channel rainwater and protect urban communities.",
    benefits: [
      "Flood prevention",
      "Improved sanitation",
      "Better living conditions",
    ],
  },
];


  const project = projects.find((p) => p.id.toString() === id);
  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="project-details">
      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="project-carousel"
      >
        {project.images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Title */}
      <h1>{project.title}</h1>
      <h3>{project.subtitle}</h3>

      {/* Project Overview */}
      <section>
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      {/* Project Details */}
      <section className="details-grid">
        <div><strong>Client:</strong> {project.client}</div>
        <div><strong>Location:</strong> {project.location}</div>
        <div><strong>Service:</strong> {project.service}</div>
        <div><strong>Date:</strong> {project.date}</div>
      </section>

      {/* Benefits */}
      <section>
        <h2>Key Benefits</h2>
        <ul>
          {project.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Related Projects (static for now) */}
      <section>
        <h2>Related Projects</h2>
        <div className="related-projects">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((rel) => (
              <div key={rel.id} className="related-card">
                <img src={rel.images[0]} alt={rel.title} />
                <h4>{rel.title}</h4>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
