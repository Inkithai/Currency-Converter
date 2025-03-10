import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import AuthModal from "../AuthModel/AuthModel";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import UserProfileModal from "../UserProfileModal/UserProfileModal";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLoginModal = () => {
    setShowLogin(true);
    setShowRegister(false); // Ensure register modal is closed
  };

  const handleRegisterModal = () => {
    setShowRegister(true);
    setShowLogin(false); // Ensure login modal is closed
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowProfileModal(false);
  };

  return (
    <nav className="flex justify-between w-full py-4 lg:px-32 px-12 sticky top-0 z-[999] bg-[#0A1A2F]">
      {/* Logo */}
      <div className="cursor-pointer lg:hidden">
        <Link to="/" className="text-2xl font-bold text-[#3FA9F5]">
          Currency Converter
        </Link>
      </div>

      {/* Main Navigation Links */}
      <div className="items-center hidden space-x-12 lg:flex text-white">
        <div className="flex items-center text-[#3FA9F5]">
          <h3 className="font-extrabold text-[#3FA9F5]">
            <Link to="/">
              <div className="cursor-pointer text-2xl">Currency Converter</div>
            </Link>
          </h3>
        </div>
      </div>

      {/* Auth Links or User Profile Button */}
      <div className="items-center hidden gap-8 lg:flex text-white">
        {user ? (
          <>
            <button
              onClick={() => setShowProfileModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0A1A2F] shadow-sm border transition-all duration-150 hover:bg-[#d1d5db] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3FA9F5]"
            >
              <AiOutlineUser />
              {user.name}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleLoginModal}
              className="flex items-center justify-center text-[#9D41C1]"
            >
              Login
            </button>
            <button
              onClick={handleRegisterModal}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9D41C1] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#2F6BBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3FA9F5]"
            >
              Join for Free
            </button>
          </>
        )}
      </div>

      {/* Login Modal */}
      <AuthModal isOpen={showLogin} onClose={handleCloseModal} mode="login" />

      {/* Register Modal */}
      <AuthModal
        isOpen={showRegister}
        onClose={handleCloseModal}
        mode="register"
      />

      {/* User Profile Modal */}
      {showProfileModal && (
        <UserProfileModal
          user={user}
          onClose={handleCloseModal}
          logout={logout}
        />
      )}

      {/* Mobile Navigation */}
      <div
        onClick={handleNav}
        className="flex items-center justify-center lg:hidden text-[#0A1A2F]"
      >
        <div className="">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Navigation Content */}
      <div
        className={
          !nav
            ? "fixed left-[-100%] top-0 w-[60%] h-full bg-[#0A1A2F] ease-in-out duration-500 lg:hidden shadow"
            : "fixed left-0 top-0 w-[60%] h-full ease-in-out bg-[#0A1A2F] duration-500 lg:hidden shadow"
        }
      >
        <h1 className="font-bold m-8 text-white">
          <Link
            to="/"
            onClick={() => {
              setNav(false);
            }}
          >
            <h1 className="text-2xl font-bold">Currency Converter</h1>
          </Link>
        </h1>

        {/* Sign In and Sign Up buttons */}
        <div className="flex flex-col mx-5">
          {user ? (
            <button
              onClick={() => setShowProfileModal(true)}
              className="inline-flex mt-8 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0A1A2F] shadow-sm transition-all duration-150 hover:bg-[#d1d5db] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3FA9F5]"
            >
              <AiOutlineUser />
              {user.name}
            </button>
          ) : (
            <>
              <button
                onClick={handleLoginModal}
                className="text-white mt-4 py-2 px-4 border border-transparent rounded-md text-sm font-medium bg-[#3FA9F5] hover:bg-[#2F8BBF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign In
              </button>
              <button
                onClick={handleRegisterModal}
                className="text-white mt-4 py-2 px-4 border border-transparent rounded-md text-sm font-medium bg-[#3FA9F5] hover:bg-[#2F8BBF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign Up for Free
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
