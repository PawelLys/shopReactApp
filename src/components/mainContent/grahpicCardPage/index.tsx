import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../reducers';
import { fetchGraphic } from '../../../actions';
import StandardTemplate from '../productPage/StandardTemplate';

export const GrahpicCardPage = () => {
  const product = useSelector((state: StoreState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.graphicCards.length === 0) dispatch(fetchGraphic());
  }, []);

  return (
    <StandardTemplate
      link={product.menu[0].link}
      title={product.menu[0].title}
      product={product.graphicCards}
    />
  );
};
