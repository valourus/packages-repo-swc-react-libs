import {PhotoTextWithButton} from "./PhotoTextWithButton";
import React, { FC } from "react";

interface PhotoTextButtonMarcoProps {
  otherProps: any
}

const PhotoTextButtonMarcoComp = async (props: PhotoTextButtonMarcoProps) => {

  console.log(props);

  const product = await  fetch('https://dummyjson.com/products/1').then(e => e.json());

  console.log(product);
  return (
    <PhotoTextWithButton img={{
      src: 'dfasfsdf',
      alt: 'dasdas'
    }} text={''} button={<button>tedfds</button>}/>
  )
}

export const PhotoTextButtonMarco = PhotoTextButtonMarcoComp as unknown as FC<PhotoTextButtonMarcoProps>;
