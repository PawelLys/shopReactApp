import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col } from 'react-bootstrap';
import { fetchGraphic, fetchCPU, fetchPromotions, fetchArrivals, IArrivals, IProduct } from '../../../actions';
import { StoreState } from '../../../reducers';
import * as Styled from './index.style';

import { CarouselComponent } from './carouselComponent';
import { Guarantee, SplitPayment } from './promotionCards';
import FeaturedProducts from './mainOptions/FeaturedProducts';
import ScrollPageToTop from '../../ScrollPageToTop';

export const StartingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: StoreState) => state);

  useEffect(() => {
    if (state.promotions.length === 0) dispatch(fetchPromotions());
    if (state.arrivals.length === 0) dispatch(fetchArrivals());
    if (state.products.graphicCards.length === 0) dispatch(fetchGraphic());
    if (state.products.CPU.length === 0) dispatch(fetchCPU());
  }, []);

  ScrollPageToTop();

  return (
    <>
      <Container>
        <Styled.BannerRow>
          <Col md={7}>
            <CarouselComponent imgArr={state.promotions.map((value) => value.image)} />
          </Col>
          <Styled.BannerCol md={5}>
            <Styled.Col>
              <Guarantee />
            </Styled.Col>
            <Styled.Col>
              <SplitPayment />
            </Styled.Col>
          </Styled.BannerCol>
        </Styled.BannerRow>
      </Container>
      <FeaturedProducts<IArrivals> content={'New Arrivals'} optionArr={state.arrivals} goto={'arrivals'} />
      <FeaturedProducts<IProduct>
        content={'Graphic Cards'}
        optionArr={state.products.graphicCards}
        goto={'graphicCard'}
      />
      <FeaturedProducts<IProduct> content={'CPU'} optionArr={state.products.CPU} goto={'CPU'} />
    </>
  );
};
