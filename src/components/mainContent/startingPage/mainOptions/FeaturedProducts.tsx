import React, { memo, PropsWithChildren } from 'react';
import { useHistory } from 'react-router-dom';
import { GreyBox } from './GreyBox';
import * as Styled from './FeaturedProducts.style';

import { ITypes } from '../../../../actions';

interface IProps<T> {
  optionArr: T[];
  content: string;
  goto: string;
}

const FeaturedProducts = <T extends ITypes>(props: PropsWithChildren<IProps<T>>) => {
  const history = useHistory();

  const displayExamples = (value: T, index: number) => {
    return (
      <Styled.Examples
        key={index}
        onClick={() => history.push(`/${props.goto === 'arrivals' ? value.type : props.goto}/${value.id}`)}>
        <Styled.ExamplesImg src={value.image} alt="Product" />
        <Styled.ExapmlesDetails>
          <span>{value.name}</span>
          <p>${value.discounted ? value.newPrice : value.price}</p>
          <Styled.ExamplesMoreButton>See details</Styled.ExamplesMoreButton>
        </Styled.ExapmlesDetails>
      </Styled.Examples>
    );
  };

  const renderThreeRandomElementsFromArray = () => {
    const { optionArr } = props;
    const helperArr: number[] = [];
    const renderArr: JSX.Element[] = [];
    let i = 0;
    while (i < 3) {
      const randomNumber = Math.floor(Math.random() * optionArr.length);
      if (!helperArr.includes(randomNumber)) {
        helperArr.push(randomNumber);
        renderArr.push(displayExamples(optionArr[randomNumber], i));
        i++;
      }
    }

    return renderArr.map((value) => value);
  };

  return (
    <Styled.Container>
      <Styled.RowContainer>
        <GreyBox {...props} history={history} />
        <Styled.RowExamples>
          {props.optionArr.length <= 3
            ? props.optionArr.map((value, index) => displayExamples(value, index))
            : renderThreeRandomElementsFromArray()}
        </Styled.RowExamples>
        <Styled.MoreButtonContainer onClick={() => history.push(`/${props.goto}`)}>
          more
          <Styled.ButtonIcon iconName="PageRight" />
        </Styled.MoreButtonContainer>
      </Styled.RowContainer>
    </Styled.Container>
  );
};

export default memo(FeaturedProducts) as typeof FeaturedProducts;
