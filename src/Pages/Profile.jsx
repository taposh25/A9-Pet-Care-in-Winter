// src/pages/Profile.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
// import { AuthContext } from "../contexts/AuthProvider";
// import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => toast.success("Profile updated"))
      .catch(err => toast.error(err.message));
  };

  return (
    <div style={{maxWidth:700, margin:"30px auto"}}>
      <h2>My Profile</h2>
      <img src={user?.photoURL || "/logo192.png"} alt="avatar" style={{width:120, height:120, borderRadius:12}} />
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>

      <form onSubmit={handleUpdate} style={{marginTop:20}}>
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Photo URL" value={photo} onChange={(e)=>setPhoto(e.target.value)} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
