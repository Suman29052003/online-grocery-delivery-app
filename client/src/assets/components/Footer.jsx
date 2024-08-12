import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#40c901] text-white py-12" id='contact'>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h6 className="text-white text-lg font-bold uppercase mb-4">About Us</h6>
            <p className="text-justify pr-6">
              Welcome to GreenGrocer, your one-stop online shop for all your fresh produce and grocery needs. We are dedicated to providing you with the freshest and highest quality products at competitive prices, right at your doorstep. Our mission is to make grocery shopping easy, convenient, and enjoyable, so you can spend more time on what matters most.
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h6 className="text-white text-lg font-bold uppercase mb-4">Shop Categories</h6>
            <ul className="space-y-2">
              <li><Link to="/fruits" className="hover:text-blue-400">Fruits</Link></li>
              <li><Link to="/vegetables" className="hover:text-blue-400">Vegetables</Link></li>
              <li><Link to="/dairy" className="hover:text-blue-400">Dairy Products</Link></li>
              <li><Link to="/bakery" className="hover:text-blue-400">Bakery</Link></li>
              <li><Link to="/beverages" className="hover:text-blue-400">Beverages</Link></li>
              <li><Link to="/snacks" className="hover:text-blue-400">Snacks</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h6 className="text-white text-lg font-bold uppercase mb-4">Customer Service</h6>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-sm text-white">
            <p>Copyright &copy; 2024 All Rights Reserved by <Link to="#" className="hover:text-blue-400">GreenGrocer</Link>.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-dribbble"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
