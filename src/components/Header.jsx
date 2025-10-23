// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div style={{background:"#1f2937", color:"#fff", padding:"6px 12px", fontSize:14}}>
      <div style={{maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between"}}>
        <div>Pet Street 123 - New York</div>
        <div>email@yoursite.com · (123) 456-789</div>
      </div>
    </div>
  );
};

export default Header;
