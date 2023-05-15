import Image from "next/image";
import { FaStopwatch, FaUsers } from "react-icons/fa";

const PolygonCard = () => {
  return (
    <>
      {/* DONE BADGE CARD */}
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
          <div className="flex items-center text-gray-500">
            {/* <FaStopwatch className="w-4 h-4 mr-1 text-[#10B981]" /> */}
            {/* <span className="mr-2 font-medium text-xs text-[#10B981]">
            16 days left
          </span> */}
            <FaStopwatch className="w-4 h-4 mr-1 text-gray-500" />
            <span className="mr-2 font-medium text-xs text-gray-500">
              16 days left
            </span>
            <span className="border border-green-400 text-center px-2 rounded-md text-sm font-medium bg-transparent text-green-400">
              Done
            </span>
            {/* <span className="text-center px-2 py-1 rounded-full text-sm font-medium bg-cardTagBg uppercase text-[#FBBF24]">
            New ✨
          </span> */}
          </div>
        </div>
        <div className="py-3">
          <h3 className="text-xl font-medium text-gray-300 mb-2">
            Spinblade 100 MATIC Giveaway
          </h3>
          <div className="flex items-center">
            <Image
              width={15}
              height={15}
              className="w-24 h-24 object-cover rounded-lg mr-3"
              src="/images/CardImg.svg"
              alt="Spinblade Matic Giveaway Proof"
            />
            <span className="text-base text-gray-400">
              Spinblade Matic Giveaway Proof
            </span>
          </div>
        </div>
        <div className="py-2 flex justify-start items-center">
          <div className="flex -space-x-2">
            <FaUsers size={20} className="text-indigo-400 mr-3 mt-1" />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="User 1"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/men/82.jpg"
              alt="User 2"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="User 3"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="User 4"
            />
          </div>
          <span className="text-xs text-[#AEB1B3] font-semibold mt-1 ml-2">
            +12.4K
          </span>
        </div>
      </div>

      {/* NEW BADGE CARD */}
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
          <div className="flex items-center text-gray-500">
            <FaStopwatch className="w-4 h-4 mr-1 text-[#10B981]" />
            <span className="mr-2 font-medium text-xs text-[#10B981]">
              16 days left
            </span>
            {/* <FaStopwatch className="w-4 h-4 mr-1 text-gray-500" /> */}
            <span className="mr-2 font-medium text-xs text-gray-500">
              16 days left
            </span>
            {/* <span className="border border-green-400 text-center px-2 rounded-md text-sm font-medium bg-transparent text-green-400">
              Done
            </span> */}
            <span className="text-center px-2 py-1 rounded-full text-sm font-medium bg-cardTagBg uppercase text-[#FBBF24]">
              New ✨
            </span>
          </div>
        </div>
        <div className="py-3">
          <h3 className="text-xl font-medium text-gray-300 mb-2">
            Spinblade 100 MATIC Giveaway
          </h3>
          <div className="flex items-center">
            <Image
              width={15}
              height={15}
              className="w-24 h-24 object-cover rounded-lg mr-3"
              src="/images/CardImg.svg"
              alt="Spinblade Matic Giveaway Proof"
            />
            <span className="text-base text-gray-400">
              Spinblade Matic Giveaway Proof
            </span>
          </div>
        </div>
        <div className="py-2 flex justify-start items-center">
          <div className="flex -space-x-2">
            <FaUsers size={20} className="text-indigo-400 mr-3 mt-1" />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="User 1"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/men/82.jpg"
              alt="User 2"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="User 3"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="User 4"
            />
          </div>
          <span className="text-xs text-[#AEB1B3] font-semibold mt-1 ml-2">
            +12.4K
          </span>
        </div>
      </div>

      {/* WARNING CARD */}
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
          <div className="flex items-center text-gray-500">
            <FaStopwatch className="w-4 h-4 mr-1 text-red-500" />
            <span className="mr-2 font-medium text-xs text-red-500">
              16 days left
            </span>
          </div>
        </div>
        <div className="py-3">
          <h3 className="text-xl font-medium text-gray-300 mb-2">
            Spinblade 100 MATIC Giveaway
          </h3>
          <div className="flex items-center">
            <Image
              width={15}
              height={15}
              className="w-24 h-24 object-cover rounded-lg mr-3"
              src="/images/CardImg.svg"
              alt="Spinblade Matic Giveaway Proof"
            />
            <span className="text-base text-gray-400">
              Spinblade Matic Giveaway Proof
            </span>
          </div>
        </div>
        <div className="py-2 flex justify-start items-center">
          <div className="flex -space-x-2">
            <FaUsers size={20} className="text-indigo-400 mr-3 mt-1" />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="User 1"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/men/82.jpg"
              alt="User 2"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="User 3"
            />
            <Image
              width={50}
              height={50}
              className="inline-block w-6 h-6 rounded-full ring-2 ring-[#111315]"
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="User 4"
            />
          </div>
          <span className="text-xs text-[#AEB1B3] font-semibold mt-1 ml-2">
            +12.4K
          </span>
        </div>
      </div>
    </>
  );
};

export default PolygonCard;
