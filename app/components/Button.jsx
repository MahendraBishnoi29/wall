import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Button = ({ title, property, Icon }) => {
  const { handleFilterChange, tabs } = useContext(AppContext);
  return (
    <button
      onClick={() => handleFilterChange(property)}
      className={`flex items-center justify-center gap-2 font-medium text-xl p-[8px 16px] outline-none text-white hover:bg-[#065F46] px-4 py-2 rounded-lg transition-all duration-300 border border-[#059669] ${
        tabs[property] ? "bg-[#065F46]" : "bg-transparent"
      }`}
    >
      {Icon && <Icon />}
      <Link href="#">{title}</Link>
    </button>
  );
};

export default Button;
