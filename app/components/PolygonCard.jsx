import useSWR from "swr";
import Card from "./Card";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PolygonCard = () => {
  const [visible, setVisible] = useState(6);
  const [showMore, setShowMore] = useState(true);

  const { data, error } = useSWR(
    "http://dev-api.wall.app/api/v1/core/campaigns/",
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

  if (!data) {
    return <Loader />;
  }

  if (data) {
    console.log(data.results);
  }

  const handleShowMore = () => {
    setVisible((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisible(6);
    setShowMore(true);
  };

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
