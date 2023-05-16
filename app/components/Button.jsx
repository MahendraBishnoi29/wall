import Link from "next/link";
import React, { useContext } from "react";
import { BsShieldCheck } from "react-icons/bs";
import { AppContext } from "./context/AppContext";

const Button = ({ title, property, Icon }) => {
  const { tabs, setTabs } = useContext(AppContext);
  return (
    <button
      onClick={() =>
        setTabs((tabs) => ({ ...tabs, [property]: !tabs[property] }))
      }
      className={`flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669] ${
        tabs[property] ? "bg-[#065F46]" : "bg-transparent"
      }`}
    >
      <Icon />
      <Link href="#">{title}</Link>
    </button>
  );
};

export default Button;
