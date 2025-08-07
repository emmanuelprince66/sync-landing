import aOne from "../assets/images/a-1.svg";
import picOne from "../assets/images/pic-1.png";
import picTwo from "../assets/images/pic-2.png";
import picThree from "../assets/images/pic-3.png";
import picFour from "../assets/images/pic-4.png";
import smart from "../assets/images/smart.jpg";
const HeaderFour = () => {
  return (
    <div className="w-full h-full p-5">
      <div className="flex items-start gap-2 justify-center mb-[3rem] md:mb-[5rem] w-full p-0">
        <p className=" text-[25px] md:text-[48px] text-center">Why Sync360?</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className=" text-[25px] text-center md:text-start md:text-[32px]">
              Smarter Inventory Management
            </p>
            <p className="text-[18px] md:text-[20px] text-center  md:text-start text-[#535353]">
              Stop the guesswork. With Sync360, you always know what’s in stock,
              what’s selling, and what needs restocking in real time
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-2">
          <img src={smart} alt="pic-1" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-2">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[25px] md:text-[32px]  md:my-0">
              The New Way to Pay
            </p>
            <p className="text-[18px] md:text-start text-center md:text-[20px] text-[#535353]">
              Say goodbye to bulky POS systems. Accept card, transfer, using
              only your phone with SoftPOS. Anytime. Anywhere.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-1">
          <img src={picOne} alt="pic-3" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[25px] md:text-[32px]  md:my-0">
              Your Business, Now Online
            </p>
            <p className="text-[18px] md:text-start text-center md:text-[20px] text-[#535353]">
              With Sync360’s digital storefront, you can showcase your products
              and sell online instantly no coding, no delays. Reach more
              customers beyond your physical shop.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-2">
          <img src={picThree} alt="pic-3" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-2">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className=" text-[25px] text-center md:text-start md:text-[32px]">
              Customer Support That Feels Human
            </p>
            <p className="text-[18px] md:text-[20px] text-center  md:text-start text-[#535353]">
              We don’t just help you when there’s a problem. We work with you to
              grow. Our support team understands your hustle and is ready to
              walk the journey with you.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-1">
          <img src={picFour} alt="pic-1" className="w-full h-full" />
        </div>
      </div>

      <div className="block md:flex gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-2">
          <img
            src={picTwo}
            alt="pic-4"
            className="w-full h-full rounded-md  "
          />
        </div>
        <div className="flex-1 flex flex-col items-center order-2 md:order-1  md:items-start gap-2">
          <p className="text-[25px] text-center md:text-start md:text-[32px] mb-1  md:mt-0 mt-[3rem]">
            Embedded Micro-Insurance for Business Resilience
          </p>
          <p className="text-[18px] md:text-[20px] text-center md:text-start text-[#535353]">
            With Sync360's Micro-Insurance, businesses get more than just a
            tool, they get a safety net. Our automatic coverage provides up to
            ₦2 million in protection against fire, theft, and damage, empowering
            businesses to survive and thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderFour;
