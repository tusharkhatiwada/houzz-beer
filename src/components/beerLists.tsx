import * as React from "react";

import Tooltip from "./ui/tooltip";

import houzzBear from "../assets/houzz-beer.png";

export interface BeerListProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  ingredients?: string[];
}

export default function BeerList({ beer }: { beer: BeerListProps }) {
  const ingredients = React.useMemo(
    () => beer.ingredients && beer.ingredients.join(", "),
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
          src={beer.image_url || houzzBear}
          alt={beer.name}
        />
        {ingredients && (
          <Tooltip>
            <p className='text-[10px] text-gray-300'>
              Ingredients: {ingredients}
            </p>
          </Tooltip>
        )}
      </div>
      <div className='min-w-0 px-3'>
        <h2 className='text-xl font-medium'>{beer.name}</h2>
        <p className='text-gold py-2'>{beer.tagline}</p>
        <p className='text-sm break-words'>{beer.description}</p>
      </div>
    </li>
  );
}
