import React from 'react';

export interface PhotoTextWithButtonProps {
  src: string;
  text: string;
  button: JSX.Element;
}


export const PhotoTextWithButton = ({ text, button, src }: PhotoTextWithButtonProps) => {

  return (
    <div>
      <img src={src} alt={'photo'} />
      <p>{text}</p>
      {button}
    </div>
  )
}
