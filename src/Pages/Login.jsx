
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Login successful", result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.code);
        toast.error(err.message);
      });
  };

 

  return (
    <div className="flex justify-center py-10">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl text-center font-semibold mt-4">Login to your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset space-y-3">
            <label className="label">Email</label>
            <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="btn btn-outline w-full mt-2">Login</button>

          

            <div className="flex justify-between text-sm pt-2">
              <Link to="/forgot-password" className="link link-hover">Forgot password?</Link>
            </div>

            <p className="text-center text-sm font-medium pt-2">
              Don't have an account? <Link className="text-secondary" to="/register">Register</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;

