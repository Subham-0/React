// src/components/Footer.jsx
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "15px",
        marginTop: "40px",
        borderTop: "1px solid #ddd",
        color: "#555",
      }}
    >
      <div>Created with ❤️ by Subham Dash</div>
      <div
        style={{
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "1.5rem", // Icon size
        }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
