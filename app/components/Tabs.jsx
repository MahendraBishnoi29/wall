import { useContext, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { AppContext } from "./context/AppContext";

const TabButton = ({ active }) => {
  const { tabs, setTabs } = useContext(AppContext);

  return (
    <>
      <button
        onClick={() => setTabs((tabs) => ({ ...tabs, all: !tabs["all"] }))}
        className={`flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669] ${
          tabs.all ? "bg-[#065F46]" : "bg-transparent"
        }`}
      >
        <span>All</span>
      </button>

      <button
        onClick={() =>
          setTabs((tabs) => ({ ...tabs, social: !tabs["social"] }))
        }
        className={`flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669] ${
          tabs.social ? "bg-[#065F46]" : "bg-transparent"
        }`}
      >
        <FiLink2 className="w-6 h-6" />
        <span>Social</span>
      </button>

      <button
        onClick={() => setTabs((tabs) => ({ ...tabs, token: !tabs["token"] }))}
        className={`flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669] ${
          tabs.token ? "bg-[#065F46]" : "bg-transparent"
        }`}
      >
        <FaTwitter className="w-6 h-6" />
        <span>Token</span>
      </button>

      <button
        onClick={() =>
          setTabs((tabs) => ({ ...tabs, on_chain: !tabs["on_chain"] }))
        }
        className={`flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669] ${
          tabs["on_chain"] ? "bg-[#065F46]" : "bg-transparent"
        }`}
      >
        <BiDollar className="w-6 h-6" />
        <span>onChain</span>
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
