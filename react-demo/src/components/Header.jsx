import React from "react";

function Header({ onTitleClick }) {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center", 
      }}

    >
      <h1 style={{
        margin: 0,
        fontSize: "1.5rem",
        cursor: "pointer",
        display: "inline-block",
      }}
        onClick={onTitleClick}
      >React Learning App</h1>
    </header>
  );
}

export default Header;
