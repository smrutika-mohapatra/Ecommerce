import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo.png';
import Bell from '../../image/Bell-icon.png';
import Cart from '../../image/Cart-icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md h-16">
      <div className="container mx-auto px-5 md:px-10 h-full">
        <nav className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img src={Logo} alt="Logo" className="w-28 md:w-36" />
          </Link>

          {/* Hamburger Menu Icon (for mobile) */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex space-y-0 md:space-y-0 md:space-x-10 text-gray-700 font-medium absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 h-16 md:h-auto px-5 py-0 md:py-0 shadow-md md:shadow-none z-20 flex flex-col md:flex-row justify-center md:items-center`}
          >
            <li className="h-full flex items-center">
              <Link to="/men" className="hover:text-gray-900">Men</Link>
            </li>
            <li className="h-full flex items-center">
              <Link to="/woman" className="hover:text-gray-900">Woman</Link>
            </li>
            <li className="h-full flex items-center">
              <Link to="/combo02" className="hover:text-gray-900">Combo 02</Link>
            </li>
            <li className="h-full flex items-center">
              <Link to="/combo03" className="hover:text-gray-900">Combo 03</Link>
            </li>
            <li className="h-full flex items-center">
              <Link to="/combo04" className="hover:text-gray-900">Combo 04</Link>
            </li>
          </ul>

          {/* Search, Notifications, Cart */}
          <div className="flex items-center space-x-5 md:space-x-8 h-full">
            {/* Search Form */}
            <form className="relative hidden md:block h-full">
              <input
                type="text"
                placeholder="Search..."
                className="border border-black rounded py-2 px-4 h-7 text-sm outline-none focus:ring-2 focus:ring-black mt-3"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-900"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* Notification Icon */}
            <div className="relative h-full flex items-center">
              <img src={Bell} alt="Notification" className="w-5 md:w-4" />
              <div className="absolute top-5 right-0 bg-red-500 w-2 h-2 rounded-full"></div>
            </div>

            {/* Cart Icon */}
            <div className="relative h-full flex items-center">
              <img src={Cart} alt="Cart" className="w-6 md:w-5" />
              <div className="absolute top-5 right-0 bg-red-500 w-2 h-2 rounded-full"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
