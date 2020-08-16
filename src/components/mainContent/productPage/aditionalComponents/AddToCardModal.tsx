import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../../../reducers';
import { fetchGraphicCardProduct, fetchCPUProduct, IProduct } from '../../../../actions';
import * as Styled from './AddToCardModal.style';

interface IProps {
  modalProduct: { id: number; type: string };
  closeModal: () => void;
}

const Modal: React.FunctionComponent<{}> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root') || document.createElement('div');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return createPortal(children, el);
};

export const AddToCardModal = ({ modalProduct, closeModal }: IProps) => {
  const products = useSelector((state: StoreState) => state.products);

  const dispatch = useDispatch();
  const history = useHistory();

  const node = useRef<HTMLDivElement>(null);

  const { id, type } = modalProduct;

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    if (type === 'grahpicCard' && !products.graphicCards[id]) dispatch(fetchGraphicCardProduct(id));
    else if (type === 'CPU' && !products.CPU[id]) dispatch(fetchCPUProduct(id));

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) closeModal();
  };

  const emptyProduct = { id: 0, name: '', price: '', image: '', discounted: false, brand: '', type: '' };
  const product: IProduct =
    type === 'graphicCard' ? products.graphicCards[id - 1] : type === 'CPU' ? products.CPU[id - 1] : emptyProduct;

  return id > 0 && type.length > 0 ? (
    <Modal>
      <Styled.ModalWrapper>
        <Styled.ModalContent ref={node}>
          <Styled.TopContent>
            <Styled.TopCheckMarkIcon iconName="CheckMark" />
            <Styled.TopContentText>Product added to card</Styled.TopContentText>
            <Styled.TopCloseIcon iconName="Cancel" onClick={() => closeModal()} />
          </Styled.TopContent>
          <Styled.BottomContent>
            <Styled.BottomContentProduct>
              <Styled.ProductImgContainer>
                <Styled.ProductImg src={product.image} alt="Product" />
              </Styled.ProductImgContainer>
              <Styled.ProductDescription>
                <p style={{ fontWeight: 500, marginBottom: '.3rem' }}>{product.name}</p>
                {product.discounted ? product.newPrice : product.price}$
              </Styled.ProductDescription>
            </Styled.BottomContentProduct>
            <Styled.BottomBtnWrapper>
              <Styled.BottomBtn onClick={() => closeModal()}>
                <Styled.BtnNexIcon iconName="ChevronLeft" />
                Continue shopping
              </Styled.BottomBtn>
              <Styled.BottomBtn rightIconDirection={true} onClick={() => history.push('/card')}>
                <Styled.BtnNexIcon iconName="ChevronRight" />
                <p style={{ marginBottom: '.1rem' }}>Go to card</p>
              </Styled.BottomBtn>
            </Styled.BottomBtnWrapper>
          </Styled.BottomContent>
        </Styled.ModalContent>
      </Styled.ModalWrapper>
    </Modal>
  ) : null;
};
