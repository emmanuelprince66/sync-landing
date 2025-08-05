import aOne from "../assets/images/a-1.svg";
import cOne from "../assets/images/c-1.svg";
import cTwo from "../assets/images/c-2.svg";
import cThree from "../assets/images/c-3.svg";
import cFour from "../assets/images/c-4.svg";
import cFive from "../assets/images/c-5.svg";
import cSix from "../assets/images/c-6.svg";

const HeaderThree = () => {
  const card = [
    {
      id: 1,
      icn: cOne,
      bTile: "Inventory",
      sTile:
        "Track stock levels in real time and manage your products without stress.",
    },
    {
      id: 2,
      icn: cTwo,
      bTile: "NFC Payments",
      sTile: "Experience contactless payment.",
    },
    {
      id: 3,
      icn: cThree,
      bTile: "Payments",
      sTile:
        "Accept card, transfer, and QR payments using just your smartphone",
    },
    {
      id: 4,
      icn: cFour,
      bTile: "Marketing Automation",
      sTile:
        "Send SMS campaigns and win back customers without lifting a finger.",
    },
    {
      id: 5,
      icn: cFive,
      bTile: "Expenses",
      sTile: "Monitor your daily spending and know where your money goes.",
    },
    {
      id: 6,
      icn: cSix,
      bTile: "Storefront",
      sTile: "Create website in minutes and  start selling online instantly.",
    },
    {
      id: 7,
      icn: cSix,
      bTile: "Micro-Insurance",
      sTile:
        "Protect your business with up to ₦2 million in coverage for fire, theft, and damages. Coming soon",
    },
  ];

  return (
    <div className="w-full p-5 h-full ">
      <div className="flex items-start gap-2 justify-center">
        <p className="text-[48px]">Features</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-[5rem]">
        {card.map((item) => {
          return (
            <div className="w-full h-full flex flex-col items-start gap-3 py-5 p-2 bg-white rounded-md">
              <img
                src={item.icn}
                alt="icn"
                className="object-contain w-[40px] h-[40px]"
              />

              <p className="text-[20px]">{item.bTile}</p>
              <p className="text-[13px] text-[#535353]">{item.sTile}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderThree;
