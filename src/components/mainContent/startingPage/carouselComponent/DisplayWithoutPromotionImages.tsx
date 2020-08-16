import React from 'react';
import { ImgWrapper, ImgElement } from './DisplayImages.style';

interface IProps {
  imgArr: string[];
}

export const DisplayWithoutPromotionImages = React.memo(({ imgArr }: IProps) => {
  const arr = imgArr.map((value, index) => {
    return (
      <ImgWrapper key={index}>
        <ImgElement src={value} alt="promotion" />
      </ImgWrapper>
    );
  });

  return <>{arr}</>;
});
