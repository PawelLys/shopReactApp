import React, { memo, PropsWithChildren, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../reducers';
import * as Styled from './StandardTemplate.style';
import { setCardAction, IProductTypes, IProduct } from '../../../actions';
import { TitleLinks } from './aditionalComponents/TitleLinks';
import { FiltersDisplay } from './aditionalComponents/FiltersDisplay';
import { AddToCardModal } from './aditionalComponents/AddToCardModal';
import ScrollPageToTop from '../../ScrollPageToTop';

export interface IProps<T> {
  product: T[];
  title: string;
  link: IProductTypes;
  linkCase?: boolean;
}

const StandardTemplate = <T extends IProduct>(props: PropsWithChildren<IProps<T>>) => {
  const [modalProduct, setModalProduct] = useState({ id: 0, type: '' });
  const filters = useSelector((state: StoreState) => state.filters);
  const ref = useSelector((state: StoreState) => state.ref);

  const dispatch = useDispatch();

  useEffect(() => {
    if (ref) ref.scrollIntoView({ block: 'start' });
  }, []);

  ScrollPageToTop();

  const onCardBtnClick = (e: MouseEvent, id: number, type: string) => {
    e.preventDefault();
    setModalProduct({ id, type });
    dispatch(setCardAction(id, type));
  };

  const renderProductHelper = (product: T) => {
    return (
      <Styled.Product
        to={props.linkCase ? `/${product.type}/${product.id}` : `/${props.link}/${product.id}`}
        key={product.id}>
        <Styled.ProductCardBtn>
          <Styled.ProductCardBtnWrapper
            onClick={(e: MouseEvent) => onCardBtnClick(e, product.id, props.linkCase ? product.type : props.link)}>
            <Styled.ProductCardIcon iconName="ShoppingCart" />
          </Styled.ProductCardBtnWrapper>
        </Styled.ProductCardBtn>
        <Styled.ProductPhotoContainer>
          <Styled.ProductPhoto src={product.image} alt="Product" />
        </Styled.ProductPhotoContainer>
        <Styled.ProductTitle>{product.name}</Styled.ProductTitle>
        <Styled.ProductPrice>
          {product.discounted ? (
            <Styled.ProductNewPrice>
              <Styled.ProductOldPrice>${product.price}</Styled.ProductOldPrice>${product.newPrice}
            </Styled.ProductNewPrice>
          ) : (
            <>${product.price}</>
          )}
        </Styled.ProductPrice>
      </Styled.Product>
    );
  };

  const checkArrayByFilters = () => {
    const { brand, producer, price } = filters;
    const { link, product } = props;

    if (
      props.linkCase ||
      (brand[link].length === 0 &&
        producer[link].length === 0 &&
        price[link].minValue === 0 &&
        price[link].maxValue === 99999)
    )
      return product.map((product) => renderProductHelper(product));
    else if (
      brand[link].length === 0 &&
      producer[link].length > 0 &&
      price[link].minValue === 0 &&
      price[link].maxValue === 99999
    )
      return product.map((product) => (producer[link].includes(product.type) ? renderProductHelper(product) : null));
    else if (
      brand[link].length > 0 &&
      producer[link].length === 0 &&
      price[link].minValue === 0 &&
      price[link].maxValue === 99999
    )
      return product.map((product) => (brand[link].includes(product.brand) ? renderProductHelper(product) : null));
    else if (
      brand[link].length > 0 &&
      producer[link].length > 0 &&
      price[link].minValue === 0 &&
      price[link].maxValue === 99999
    )
      return product.map((product) => {
        if (producer[link].includes(product.type) && brand[link].includes(product.brand))
          return renderProductHelper(product);
        else return null;
      });
    else if (
      brand[link].length === 0 &&
      producer[link].length === 0 &&
      price[link].minValue > 0 &&
      price[link].maxValue === 99999
    )
      return product.map((product) => {
        if (product.discounted && product.newPrice) {
          if (parseFloat(product.newPrice) >= price[link].minValue) return renderProductHelper(product);
        } else {
          if (parseFloat(product.price) >= price[link].minValue) return renderProductHelper(product);
        }
        return null;
      });
    else if (
      brand[link].length > 0 &&
      producer[link].length === 0 &&
      price[link].minValue > 0 &&
      price[link].maxValue === 99999
    )
      return product.map((product) => {
        if (brand[link].includes(product.brand)) {
          if (product.discounted && product.newPrice) {
            if (parseFloat(product.newPrice) >= price[link].minValue) return renderProductHelper(product);
          } else {
            if (parseFloat(product.price) >= price[link].minValue) return renderProductHelper(product);
          }
        }
        return null;
      });
    else if (
      brand[link].length === 0 &&
      producer[link].length > 0 &&
      price[link].minValue > 0 &&
      price[link].maxValue === 99999
    )
      return product.map((product) => {
        if (producer[link].includes(product.type)) {
          if (product.discounted && product.newPrice) {
            if (parseFloat(product.newPrice) >= price[link].minValue) return renderProductHelper(product);
          } else {
            if (parseFloat(product.price) >= price[link].minValue) return renderProductHelper(product);
          }
        }
        return null;
      });
    else if (
      brand[link].length > 0 &&
      producer[link].length > 0 &&
      price[link].minValue > 0 &&
      price[link].maxValue === 99999
    )
      return product.map((product) => {
        if (producer[link].includes(product.type)) {
          if (brand[link].includes(product.brand)) {
            if (product.discounted && product.newPrice) {
              if (parseFloat(product.newPrice) >= price[link].minValue) return renderProductHelper(product);
            } else {
              if (parseFloat(product.price) >= price[link].minValue) return renderProductHelper(product);
            }
          }
        }
        return null;
      });
    else if (
      brand[link].length === 0 &&
      producer[link].length === 0 &&
      price[link].minValue === 0 &&
      price[link].maxValue < 99999
    )
      return product.map((product) => {
        if (product.discounted && product.newPrice) {
          if (parseFloat(product.newPrice) < price[link].maxValue) return renderProductHelper(product);
        } else {
          if (parseFloat(product.price) < price[link].maxValue) return renderProductHelper(product);
        }
        return null;
      });
    else if (
      brand[link].length === 0 &&
      producer[link].length === 0 &&
      price[link].minValue >= 0 &&
      price[link].maxValue < 99999
    )
      return product.map((product) => {
        if (product.discounted && product.newPrice) {
          if (
            parseFloat(product.newPrice) < price[link].maxValue &&
            parseFloat(product.newPrice) >= price[link].minValue
          )
            return renderProductHelper(product);
        } else {
          if (parseFloat(product.price) < price[link].maxValue && parseFloat(product.price) >= price[link].minValue)
            return renderProductHelper(product);
        }
        return null;
      });
    else if (
      brand[link].length === 0 &&
      producer[link].length > 0 &&
      price[link].minValue >= 0 &&
      price[link].maxValue < 99999
    )
      return product.map((product) => {
        if (producer[link].includes(product.type)) {
          if (product.discounted && product.newPrice) {
            if (
              parseFloat(product.newPrice) < price[link].maxValue &&
              parseFloat(product.newPrice) >= price[link].minValue
            )
              return renderProductHelper(product);
          } else {
            if (parseFloat(product.price) < price[link].maxValue && parseFloat(product.price) >= price[link].minValue)
              return renderProductHelper(product);
          }
        }
        return null;
      });
    else if (
      brand[link].length > 0 &&
      producer[link].length > 0 &&
      price[link].minValue >= 0 &&
      price[link].maxValue < 99999
    )
      return product.map((product) => {
        if (producer[link].includes(product.type)) {
          if (brand[link].includes(product.brand)) {
            if (product.discounted && product.newPrice)
              if (parseFloat(product.newPrice) >= price[link].minValue) return renderProductHelper(product);
              else {
                if (parseFloat(product.price) >= price[link].minValue) return renderProductHelper(product);
              }
          }
        }
        return null;
      });
    return null;
  };

  if (props.product.length === 0) return <div className="loader" />;
  else
    return (
      <Styled.Container>
        <AddToCardModal modalProduct={modalProduct} closeModal={() => setModalProduct({ id: 0, type: '' })} />
        <TitleLinks secondLink={{ link: props.link, title: props.title }} />
        {!props.linkCase && <FiltersDisplay type={props.link} filters={filters} />}
        {checkArrayByFilters()}
      </Styled.Container>
    );
};

export default memo(StandardTemplate) as typeof StandardTemplate;
