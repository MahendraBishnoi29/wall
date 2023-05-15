import { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import Dropdown from "./Dropdown";

const TabButton = ({ active }) => {
  return (
    <>
      <button className="flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white bg-black hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669]">
        <span>All</span>
      </button>

      <button className="flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white bg-black hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669]">
        <FiLink2 className="w-6 h-6" />
        <span>On Chain</span>
      </button>

      <button className="flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white bg-black hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669]">
        <FaTwitter className="w-6 h-6" />
        <span>Social</span>
      </button>

      <button className="flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white bg-black hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669]">
        <BiDollar className="w-6 h-6" />
        <span>Token</span>
      </button>
    </>
  );
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex gap-4 px-4 mt-9">
      <TabButton />
      <Dropdown />
    </div>
  );
}
