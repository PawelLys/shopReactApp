import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCardElement, ICard } from '../../../actions';
import * as Styled from './index.style';

export default ({ obj }: { obj: ICard }) => {
  const [moreBtnActive, setMoreBtnActive] = useState(false);

  const dispatch = useDispatch();

  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) setMoreBtnActive(false);
  };

  return (
    <Styled.ProductItemInfoIconWrapper
      ref={node}
      shouldDisplay={moreBtnActive}
      onClick={() => setMoreBtnActive(!moreBtnActive)}>
      <Styled.ProductItemInfoIcon iconName="MoreVertical" />
      {moreBtnActive && (
        <Styled.ProductItemInfoModal>
          <Styled.InfoModalBtn onClick={() => dispatch(deleteCardElement(obj.id, obj.type))}>
            <Styled.InfoModalBtnIcon iconName="Delete" />
            <Styled.InfoModalBtnText>Delete from card</Styled.InfoModalBtnText>
          </Styled.InfoModalBtn>
        </Styled.ProductItemInfoModal>
      )}
    </Styled.ProductItemInfoIconWrapper>
  );
};
