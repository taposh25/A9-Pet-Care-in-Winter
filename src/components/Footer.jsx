import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 py-2">
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600">123 Industry St, New York, NY 10001</p>
          <p className="text-gray-600">Email: info@yourcompany.com</p>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
        </div>

  
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-pink-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
               <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

      </div>


      <div className="w-11/12 mx-auto border-t pt-4 mt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
