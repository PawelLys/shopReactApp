import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../reducers';
import {
  fetchCPUProduct,
  fetchGraphicCardProduct,
  fetchCPU,
  fetchGraphic,
  brandFilterAction,
  producerFilterAction,
  IProductDetails,
  IProduct,
  IProductTypes,
} from '../../../actions';
import { CarouselComponent } from '../startingPage/carouselComponent';
import { TitleLinks } from './aditionalComponents/TitleLinks';
import { PriceDisplay } from './aditionalComponents/PriceDisplay';
import * as Styled from './ProductDetails.style';

const initProductDetailsObject = {
  images: [],
  specifications: [],
  id: -1,
  family: '',
};

const initProductObject = {
  id: -1,
  name: '',
  price: '',
  image: '',
  discounted: false,
  brand: '',
  type: '',
};

export const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>(initProductObject);
  const [productDetails, setproductDetails] = useState<IProductDetails>(initProductDetailsObject);
  const productsDetails = useSelector((state: StoreState) => state.productsDetails);
  const products = useSelector((state: StoreState) => state.products);
  const filters = useSelector((state: StoreState) => state.filters);
  const dispatch = useDispatch();

  const { id } = useParams();
  const type = useLocation().pathname.split('/')[1];

  useEffect(() => {
    if (id) {
      const numID = parseInt(id);
      if (type === 'CPU') {
        if (products.CPU.length === 0) dispatch(fetchCPU());
        if (productsDetails.CPU.length === 0) {
          dispatch(fetchCPUProduct(numID));
        } else {
          let check = true;
          productsDetails.CPU.forEach((product) => product.id === numID && (check = false));
          if (check) dispatch(fetchCPUProduct(numID));
          else {
            setproductDetails(productsDetails.CPU.find((value) => value.id === numID) || initProductDetailsObject);
            setProduct(products.CPU.find((value) => value.id === numID) || initProductObject);
          }
        }
      } else if (type === 'graphicCard') {
        if (products.graphicCards.length === 0) dispatch(fetchGraphic());
        if (productsDetails.graphicCards.length === 0) {
          if (id) dispatch(fetchGraphicCardProduct(numID));
        } else {
          let check = true;
          productsDetails.graphicCards.forEach((product) => product.id === numID && (check = false));
          if (check) {
            dispatch(fetchGraphicCardProduct(numID));
          } else {
            setproductDetails(
              productsDetails.graphicCards.find((value) => value.id === numID) || initProductDetailsObject
            );
            setProduct(products.graphicCards.find((value) => value.id === numID) || initProductObject);
          }
        }
      }
    }
  }, [productsDetails, products]);

  const onBrandClick = () => {
    if (filters.brand[type as IProductTypes].filter((value) => value !== product.brand))
      dispatch(brandFilterAction(type as IProductTypes, product.brand));
  };

  const onProducerClick = () => {
    if (filters.producer[type as IProductTypes].filter((value) => value !== product.type))
      dispatch(producerFilterAction(type as IProductTypes, product.type));
  };

  const FindTypeAndReturnDescription = (type: string) => {
    const x = productDetails.specifications.find((value) => value.type === type);
    if (x) return x.description;
    else return null;
  };

  if (productDetails.id < 0) return <div className="loader" />;
  else
    return (
      <Styled.MainWrapper>
        <Styled.TopWrapper>
          <Styled.PhotoWrapper>
            <CarouselComponent withoutPromotions imgArr={productDetails.images} />
          </Styled.PhotoWrapper>
          <Styled.MainInfoWrapper>
            <Styled.LinksWrapper>
              {product.type ? (
                <TitleLinks
                  secondLink={{ link: type, title: product.type }}
                  brand={type === 'graphicCard' ? product.brand : undefined}
                  firstLink={{ link: type, title: productDetails.family }}
                  brandCallback={onBrandClick}
                  producerCallback={onProducerClick}
                />
              ) : (
                <TitleLinks
                  secondLink={{ link: type, title: product.brand }}
                  brandCallback={onBrandClick}
                  producerCallback={onProducerClick}
                />
              )}
            </Styled.LinksWrapper>
            <Styled.Title>{product.name}</Styled.Title>
            <Styled.UnderTitleWrapper>
              <Styled.UnderTitle>
                Producer: <Styled.Producer to="/">{product.brand}</Styled.Producer>
              </Styled.UnderTitle>
              <Styled.UnderTitle>SKU: XXXX-YYYY-XXXX-YYYY-ZZZZ</Styled.UnderTitle>
            </Styled.UnderTitleWrapper>
            <Styled.ProductInfoWrapper>
              <Styled.ProductInfo>
                {productDetails.specifications.length > 0 && (
                  <>
                    <Styled.Info>
                      {productDetails.specifications[0].type}:
                      <Styled.InfoDescription>
                        {FindTypeAndReturnDescription(productDetails.specifications[0].type)}
                      </Styled.InfoDescription>
                    </Styled.Info>
                    <Styled.Info>
                      {productDetails.specifications[1].type}:
                      <Styled.InfoDescription>
                        {FindTypeAndReturnDescription(productDetails.specifications[1].type)}
                      </Styled.InfoDescription>
                    </Styled.Info>
                    <Styled.Info>
                      {productDetails.specifications[2].type}:
                      <Styled.InfoDescription>
                        {FindTypeAndReturnDescription(productDetails.specifications[2].type)}
                      </Styled.InfoDescription>
                    </Styled.Info>
                  </>
                )}
              </Styled.ProductInfo>
              <Styled.ProductPrice>
                <PriceDisplay product={product} type={type} />
              </Styled.ProductPrice>
            </Styled.ProductInfoWrapper>
          </Styled.MainInfoWrapper>
        </Styled.TopWrapper>
        <Styled.BottomWrapper>
          <Styled.BottomSpecTitle>Specification</Styled.BottomSpecTitle>
          <Styled.BottomSpecList>
            {productDetails.specifications.map((value, index) => {
              return (
                <Styled.BottomSpecItem key={index}>
                  <Styled.ItemName>{value.type}</Styled.ItemName>
                  <Styled.ItemContent>{value.description}</Styled.ItemContent>
                </Styled.BottomSpecItem>
              );
            })}
          </Styled.BottomSpecList>
        </Styled.BottomWrapper>
      </Styled.MainWrapper>
    );
};
