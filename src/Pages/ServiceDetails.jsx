// src/pages/ServiceDetails.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
// import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import { AuthContext } from "../contexts/AuthProvider";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => String(s.serviceId) === String(id));
        setService(found || null);
      });
  }, [id]);

  const handleBook = (e) => {
    e.preventDefault();
    // no backend: show toast + clear form
    toast.success("Service booked successfully!");
    setName("");
    setEmail("");
  };

  if (!service) return <div style={{padding:40}}>Service not found.</div>;

  return (
    <div style={{maxWidth:900, margin:"20px auto"}}>
      <h2>{service.serviceName}</h2>
      <img src={service.image} alt={service.serviceName} style={{width:"100%", maxHeight:400, objectFit:"cover"}} />
      <p>{service.description}</p>
      <p>Price: ${service.price} · Rating: {service.rating}</p>

      <form onSubmit={handleBook} style={{marginTop:20, display:"grid", gap:10}}>
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ServiceDetails;
