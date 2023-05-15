import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaDiceD6 } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left font-medium text-xl p-[8px 16px] outline-none text-white bg-black hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669]">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center items-center space-x-2 font-medium text-white rounded-md focus:outline-none "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
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
            <div className="flex justify-start items-center hover:bg-[#065f46] rounded-md space-x-2 px-4 py-2">
              <BsShieldCheck />
              <Link href="#">Proof</Link>
            </div>
            <div className="flex justify-start items-center hover:bg-[#065f46] rounded-md space-x-2 px-4 py-2">
              <AiOutlineGift />
              <Link href="#" className="text-xl font-medium">
                Gifts
              </Link>
            </div>
            <div className="flex justify-start items-center hover:bg-[#065f46] rounded-md space-x-2 px-4 py-2">
              <FaDiceD6 />
              <Link href="#">NFT</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
