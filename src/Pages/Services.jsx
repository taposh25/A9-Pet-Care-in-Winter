import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map(service => (
        <div key={service.serviceId} className="border p-4 rounded-lg shadow">
          <img src={service.image} alt={service.serviceName} className="w-full h-50 object-cover rounded-lg  mb-3" />
          <h2 className="text-xl font-bold">{service.serviceName}</h2>
          
          <p className="text-sm">Rating: {service.rating}</p>
          <p className="font-semibold">${service.price}</p>
          <button className="btn btn-primary mt-3">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Services;