"use client";

import PolygonCard from "../components/PolygonCard";
import Tabs from "../components/Tabs";

const Quest = () => {
  return (
    <div className="pt-6">
      {/* input search */}
      <div className="flex items-center justify-between px-4">
        <h2 className="text-2xl font-semibold text-gray-200">Quests(23)</h2>
        <div class="bg-[#1A1D1F] rounded-lg flex items-center">
          <span class="text-white pl-3">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              fill="white"
              clip-rule="evenodd"
            >
              <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
            </svg>
          </span>
          <input
            class="w-full bg-[#1A1D1F] font-semibold text-[#6F767E] rounded-lg py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search for Quests"
          />
        </div>
      </div>
      {/* input search end*/}

      {/* TABS */}
      <div className="">
        <Tabs />
      </div>
      {/* TABS END*/}

      <div className="flex flex-wrap gap-5 mt-6 px-4">
        <PolygonCard />
      </div>
    </div>
  );
};

export default Quest;
