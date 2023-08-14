import * as React from "react";

import houzzBeer from "../assets/houzz-beer.png";

import Input from "./ui/input";
import TextArea from "./ui/input/textarea";
import Button from "./ui/button";
import { useAddMyBeers } from "../hooks/useAddMyBeers";

interface NewBeerFormProps {
  name: string;
  tagline: string;
  description: string;
}

export default function NewBeerForm({
  handleModalClose,
}: {
  handleModalClose: () => void;
}) {
  const id = React.useId();
  const dispatch = useAddMyBeers();
  const [form, setForm] = React.useState<NewBeerFormProps>({
    name: "",
    tagline: "",
    description: "",
  });
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddNewBeer = () => {
    dispatch({
      type: "add",
      beer: { ...form, id },
    });
    handleClose();
  };

  const handleClose = () => {
    setForm({
      name: "",
      tagline: "",
      description: "",
    });
    handleModalClose();
  };
  return (
    <div className=''>
      <img src={houzzBeer} alt='Houzz Beer' className='h-40 border' />
      <Input
        name='name'
        placeholder='Beer Name*'
        onChange={handleInputChange}
      />
      <Input name='tagline' placeholder='Genre*' onChange={handleInputChange} />
      <TextArea
        name='description'
        placeholder='Description*'
        onChange={handleInputChange}
      />
      <div className='mt-4 justify-end flex gap-3'>
        <Button label='Cancel' buttonType='secondary' onClick={handleClose} />
        <Button label='Save' onClick={handleAddNewBeer} />
      </div>
    </div>
  );
}
