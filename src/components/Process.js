import React from "react";
import ConsultationImage from "../Assets/consult.jpg";
import PlanningImage from "../Assets/Service2.jpg";
import DesignImage from "../Assets/Service3.jpg";
import ImplementationImage from "../Assets/service6.jpg";
import ReviewImage from "../Assets/Services5.jpg";
import CompletionImage from "../Assets/Building2.jpg";
import "./Process.css";

function Process() {
  const steps = [
    {
      title: "Initial Consultation",
      text: "We begin by understanding your needs and project requirements.",
      img: ConsultationImage,
    },
    {
      title: "Project Planning",
      text: "We develop a detailed plan outlining the project scope, timeline, and resources.",
      img: PlanningImage,
    },
    {
      title: "Design and Development",
      text: "Our team creates innovative designs that meet your specifications and industry standards.",
      img: DesignImage,
    },
    {
      title: "Implementation",
      text: "We execute the project plan with precision and attention to detail.",
      img: ImplementationImage,
    },
    {
      title: "Review and Feedback",
      text: "We conduct thorough reviews and incorporate your feedback to ensure satisfaction.",
      img: ReviewImage,
    },
    {
      title: "Project Completion",
      text: "We finalize the project and ensure all objectives are met to your satisfaction.",
      img: CompletionImage,
    },
  ];

  return (
    <div className="process-container">
      <h2>Our Process</h2>
      <p>We follow a systematic approach to ensure the success of every project.</p>

      {steps.map((step, index) => (
        <div
          key={index}
          className={`process-step ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="process-text">
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
          <div className="process-img">
            <img src={step.img} alt={step.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Process;
