"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

import CardArea from "../components/CardArea";
import Tabs from "../components/Tabs";
import { AppContext } from "../context/AppContext";
import { useDebounce } from "../hooks/useDebounce";

const fetcher = (url) => fetch(url).then((res) => res.json());
const defaultFilters = {
  all: true,
  whitelist: false,
  NFT: false,
  proof: false,
  social: false,
  token: false,
  on_chain: false,
};

const Quest = () => {
  const [visible, setVisible] = useState(6);
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useState("");
  const [tabs, setTabs] = useState(defaultFilters);

  const debouncedSearchResult = useDebounce(search);
  let queryString = "";

  for (let item in tabs) {
    if (tabs[item]) {
      queryString += `${item},`;
    }
  }

  const { data, error } = useSWR(
    `https://dev-api.wall.app/api/v1/core/campaigns/?search=${debouncedSearchResult}${
      !(debouncedSearchResult === "") ? "" : `&campaign_tag=${queryString}`
    }`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );

  useEffect(() => {
    if (data && data.results.length <= visible) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  }, [data, visible]);

  const handleShowMore = () => {
    setVisible((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisible(6);
    setShowMore(true);
  };

  const handleFilterChange = (filterName) => {
    setTabs((prevState) => {
      const currentFilters = {
        ...prevState,
        [filterName]: !prevState[filterName],
      };
      // Case 1: If all tag are true, deselect them and select all
      if (
        Object.keys(currentFilters)
          .filter((key) => key !== "all")
          .every((key) => currentFilters[key])
      ) {
        return defaultFilters;
      }

      // Case 2: If all is selected, deselect everything else
      else if (filterName === "all") {
        return defaultFilters;
      }
      // Case 3: If any one is selected, deselect all
      else {
        return {
          ...prevState,
          [filterName]: !prevState[filterName],
          all: false,
        };
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        tabs,
        setTabs,
        error,
        visible,
        showMore,
        handleShowLess,
        handleShowMore,
        handleFilterChange,
      }}
    >
      <div className="pt-6">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-2xl font-semibold text-gray-200">
            Quests({data?.results.length})
          </h2>
          <div className="bg-[#1A1D1F] rounded-lg flex items-center">
            <span className="text-white pl-3">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                fill="white"
                clipRule="evenodd"
              >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
              </svg>
            </span>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1A1D1F] font-semibold text-[#6F767E] rounded-lg py-2 px-3 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search Quest or Project"
            />
          </div>
        </div>

        {/* TABS */}
        <div>
          <Tabs />
        </div>
        {/* TABS END */}

        {/* CARD AREA */}
        <div className="flex flex-wrap item-center gap-8 mt-6 px-4">
          <CardArea />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Quest;
