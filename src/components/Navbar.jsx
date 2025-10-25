
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkout"); 
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="font-bold text-xl text-gray-800">WarmPaws</span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/services" className="hover:text-green-600 transition">Services</Link>
          <Link to="/profile" className="hover:text-green-600 transition">My Profile</Link>

          {/* Authentication items*/}
          {user ? (
            <div className="flex items-center gap-3">
              <img 
                src={user.photoURL || "/logo192.png"} 
                alt="avatar" 
                title={user.displayName || user.email}
                className="w-9 h-9 rounded-full border border-gray-300"
              />
              <button onClick={() => logOut()
                .then(()=>navigate("/"))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition">
                  Register
                </button>
              </Link>
            </div>
          )}

          
          <button 
            onClick={handleBuyNow} 
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
