// import React from "react";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";


// export default function RootLayout() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="w-11/12 mx-auto my-3">
//         <Header></Header>

//             {
//             import.meta.env.VITE_name
//             }

//         <nav  className='w-11/12 mx-auto my-3'>
//         <Navbar></Navbar>
//       </nav>
//       </header>
    
//       <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-10'>
//         <Outlet></Outlet>
//       </main>
//       <footer className="w-11/12 mx-auto my-3">
//          <Footer></Footer>
//       </footer>
//     </div>
//   );
// }



import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="w-11/12 mx-auto py-4 bg-base-300 flex flex-col">
      
      {/* HEADER */}
      <header className="bg-base-200 shadow-sm ">
        <div className="w-11/12 mx-auto py-4">
          <Header></Header>
          <p className="text-center text-xs text-gray-500 mt-1">
            {import.meta.env.VITE_name}
          </p>
        </div>

        <nav className="bg-base-200">
          <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-11/12 mx-auto flex-1 py-6">
        <Outlet></Outlet>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 mt-8">
        <div className="w-11/12 mx-auto">
          <Footer></Footer>
        </div>
      </footer>

    </div>
  );
}
