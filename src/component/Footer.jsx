import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

import nOne from "../assets/images/sink1.png";
import v from "../assets/images/v.svg";

const Footer = () => {
  const location = window.location.pathname;
  return (
    <div className="flex flex-col items-center gap-5 justify-center py-5 p-2">
      <div className=" block md:flex w-full ">
        <div className="flex flex-col items-start gap-2">
          <div className="w-[100px] h-[100px]">
            <img src={nOne} alt="n-1" className="object-cover " />
          </div>
          <p className="text-[16px] text-[#F2F2F2] max-w-[90%]">
            Sync360 seamlessly connects individuals and businesses within
            communities, while driving financial inclusion and promoting
            cashless society.
          </p>
        </div>
        <div className=" block md:flex justify-between items-start mt-3 md:mt-0">
          <div className="flex flex-col items-start gap-4 w-[100%]">
            <p className="text-[16px] font-bold text-white">Quick Links</p>
            <Link to="/about">
              <p className="text-[#D7D7D7] text-[16px] hover:text-[#C4F928] cursor-pointer transition-colors duration-700 ease-in-out">
                About
              </p>
            </Link>
            <Link to="/about">
              <p className="text-[#D7D7D7] text-[16px] hover:text-[#C4F928] cursor-pointer transition-colors duration-700 ease-in-out">
                Features
              </p>
            </Link>
            <Link to="/about">
              <p className="text-[#D7D7D7] text-[16px] hover:text-[#C4F928] cursor-pointer transition-colors duration-700 ease-in-out">
                Why Sync360?
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 mt-4 md:mt-0 ">
            <p className="text-[16px] text-white">Stay up to date</p>
            <p className="text-[#F2F2F2] text-[16px]">
              Be the first to know when we release new features, make
              improvements or when there is an offer. No spam.
            </p>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white border-0 rounded-sm outline-none h-[35px] p-1 "
              />
              <button className="bg-[#C4F928] h-[35px] text-white hover:text-black rounded-md px-3">
                Subscribe
              </button>
            </div>

            <div className="flex gap-3 items-center mt-7">
              <TwitterIcon sx={{ color: "#D1D1D1" }} />
              <FacebookIcon sx={{ color: "#D1D1D1" }} />
              <InstagramIcon sx={{ color: "#D1D1D1" }} />
              {/* <LinkedInIcon sx={{ bcolor: "#D1D1D1" }} /> */}
              <img src={v} alt="v" className="w-5 h-5" />
            </div>
            <p className="text-[#F2F2F2] text-[16px]">
              Sync your business for total growth
            </p>

            <div className="block md:flex gap-5 items-center flex-1 ">
              <Link to="https://apps.apple.com/us/app/Sync360/id6514304272">
                <button className="flex min-w-[200px] gap-1 items-center bg-black py-1 rounded-md px-4 justify-center">
                  <AppleIcon sx={{ fontSize: "50px", color: "#fff" }} />
                  <span className="flex flex-col gap-0">
                    <p className="text-white text-[12px] ">Download on the</p>
                    <p className="text-white text-[20px] ">App Store</p>
                  </span>
                </button>
              </Link>

              <Link to="https://play.google.com/store/apps/details?id=app.Sync360.us">
                <button className="flex gap-1 min-w-[200px] my-5 md:my-0 items-center bg-black py-1 rounded-md px-4 justify-center">
                  <SmartDisplayIcon sx={{ fontSize: "50px", color: "#fff" }} />
                  <span className="flex flex-col items-start gap-0">
                    <p className="text-white text-[12px] ">Get it on</p>
                    <p className="text-white text-[20px] ">Google Play</p>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full flex-col items-center  gap-2">
        <Link to="/terms">
          <p className="text-[16px] text-[#F2F2F2] hover:text-[#C4F928] cursor-pointer">
            Terms & conditions
          </p>
        </Link>

        <Link to="/privacy">
          <p className="text-[16px]  text-[#F2F2F2] hover:text-[#C4F928] cursor-pointer">
            Privacy
          </p>
        </Link>
      </div>

      <Divider sx={{ width: "100%", background: "#D1D1D1", my: "1rem" }} />

      <div className=" block md:flex justify-between items-center w-full ">
        <p className="text-[16px] text-[#d1d1d1]">
          © 2025 Sync360. All rights reserved.
        </p>

        <div className="flex justify-between w-[25%] items-center">
          <p className="text-[16px] flex items-center text-[#d1d1d1]">Terms </p>
          <span className="text-[27px] text-[#d1d1d1] pb-3">.</span>
          <p className="text-[16px] flex items-center text-[#d1d1d1]">
            Privacy
          </p>
          <span className="text-[27px] text-[#d1d1d1] pb-3">.</span>
          <p className="text-[16px] flex items-center text-[#d1d1d1]">
            Cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
