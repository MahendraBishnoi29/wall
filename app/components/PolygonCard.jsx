import { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";

const PolygonCard = ({}) => {
  const { data, handleShowMore, handleShowLess, visible, error, showMore } =
    useContext(AppContext);

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      {data &&
        data.results.slice(0, visible).map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      {error && <p className="text-2xl text-red-500">{error?.message}</p>}
      <div className="flex items-center justify-center w-full mx-auto pb-2">
        {data && showMore ? (
          <button
            onClick={handleShowMore}
            className="outline-none bg-transparent border border-[#6366F1] text-center rounded-3xl text-white text-sm font-medium py-2 px-4 hover:bg-[#5a5ce6] transition ease-linear delay-75"
          >
            View More
          </button>
        ) : (
          <div className="flex items-center justify-center w-full mx-auto pb-2">
            <button
              onClick={handleShowLess}
              className="outline-none bg-transparent border border-[#6366F1] text-center rounded-3xl text-white text-sm font-medium py-2 px-4 hover:bg-[#5a5ce6] transition ease-linear delay-75"
            >
              View Less
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PolygonCard;
