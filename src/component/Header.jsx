import AppleIcon from "@mui/icons-material/Apple";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import { Link } from "react-router-dom";
import real from "../assets/images/h-22.svg";
const Header = () => {
  return (
    <div className="w-full mt-[10%] h-full">
      <div className=" block md:flex  items-center justify-between ">
        <div className="flex flex-col items-start gap-3 w-full ">
          <p className="text-[64px] font-bold text-black leading-[60px] md:leading-2 ">
            One Tool,{" "}
          </p>
          <div className="flex gap-1 font-bold md:gap-[3rem] items-center mt-[-20px] md:mt-0 ">
            <p className="text-[64px] text-black  leading-[90px] md:leading-2">
              {" "}
              Every Business Needs.
            </p>
            {/* <img
              src={sink1}
              alt="h-1"
              className="object-contain w-[50px] h-[50px] md:w-[100px] md:h-[100px] "
            /> */}
          </div>

          <p className="text-[18px] text-black  leading-7 max-w-[80%]">
            Sync360 isn’t just another business app — it’s your all-in-one
            growth engine. From inventory tracking to embedded insurance, we
            help you run a smarter, safer, and more profitable business.
          </p>
          <div className="md:flex  gap-5 items-center my-3">
            <Link
              to="https://apps.apple.com/us/app/Sync360/id6514304272
"
            >
              <button className="flex gap-1 min-w-[200px] border border-[#C4F928] md:min-w-0 items-center bg-white py-1 rounded-md px-4 justify-center">
                <AppleIcon sx={{ fontSize: "50px" }} />
                <span className="flex flex-col gap-0">
                  <p className="text-black text-[12px] ">Download on the</p>
                  <p className="text-black text-[20px] ">App Store</p>
                </span>
              </button>
            </Link>

            <Link to="https://play.google.com/store/apps/details?id=app.Sync360.user ">
              <button className="flex gap-1 border border-[#C4F928]  items-center min-w-[200px] md:min-w-0 my-5 bg-white py-1 rounded-md px-4 justify-center">
                <SmartDisplayIcon sx={{ fontSize: "50px" }} />
                <span className="flex flex-col items-start gap-0">
                  <p className="text-black text-[12px] ">Get it on</p>
                  <p className="text-black text-[20px] ">Google Play</p>
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:block w-full h-full relative ">
          <img src={real} alt="h-2" className="object-cover  rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
