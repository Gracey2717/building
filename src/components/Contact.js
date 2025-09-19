import React from 'react';

function Contact() {
  const phoneNumber = "2348035531793"; // Replace with your dad's WhatsApp number
  const email = "pjandcrews@gmail.com"; // Replace with your email

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#32335d",
        color: "#DED3C4",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Contact Us</h2>

      {/* WhatsApp button */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          backgroundColor: "#f9f1e5",
          color: "#32335d",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          marginRight: "10px",
        }}
      >
        WhatsApp
      </button>

      {/* Email button */}
      <button
        onClick={handleEmailClick}
        style={{
          backgroundColor: "#898ac4",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Email
      </button>
    </div>
  );
}

export default Contact;
