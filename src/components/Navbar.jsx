import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function index() {
    navigate("/home");
  }

  let [mobileView, setmobileView] = useState(false);

  return (
    <header className="select-none">
      <nav className="lg:flex  lg:justify-between h-16 lg:items-center w-screen lg:px-10 px-5 fixed top-0 left-0  z-50 bg-white/30 backdrop-blur-lg shadow-lg">
        <div
          className="logo font-[Poppins]  my-5 cursor-pointer w-fit select-none"
          onClick={index}
        >
          <p className="lg:text-4xl text-3xl text-orange-600 font-bold cursor-pointe text-shadow-stone-900">
            s
            <span className="lg:text-4xl text-3xl text-green-500 font-bold">
              i
            </span>
            svas
          </p>
        </div>

        <div className="navlinks font-[Poppins] lg:text-lg text-lg text-black font-bold lg:flex lg:gap-10 lg:ml-90 hidden">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-bold" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-bold" : "text-black"
            }
          >
            About{" "}
            <FontAwesomeIcon
              className="ml-3"
              icon={faUser}
              beat
              style={{ color: "blue" }}
            />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-bold" : "text-black"
            }
          >
            Contact
            <FontAwesomeIcon
              className="ml-3 "
              icon={faPhone}
              shake
              style={{ color: "blue" }}
            />
          </NavLink>
          <a
            href="https://www.linkedin.com/in/manilaxmi-sisvas-185587226/"
            className=" focus:text-orange-600"
          >
            Linked_In{" "}
            <FontAwesomeIcon
              style={{ color: "blue", width: "20px", height: "20px" }}
              icon={faLinkedin}
              bounce
              className="ml-2"
            />
          </a>
        </div>
        {/*mobile hamburger start */}
        <div className="hamburger lg:hidden absolute top-6 right-2">
          <FontAwesomeIcon
            onClick={() => setmobileView((prev) => !prev)}
            icon={mobileView ? faXmark : faBars}
            size="xl"
            style={{ color: "black" }}
          />
        </div>

        {/* dropdown links for mobile view */}
        <div
          className={`mobile-nav lg:hidden ${
            mobileView ? "opacity-100 right-0" : "opacity-0 -right-32"
          } 
         
          h-40 w-32 md:h-60 md:w-40 bg-blue-100 absolute top-16  rounded-sm pt-2 md:pt-6 md:text-xl transition-all duration-500  
          
          `}
        >
          <ul className="flex flex-col px-3 gap-3 md:gap-6 text-black font-bold font-[Poppins] ">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-black"
              }
            >
              About{" "}
              <FontAwesomeIcon
                className="ml-3"
                icon={faUser}
                beat
                style={{ color: "blue" }}
              />
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-600 font-bold" : "text-black"
              }
            >
              Contact
              <FontAwesomeIcon
                className="ml-3 "
                icon={faPhone}
                shake
                style={{ color: "blue" }}
              />
            </NavLink>
            <a
              href="https://www.linkedin.com/in/manilaxmi-sisvas-185587226/"
              className=" focus:text-orange-600"
            >
              Linked_In{" "}
              <FontAwesomeIcon
                style={{ color: "blue", width: "16px", height: "20px" }}
                icon={faLinkedin}
                bounce
                className="ml-0.5 mt-1"
              />
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
