



import React, { useContext, useState }  from "react";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
import { FaUserTie } from "react-icons/fa";

 
const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => toast.success("Profile updated successfully! 🥳"))
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] p-4 sm:p-6 bg-gray-50">
      <div className="w-full max-w-2xl bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
        <h2 className="flex justify-center text-3xl font-bold text-center text-gray-800 mb-8 border-b pb-2 gap-3">
          My Profile <FaUserTie />
        </h2>

       
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 border-b pb-8">
          <img 
         
            src={user?.photoURL || "https://i.ibb.co/L8T1F9z/default-avatar.png"} 
            alt="User Avatar" 
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg" 
          />
          <div className="text-center sm:text-left">
            <p className="text-2xl font-semibold text-gray-900 mt-2">{user?.displayName || "N/A"}</p>
            <p className="text-lg text-gray-600 mb-1">{user?.email || "Email Not Available"}</p>

          </div>
        </div>

        {/* Update Form Section */}
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Profile Information</h3>
            <form onSubmit={handleUpdate} className="space-y-6">
                
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Display Name</label>
                    <input 
                        id="name"
                        type="text"
                        placeholder="New Name" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)} 
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base transition duration-150"
                        required
                    />
                </div>

                {/* Photo URL Input */}
                <div>
                    <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">Photo URL</label>
                    <input 
                        id="photoUrl"
                        type="url"
                        placeholder="New Photo URL (e.g., https://example.com/image.jpg)" 
                        value={photo} 
                        onChange={(e)=>setPhoto(e.target.value)} 
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-base transition duration-150"
                    />
                </div>


                <button 
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                    Save Changes
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Profile;