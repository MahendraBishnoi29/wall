import useSWR from "swr";
import Card from "./Card";
import Loader from "./Loader";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PolygonCard = () => {
  const { data, error } = useSWR(
    "http://dev-api.wall.app/api/v1/core/campaigns/",
    fetcher,
    {
      revalidateOnMount: true,
    }
  );

  if (!data) {
    return <Loader />;
  }

  if (data) {
    console.log(data.results);
  }

  return (
    <>
      {data
        ? data?.results.map((item) => {
            return <Card key={item.id} data={item} />;
          })
        : null}
    </>
  );
};

export default PolygonCard;
