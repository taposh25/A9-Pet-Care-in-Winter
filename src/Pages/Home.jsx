// src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(()=>{})
  }, []);

  return (
    <div style={{maxWidth:1200, margin:"20px auto", padding:20}}>
      <section style={{display:"flex", gap:20, alignItems:"center"}}>
        <div style={{flex:1}}>
          <h1>Find Out Your Companion On Winter</h1>
          <p>Warm clothes, paw care, and cozy tips for your pet.</p>
        </div>
        <div style={{width:360}}>
          <img src="/logo192.png" alt="hero" style={{width:"100%"}} />
        </div>
      </section>

      <section style={{marginTop:40}}>
        <h2>Popular Winter Care Services</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginTop:12}}>
          {services.slice(0,6).map(s => (
            <div key={s.serviceId} style={{border:"1px solid #eee", padding:12, borderRadius:8}}>
              <img src={s.image} alt={s.serviceName} style={{width:"100%", height:120, objectFit:"cover"}} />
              <h3>{s.serviceName}</h3>
              <p>Rating: {s.rating} · ${s.price}</p>
              <Link to={`/services/${s.serviceId}`}><button>View Details</button></Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
