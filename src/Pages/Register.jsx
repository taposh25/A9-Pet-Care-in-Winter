// src/pages/Register.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { AuthContext } from "../contexts/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

const Register = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pw) => {
    if (pw.length < 6) return "Password must be 6+ chars";
    if (!/[A-Z]/.test(pw)) return "Password must contain uppercase";
    if (!/[a-z]/.test(pw)) return "Password must contain lowercase";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validatePassword(password);
    if (error) return toast.error(error);

    signUp(email, password)
      .then((result) => {
        console.log(result.user)
        return updateUserProfile({ displayName: name, photoURL: photo });
      })
      .then(() => {
        toast.success("Registered");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div style={{maxWidth:480, margin:"30px auto"}}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input placeholder="Photo URL" value={photo} onChange={(e)=>setPhoto(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
