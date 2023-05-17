import { useContext, useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaDiceD6 } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import Button from "./Button";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tabs } = useContext(AppContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative inline-block text-left font-medium text-xl p-[8px 16px] outline-none text-white hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669] ${
        tabs.proof || tabs.NFT || tabs.whitelist
          ? "bg-[#065F46]"
          : "bg-transparent"
      }`}
    >
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center items-center space-x-2 font-medium text-white rounded-md focus:outline-none"
      >
        <span>More</span>
        {isOpen ? (
          <FaChevronUp className="w-4 h-4" />
        ) : (
          <FaChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-4 mt-2 w-56 rounded-md shadow-lg bg-[#1a1d1f]">
          <div className="px-2 py-4 rounded-md space-y-3">
            <Button title="Proof" property="proof" Icon={BsShieldCheck} />

            <Button
              title="Waitlist"
              property="whitelist"
              Icon={AiOutlineGift}
            />

            <Button title="NFT" property="NFT" Icon={FaDiceD6} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
