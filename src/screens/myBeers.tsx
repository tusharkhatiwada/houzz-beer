import * as React from "react";

import Button from "../components/ui/button";
import { useMyBeers } from "../hooks/useMyBeers";
import Modal from "../components/ui/modal";
import NewBeerForm from "../components/newBeerForm";
import BeerList, { BeerListProps } from "../components/beerLists";

export interface NewBeerProps {
  id?: string;
  name: string;
  tagline: string;
  description: string;
  image?: string;
}
export default function MyBeers() {
  const [open, setOpen] = React.useState<boolean>(false);
  const myBeers = useMyBeers();

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div className=''>
      <div className='flex justify-end'>
        <Button label='Add a new beer' onClick={() => setOpen(true)} />
      </div>
      {myBeers.length ? (
        <>
          <ul role='list' className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {(myBeers as any).map((beer: BeerListProps) => (
              <BeerList beer={beer} key={beer.id} />
            ))}
          </ul>
        </>
      ) : (
        <div className='flex flex-col gap-3 p-4 h-[80vh] justify-center items-center bg-gray-100 my-4'>
          <p className='text-sm'>Nothing to see yet</p>
          <div className='flex gap-2 items-center'>
            <Button
              label='Click here'
              buttonType='link'
              onClick={() => setOpen(true)}
            />
            <p className='text-sm'> to add your first beer!</p>
          </div>
        </div>
      )}
      <Modal open={open} handleClose={handleModalClose} title='Add a New Beer'>
        <NewBeerForm handleModalClose={handleModalClose} />
      </Modal>
    </div>
  );
}
