import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../../reducers';
import { ImgLinkWrapper, ImgElement } from './DisplayImages.style';
import { CardInsidePromotion } from './CardInsidePromotion';

export const DisplayPromotionImages = React.memo(() => {
  const promotions = useSelector((state: StoreState) => state.promotions);

  const arr = promotions.map((value, index) => {
    return (
      <ImgLinkWrapper key={index} to={`/${value.type}/${value.id}`}>
        <ImgElement src={value.image} alt="promotion" />
        <CardInsidePromotion newPrice={value.newPrice || ''} discountValue={value.discount} />
      </ImgLinkWrapper>
    );
  });

  return <>{arr}</>;
});
