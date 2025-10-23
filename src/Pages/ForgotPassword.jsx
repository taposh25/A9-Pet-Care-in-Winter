// src/pages/ForgotPassword.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
// import { AuthContext } from "../contexts/AuthProvider";
// import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Check your mail.");
        // open Gmail (optional)
        window.open("https://mail.google.com", "_blank");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div style={{maxWidth:480, margin:"30px auto"}}>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input placeholder="Your registered email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
