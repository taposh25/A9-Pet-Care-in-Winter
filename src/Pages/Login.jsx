// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";
// import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then(() => {
        toast.success("Login success");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div style={{maxWidth:420, margin:"40px auto", padding:20, border:"1px solid #eee", borderRadius:8}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required style={{display:"block",width:"100%",margin:"8px 0"}} />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required style={{display:"block",width:"100%",margin:"8px 0"}} />
        <button type="submit" style={{width:"100%", padding:10}}>Login</button>
      </form>
      <div style={{marginTop:12, display:"flex", justifyContent:"space-between"}}>
        <Link to="/forgot-password">Forgot Password?</Link>
        <button onClick={handleGoogle}>Sign in with Google</button>
      </div>
      <p style={{marginTop:12}}>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
