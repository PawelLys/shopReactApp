import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../reducers';
import { fetchCPU } from '../../../actions';
import StandardTemplate from '../productPage/StandardTemplate';

export const CPUPage = () => {
  const product = useSelector((state: StoreState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.CPU.length === 0) dispatch(fetchCPU());
  }, []);

  return <StandardTemplate link={product.menu[1].link} title={product.menu[1].title} product={product.CPU} />;
};
