 import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerImg from '../assets/banner.png'




const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => {});
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Find Out Your <span className="text-green-600">Companion</span> This Winter
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Warm clothes, paw care, and cozy tips for your pet.
          </p>
        </div>
        <div className="w-80">
          <img src={bannerImg} alt="hero" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800">
          Popular Winter Care Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {services.slice(0, 6).map(s => (
            <div 
              key={s.serviceId} 
              className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
            >
              <img 
                src={s.image} 
                alt={s.serviceName} 
                className="w-full h-60 object-cover rounded-lg"
              />

              <h3 className="text-xl font-semibold mt-3">{s.serviceName}</h3>
              <p className="text-gray-600 text-sm mt-1">
                Rating: ⭐ {s.rating} &nbsp; | &nbsp; <span className="font-semibold text-green-600">${s.price}</span>
              </p>

              <Link to={`/services/${s.serviceId}`}>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home