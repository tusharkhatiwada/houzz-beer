import * as React from "react";

import Tooltip from "./ui/tooltip";

export interface BeerListProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients: string[];
}

export default function BeerList({ beer }: { beer: BeerListProps }) {
  const ingredients = React.useMemo(
    () => beer.ingredients.join(", "),
    [beer.ingredients],
  );
  return (
    <li
      key={beer.id}
      className='flex gap-x-4 py-5 px-2 items-center rounded shadow-lg my-2 hover:bg-primary/5 mx-3'
    >
      <div className='flex-none  group relative'>
        <img
          className='h-24 w-24 object-contain'
          src={beer.image_url}
          alt={beer.name}
        />
        <Tooltip>
          <p className='text-[10px] text-gray-300'>
            Ingredients: {ingredients}
          </p>
        </Tooltip>
      </div>
      <div className='min-w-0'>
        <h2 className='text-xl font-medium'>{beer.name}</h2>
        <p className='text-gold py-2'>{beer.tagline}</p>
        <p className='text-xs'>{beer.description}</p>
      </div>
    </li>
  );
}
