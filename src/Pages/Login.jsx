
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../contexts/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";


// const Login = () => {
//   const { signIn, signInWithGoogle } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signIn(email, password)
//       .then(() => {
//         toast.success("Login success");
//         navigate(from, { replace: true });
//       })
//       .catch((err) => {
//         toast.error(err.message);
//       });
//   };

//   const handleGoogle = () => {
//     signInWithGoogle()
//       .then(() => {
//         toast.success("Logged in with Google");
//         navigate(from, { replace: true });
//       })
//       .catch((err) => toast.error(err.message));
//   };

//   return (
//     <div style={{maxWidth:420, margin:"40px auto", padding:20, border:"1px solid #eee", borderRadius:8}}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required style={{display:"block",width:"100%",margin:"8px 0"}} />
//         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required style={{display:"block",width:"100%",margin:"8px 0"}} />
//         <button type="submit" style={{width:"100%", padding:10}}>Login</button>
//       </form>
//       <div style={{marginTop:12, display:"flex", justifyContent:"space-between"}}>
//         <Link to="/forgot-password">Forgot Password?</Link>
//         <button onClick={handleGoogle}>Sign in with Google</button>
//       </div>
//       <p style={{marginTop:12}}>Don't have an account? <Link to="/register">Register</Link></p>
//     </div>
//   );
// };

// export default Login;




import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";
// import toast from "react-hot-toast";


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

