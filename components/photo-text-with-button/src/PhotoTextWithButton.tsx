import React from 'react';
import {Image} from "@valourus1142/common/src";

export interface PhotoTextWithButtonProps {
  img: Image
  text: string;
  button: JSX.Element;
}


export const PhotoTextWithButton = ({ text, button, img }: PhotoTextWithButtonProps) => {

  return (
    <div>
      <img src={img.src} alt={img.alt} />
      <p>{text}</p>
      {button}
    </div>
  )
}
