import * as React from "react";
import useFetch from "../hooks/useFetch";
import beersApi from "../apis/getAllBeers";
import BeerList, { BeerListProps } from "../components/beerLists";
import Button from "../components/ui/button";

export default function AllBeers() {
  const [page, setPage] = React.useState<number>(1);
  const getBeers = useFetch(beersApi.getAllBeers);

  React.useEffect(() => {
    getBeers.request(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const beerData = React.useMemo(() => {
    if (getBeers.data && getBeers.data.length) {
      return getBeers.data.map((beer: any) => {
        const { id, name, tagline, description, image_url, ingredients } = beer;
        const ingredientsArray = Object.keys(ingredients);
        return {
          id,
          name,
          tagline,
          description,
          image_url,
          ingredients: ingredientsArray,
        };
      });
    }
  }, [getBeers.data]);
  return (
    <div className='mb-5'>
      {getBeers.loading && (
        <p className='text-xs p-4'>Fetching Beer lists...</p>
      )}
      {beerData && (beerData as BeerListProps[])?.length ? (
        <>
          <ul role='list' className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {(beerData as any).map((beer: BeerListProps) => (
              <BeerList beer={beer} key={beer.id} />
            ))}
          </ul>
          <div className='flex my-4 justify-center mb-5'>
            <Button
              buttonType='link'
              label='Load More'
              onClick={handleLoadMore}
            />
          </div>
        </>
      ) : (
        <p className='text-xs p-4'>No beers found</p>
      )}
    </div>
  );
}
