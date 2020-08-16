import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../reducers';

export default () => {
  const ref = useSelector((state: StoreState) => state.ref);

  useEffect(() => {
    if (ref) ref.scrollIntoView({ block: 'start' });
  }, []);
  return null;
};
