
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../contexts/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";


// const Register = () => {
//   const { signUp, updateUserProfile } = useContext(AuthContext);
//   const [name, setName] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const validatePassword = (pw) => {
//     if (pw.length < 6) return "Password must be 6+ chars";
//     if (!/[A-Z]/.test(pw)) return "Password must contain uppercase";
//     if (!/[a-z]/.test(pw)) return "Password must contain lowercase";
//     return null;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const error = validatePassword(password);
//     if (error) return toast.error(error);

//     signUp(email, password)
//       .then((result) => {
//         console.log(result.user)
//         return updateUserProfile({ displayName: name, photoURL: photo });
//       })
//       .then(() => {
//         toast.success("Registered");
//         navigate("/");
//       })
//       .catch((err) => toast.error(err.message));
//   };

//   return (
//     <div style={{maxWidth:480, margin:"30px auto"}}>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
//         <input placeholder="Photo URL" value={photo} onChange={(e)=>setPhoto(e.target.value)} />
//         <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
//         <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";
// import toast from "react-hot-toast";

const Register = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.code);
        toast.error(err.message);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center py-10">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl text-center font-semibold mt-4">Register to your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset space-y-3">
            <label className="label">Email</label>
            <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button className="btn btn-neutral w-full mt-2">Register</button>

      

            <div className="flex justify-between text-sm pt-2">
              <Link to="/forgot-password" className="link link-hover">Forgot password?</Link>
            </div>

            <p className="text-center text-sm font-medium pt-2">
              Already have an account? Please <Link className="text-secondary" to="/register">Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
