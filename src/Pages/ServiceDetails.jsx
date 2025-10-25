import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";



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
    toast.success("Service booked successfully!");
    setName("");
    setEmail("");
  };

  if (!service) {
    return <div className="text-center py-20 text-xl font-semibold">Service not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full max-h-[400px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold">{service.serviceName}</h2>
          <p className="text-gray-600">{service.description}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold">Price: ${service.price}</p>
            <p className="text-md">⭐ {service.rating}</p>
          </div>

          <form onSubmit={handleBook} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn btn-primary w-full mt-2">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

