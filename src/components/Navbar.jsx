// src/components/Navbar.jsx
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';




const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // Buy now -> go to checkout (protected route)
    navigate("/checkout"); // make sure /checkout route exists and is wrapped with PrivateRoute in App.jsx
  };

  return (
    <nav style={{background:"#fff", boxShadow:"0 2px 6px rgba(0,0,0,0.06)"}}>
      <div style={{maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px"}}>
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <img src={logo} alt="logo" style={{width:48, height:48}} />
          <div style={{fontWeight:700}}>WarmPaws</div>
        </div>

        <div style={{display:"flex", alignItems:"center", gap:18}}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/profile">My Profile</Link>

          {user ? (
            <>
              <div style={{display:"flex", alignItems:"center", gap:8}}>
                <img src={user.photoURL || "/logo192.png"} alt="avatar" style={{width:36, height:36, borderRadius:"50%"}} title={user.displayName || user.email} />
                <button onClick={() => logOut().then(()=>navigate("/"))}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/register"><button>Register</button></Link>
            </>
          )}

          <button onClick={handleBuyNow} style={{background:"#66bb6a", color:"#fff", padding:"8px 12px", borderRadius:6}}>BUY NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
