import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { useState, useTransition } from "react";

const DropdownLinks = [
  {
    id: 1,
    name: "Industrial Grade L2 PoE",
    link: "/industrailgradel2poe",
  },
  {
    id: 2,
    name: "Industrial Grade L2 Non PoE",
    link: "/industrialgradel2nonpoe",
  },
  {
    id: 3,
    name: "Industrial Grade L3 PoE",
    link: "/industrialgradel3poe",
  },
  {
    id: 4,
    name: "Industrial Grade L3 Non PoE",
    link: "/industrialgradel3nonpoe",
  },
  {
    id: 5,
    name: "Enterprise L2 PoE",
    link: "/enterprisel2poe",
  },

  {
    id: 7,
    name: "Enterprise L2 Non PoE",
    link: "/enterprisel2nonpoe",
  },
  {
    id: 8,
    name: "Enterprise L3 PoE",
    link: "/enterprisel3poe",
  },
  {
    id: 9,
    name: "Enterprise L3 Non PoE",
    link: "/enterprisel3nonpoe",
  },
  {
    id: 10,
    name: "Firewall",
    link: "/firewall",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [rotate,setRotate] = useState(10)
  const showNav = () => {
    setNav(!nav);
  };

  const showdropdown = () => {
    setDropdown(!dropdown);
    if(rotate == 10){
      setRotate(180)
    }else{
      setRotate(10)
    }
  };
  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* upper Navbar */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img id="logo-img" src={Logo} alt="Logo" className="w-40" />
          </div>
          <div data-aos="zoom-in" className="flex justify-center">
            <ul className="items-center hidden gap-4 cursor-pointer sm:flex">
              {/* {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 duration-200 hover:text-primary"
              >
                {data.name}
              </a>
            </li>
           ))} */}
              <li>
                <div
                  onClick={() => navigate("/")}
                  className="inline-block px-4 font-bold duration-200 hover:text-primary"
                >
                  Home
                </div>
              </li>
              {/* Simple Dropdown and Links */}
              <li className="relative cursor-pointer group">
                <div
                  onClick={() => navigate("/")}
                  className="flex items-center gap-[2px] py-2 font-bold"
                >
                  Products
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((data, item) => (
                      <li key={item}>
                        <div
                          onClick={() => navigate(data.link)}
                          className="inline-block w-full p-2 rounded-md hover:bg-primary/20 "
                        >
                          {data.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/solutions")}
                  className="inline-block px-4 font-bold duration-200 hover:text-primary"
                >
                  Solutions
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/about")}
                  className="inline-block px-4 font-bold duration-200 hover:text-primary"
                >
                  About
                </div>
              </li>
              <li>
                <div
                  onClick={() => navigate("/blogs")}
                  className="inline-block px-4 font-bold duration-200 hover:text-primary"
                >
                  Blogs
                </div>
              </li>
            </ul>
          </div>

          {/* search bar */}
          <div className="flex items-center justify-between gap-4">
            {/* order button */}
            <button
              onClick={() => navigate("/contact")}
              className="flex text-sm items-center gap-3 px-4 py-1 font-bold text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
            >
              Contact Us
            </button>

            {
              <div>
                <DarkMode />
              </div>
            }

            {/* --------------------------- Hamburger Menu & Navbar ---------------------------------*/}

            <div className="hamburger-menu" onClick={showNav}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
                width={"35px"}
                alt=""
              />
            </div>
            {nav ? (
              <div className="Veritacal-Nav">
                <ul className="links">
                  <li>
                    <div
                      onClick={() => {
                        navigate("/");
                        showNav(false);
                      }}
                      className="inline-block px-4 font-bold duration-200 hover:text-primary"
                    >
                      Home
                    </div>
                  </li>
                  {/* Simple Dropdown and Links */}
                  <li className="relative cursor-pointer group">
                    <div
                      onClick={() => {
                        navigate("/");
                      }}
                      className="flex items-center gap-[2px] py-2 font-bold"
                    >
                      Products
                      <span>
                        <FaCaretDown
                          className={`transition-all duration-200 group-hover:rotate-${rotate}`}
                          onClick={showdropdown}
                        />
                      </span>
                    </div>
                    {
                      dropdown ? (
                        <div className=" absolute z-[9999]  group-hover:block w-[150px] text-xs rounded-md bg-white p-2      text-black shadow-md">
                      <ul>
                        {DropdownLinks.map((data, item) => (
                          <li key={item}>
                            <div
                              onClick={() => {
                                navigate(data.link);
                                showNav(false);
                              }}
                              className="inline-block w-full p-2 rounded-md hover:bg-primary/20 "
                            >
                              {data.name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                      ):('')
                    }
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        navigate("/solutions");
                        showNav(false);
                      }}
                      className="inline-block px-4 font-bold duration-200 hover:text-primary"
                    >
                      Solutions
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        navigate("/about");
                        showNav(false);
                      }}
                      className="inline-block px-4 font-bold duration-200 hover:text-primary"
                    >
                      About
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        navigate("/blogs");
                        showNav(false);
                      }}
                      className="inline-block px-4 font-bold duration-200 hover:text-primary"
                    >
                      Blogs
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
