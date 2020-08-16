import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../reducers';
import { fetchArrivals, IProductTypes } from '../../../actions';
import StandardTemplate from '../productPage/StandardTemplate';

export const NewArrivalsPage = () => {
  const arrivals = useSelector((state: StoreState) => state.arrivals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (arrivals.length === 0) dispatch(fetchArrivals());
  }, []);

  return <StandardTemplate link={'arrivals' as IProductTypes} title={'arrivals'} product={arrivals} linkCase />;
};
