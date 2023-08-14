import * as React from "react";

import Tabs from "./components/ui/tabs";
import useFetch from "./hooks/useFetch";
import beersApi from "./apis/getAllBeers";
import BeerList, { BeerListProps } from "./components/beerLists";
import Button from "./components/ui/button";

const tabs = [
  { name: "All Beers", key: "all-beers" },
  { name: "My Beers", key: "my-beers" },
];

export default function App() {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0].key);
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
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <Tabs
        tabItems={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
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
          <div className='flex my-4 justify-center'>
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
