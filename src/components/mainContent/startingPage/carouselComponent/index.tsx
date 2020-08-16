import React, { useState, useEffect } from 'react';
import { DisplayPromotionImages } from './DisplayPromotionImages';
import { DisplayWithoutPromotionImages } from './DisplayWithoutPromotionImages';
import * as Styled from './index.style';

interface ICarouselComponentProps {
  withoutPromotions?: boolean;
  imgArr: string[];
}

export const CarouselComponent = ({ withoutPromotions, imgArr }: ICarouselComponentProps) => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => onRightBtnClick(), 6000);
    return () => clearTimeout(timeout);
  }, [activeBtn]);

  const onLeftBtnClick = () => {
    if (x === 0) {
      setX(-130 * (imgArr.length - 1));
    } else setX(x + 130);

    if (activeBtn === 0) setActiveBtn(imgArr.length - 1);
    else setActiveBtn(activeBtn - 1);
  };

  const onRightBtnClick = () => {
    if (x === -130 * (imgArr.length - 1)) {
      setX(0);
    } else setX(x - 130);

    if (activeBtn === imgArr.length - 1) setActiveBtn(0);
    else setActiveBtn(activeBtn + 1);
  };

  const setCarouselImg = (index: number) => {
    if (index * -130 !== x) {
      setX(index * -130);
      setActiveBtn(index);
    }
  };

  return (
    <Styled.CarouselContainer>
      <Styled.CarouselLeftBtn onClick={onLeftBtnClick}>
        <Styled.ChevronBtn iconName="ChevronLeft" />
      </Styled.CarouselLeftBtn>
      {imgArr.length > 0 && (
        <Styled.Carousel x={x}>
          {withoutPromotions ? <DisplayWithoutPromotionImages imgArr={imgArr} /> : <DisplayPromotionImages />}
        </Styled.Carousel>
      )}
      <Styled.CarouselRigthBtn onClick={onRightBtnClick}>
        <Styled.ChevronBtn iconName="ChevronRight" />
      </Styled.CarouselRigthBtn>
      <Styled.BelowNavBtnContainer quantity={3}>
        {imgArr.map((v, index) => {
          return (
            <Styled.BelowNavBtn
              key={index}
              active={activeBtn === index}
              onClick={() => setCarouselImg(index)}
            />
          );
        })}
      </Styled.BelowNavBtnContainer>
    </Styled.CarouselContainer>
  );
};
