import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUp(email, password)
      .then(() => {
        return updateUserProfile({ displayName: name, photoURL: photo });
      })
      .then(() => {
        toast.success("Account created successfully!");
        navigate("/"); // 
      })
      .catch((err) => {
        setError(err.code);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center py-10">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl text-center font-semibold mt-4">Create an account</h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset space-y-3">

            <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />

            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="btn btn-neutral w-full mt-2">Register</button>

            <p className="text-center text-sm font-medium pt-2">
              Already have an account?{" "}
              <Link className="text-secondary" to="/login">Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
