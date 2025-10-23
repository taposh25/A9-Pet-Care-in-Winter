import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <Navbar></Navbar>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}