import React from 'react';

function Contact() {
  const phoneNumber = "2348035531793"; // Replace with your dad's WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#32335d", color: "#DED3C4" }}>
      <button 
        onClick={handleClick} 
        style={{
          backgroundColor: "#f9f1e5",
          color: "#32335d",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem"
        }}
      >
        Contact Us on WhatsApp
      </button>
    </div>
  );
}

export default Contact;
