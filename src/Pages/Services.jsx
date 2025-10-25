import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
      {services.map(service => (
        <div key={service.serviceId} className="border p-4 rounded-lg shadow-lg transition duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] 
                     cursor-pointer">
          <img src={service.image} alt={service.serviceName} className="w-full h-50 object-cover rounded-lg  mb-3" />
          <h2 className="text-xl font-bold">{service.serviceName}</h2>
          
          <p className="text-sm">Rating: {service.rating}</p>
          <p className="font-semibold">${service.price}</p>
         
             <Link to={`/services/${service.serviceId}`}>
                          <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                            View Details
                          </button>
                        </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;