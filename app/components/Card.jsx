import React from "react";
import Image from "next/image";
import { FaStopwatch, FaUsers } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Card = (item) => {
  const d = item.data;

  const formatQuesterCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return count;
    }
  };

  if (!item.data)
    return <p className="text-2xl text-gray-400">No Data found!</p>;

  return (
    <div className="w-[384px] h-[262px] px-4 bg-[#111315] rounded-lg shadow-lg">
      <div className="flex items-center justify-between py-3 rounded-t-lg">
        <div className="flex items-center">
          <Image
            src="/images/Polygon.png"
            width={33}
            height={33}
            alt="polygon logo"
          />
          <span className="font-medium text-xs text-gray-300">Polygon</span>
        </div>
        <div className="flex items-center justify-center text-gray-500">
          {d?.ending_in === "Ended" ? (
            <FaStopwatch className="w-4 h-4 mr-1 text-gray-500" />
          ) : (
            <FaStopwatch className="w-4 h-4 mr-1 text-[#10B981]" />
          )}

          {d?.ending_in !== "Ended" ? (
            <span className="mr-2 font-medium text-xs text-gray-500">
              {d?.ending_in} left
            </span>
          ) : (
            <span className="mr-2 font-medium text-xs text-gray-500">
              {d?.ending_in}
            </span>
          )}

          {d?.ending_in === "Ended" ? (
            <span className="border border-green-400 text-center px-2 rounded-md text-sm font-medium bg-transparent text-green-400">
              Done
            </span>
          ) : (
            <span className="text-center px-1 py-[2px] rounded-lg text-sm font-medium bg-cardTagBg uppercase text-[#FBBF24] flex items-center gap-1">
              New <HiSparkles />
            </span>
          )}
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-medium text-gray-300 mb-2 truncate">
          {d?.name}
        </h3>
        <div className="flex items-center">
          <Image
            width={150}
            height={150}
            className="w-24 h-24 object-cover rounded-lg mr-3"
            //   src="/images/CardImg.svg"
            src={d?.project_info.project_display_image}
            alt="Spinblade Matic Giveaway Proof"
          />
          <span className="text-base text-gray-400">
            {d?.campaign_reward_data.reward_title}
          </span>
        </div>
      </div>
      <div className="py-2 flex justify-start items-center">
        <div className="flex -space-x-2">
          <FaUsers size={20} className="text-indigo-400 mr-3 mt-1" />
          {d &&
            d?.quester_details &&
            d?.quester_details.questers_pics &&
            d?.quester_details.questers_pics.map((item, index) => {
              console.log(item);
              return (
                <Image
                  key={index}
                  width={50}
                  height={50}
                  className="inline-block w-6 h-6 rounded-full ring-2 ring-[#272B30]"
                  src={
                    item ||
                    "https://pbs.twimg.com/profile_images/1429067381511311368/IW-5B8s3_400x400.png"
                  }
                  alt={`User ${index + 1}`}
                />
              );
            })}
        </div>
        <span className="text-xs text-[#AEB1B3] font-semibold mt-1 ml-2">
          +{formatQuesterCount(d?.quester_details.questers_count)}
        </span>
      </div>
    </div>
  );
};

export default Card;
