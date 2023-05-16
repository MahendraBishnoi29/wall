import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full pt-14">
      <div className="border-t-4 border-b-4 border-gray-400 w-8 h-8 mr-2 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
