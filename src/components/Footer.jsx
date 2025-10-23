// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{background:"#111827", color:"#fff", padding:20, marginTop:40}}>
      <div style={{maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between"}}>
        <div>
          <h4>WarmPaws</h4>
          <p>Contact: email@yoursite.com</p>
        </div>
        <div>
          <p>Privacy Policy · Terms</p>
          <p>Social: FB · TW · IG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
