import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCardAmountAction, ICard } from '../../../actions';
import useDebounce from '../../useDebounce';
import { CounterDisplay } from '../productPage/aditionalComponents/CounterDisplay';

interface IProps {
  product: ICard;
}

export default ({ product }: IProps) => {
  const { id, type, amount } = product;

  const [count, setCount] = useState(amount);

  const dispatch = useDispatch();
  const debounceCount = useDebounce(count, 500);

  useEffect(() => {
    if (debounceCount) {
      dispatch(setCardAmountAction(id, type, count));
    }
  }, [debounceCount]);

  return <CounterDisplay counter={count} setCounter={setCount} />;
};
