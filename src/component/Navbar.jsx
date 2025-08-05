import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import nOne from "../assets/images/n-1.png";
import sink1 from "../assets/images/sink2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const url = "https://business.sync360.africa/login";

  return (
    <div
      className={`w-full bg-[#FEFBEA] ${
        location !== "/ambassadorship" && "bg-[#FEFBEA]"
      }    ${location !== "/" && "pb-[5%]"} p-5 `}
    >
      <div className="w-full  mx-auto hidden  md:flex justify-between items-center">
        <div className="">
          <img src={sink1} alt="n-img" className="w-[200px] h-[100px]" />
        </div>

        <div className="flex  justify-between   items-center ">
          {location === "/" && (
            <>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-2}
                duration={500}
              >
                <p className="text-black mr-4 font-bold text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out">
                  About
                </p>
              </ScrollLink>
              <ScrollLink
                to="features"
                spy={true}
                smooth={true}
                offset={-2}
                duration={500}
              >
                <p className="text-black  mr-4 font-bold text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out">
                  Features
                </p>
              </ScrollLink>
              <ScrollLink
                to="why"
                spy={true}
                smooth={true}
                offset={-2}
                duration={500}
              >
                <p className="text-black  mr-4 font-bold  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out">
                  Why Sync360?
                </p>
              </ScrollLink>
            </>
          )}
          {location !== "/" && (
            <div onClick={() => navigate("/")}>
              <p
                className={`${
                  location === "/ambassadorship"
                    ? "text-[#656565]"
                    : "text-black"
                }  mr-4  text-[16px] font-bold hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
              >
                Sync360
              </p>
            </div>
          )}
          {/* 
          <div onClick={() => navigate("/business")}>
            <p
              className={`${
                location === "/ambassadorship"
                  ? "text-[#656565]"
                  : "text-[#D7D7D7]"
              }  mr-4  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
            >
              Sync360 for Business
            </p>
          </div>
          <div onClick={() => navigate("/ambassadorship")}>
            <p
              className={`${
                location === "/ambassadorship"
                  ? "text-[#656565]"
                  : "text-[#D7D7D7]"
              }  mr-4  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
            >
              Campus Ambassador
            </p>
          </div> */}
          <div onClick={() => navigate("/contact")}>
            <p
              className={`${
                location === "/contact" ? "text-black" : "text-black"
              }  mr-4  text-[16px] font-bold hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
            >
              Contact Us
            </p>
          </div>
        </div>

        <Link to={url}>
          <button
            className={`${
              location === "/ambassadorship"
                ? "bg-[#C4F928] text-white"
                : "bg-[#C4F928]"
            } w-[150px] hover:text-green-500 transition-colors font-bold duration-700 ease-in-out rounded-md text-[16px] h-[50px]`}
          >
            Login
          </button>
        </Link>
      </div>

      {/* possibly hamburger menu for mobile */}
      <div className="w-full  md:hidden p-3">
        <div className="flex w-full justify-between items-center">
          <div className="ml-[-2rem]">
            <img src={sink1} alt="n-img" className="w-[200px] h-[100px]" />
          </div>

          <div>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 42, height: 42, background: "#D7d7d7" }}>
                  <MenuRoundedIcon sx={{ color: "#000" }} />
                </Avatar>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="flex flex-col items-start  justify-between p-3 gap-3 ">
            {location === "/" && (
              <>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-2}
                  duration={500}
                >
                  <p
                    onClick={handleClose}
                    className="text-[#000] mr-4 text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out"
                  >
                    About
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-2}
                  duration={500}
                >
                  <p
                    onClick={handleClose}
                    className="text-[#000]  mr-4  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out"
                  >
                    Features
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="why"
                  spy={true}
                  smooth={true}
                  offset={-2}
                  duration={500}
                >
                  <p
                    onClick={handleClose}
                    className="text-[#000]  mr-4  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out"
                  >
                    Why Sync360
                  </p>
                </ScrollLink>
                <div onClick={() => navigate("/contact")}>
                  <p
                    className={`${
                      location === "/contact" ? "text-black" : "text-black"
                    }  mr-4  text-[16px]  hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
                  >
                    Contact Us
                  </p>
                </div>
              </>
            )}
            {location !== "/" && (
              <div onClick={() => navigate("/")}>
                <p
                  className={`${
                    location === "/ambassadorship"
                      ? "text-black"
                      : "text-[#000]"
                  }  mr-4  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
                  onClick={handleClose}
                >
                  Sync360
                </p>
              </div>
            )}
            {/* 
              <div onClick={() => navigate("/business")}>
                <p
                  className={`${
                    location === "/ambassadorship"
                      ? "text-[#656565]"
                      : "text-[#000]"
                  }  mr-4  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
                  onClick={handleClose}
                >
                  Sync360 for Business
                </p>
              </div>
              <div onClick={() => navigate("/ambassadorship")}>
                <p
                  className={`${
                    location === "/ambassadorship"
                      ? "text-[#656565]"
                      : "text-[#000]"
                  }  mr-4  text-[16px] hover:text-green-500 cursor-pointer transition-colors duration-700 ease-in-out`}
                  onClick={handleClose}
                >
                  Campus Ambassador
                </p>
              </div> */}
          </div>
        </Menu>
      </div>

      {/* possibly hamburger menu for mobile */}
    </div>
  );
};

export default Navbar;
