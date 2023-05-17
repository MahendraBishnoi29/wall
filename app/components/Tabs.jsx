import { useContext, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { AppContext } from "../context/AppContext";
import Button from "./Button";

const TabButton = ({ active }) => {
  const { tabs, setTabs } = useContext(AppContext);

  return (
    <>
      <Button title="All" property="all" className="" />
      <Button title="On Chain" property="on_chain" Icon={FiLink2} />

      <Button title="Social" property="social" Icon={FaTwitter} />

      <Button title="Token" property="token" Icon={BiDollar} />
    </>
  );
};

export default function Tabs() {
  return (
    <div className="flex gap-4 px-4 mt-9">
      <TabButton />
      <Dropdown />
    </div>
  );
}
