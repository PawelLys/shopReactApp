import React, { memo, useReducer, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { producerFilterAction, PriceFilterAction, IProductTypes } from '../../../actions';
import useDebounce from '../../useDebounce';
import { StoreState } from '../../../reducers';
import * as Styled from './NestedDisplayHelper.style';
import { booleanArrayReducer, actionTypeUpdate } from './arrayReducerComponent';
import { NestedDisplayHelperSubMenu } from './NestedDisplayHelperSubMenu';

interface IProps {
  content: string[];
  subContent: string[] | null;
  type: IProductTypes;
  burgerBtn: boolean;
}

export const LeftNavMenuDisplayHelper = memo(({ content, subContent, type, burgerBtn }: IProps) => {
  const [itemsHovered, setItemsHovered] = useReducer(
    booleanArrayReducer,
    content.map(() => false)
  );
  const [showMore, setShowMore] = useState(false);
  const [showMoreSubMenu, setShowMoreSubMenu] = useState(false);
  const [incorrectValue, setIncorrectValue] = useState(false);

  const activeItems = useSelector((state: StoreState) => state.filters.producer[type]);
  const priceFilter = useSelector((state: StoreState) => state.filters.price);
  const [minValue, setMinValue] = useState(priceFilter[type].minValue === 0 ? '' : `${priceFilter[type].minValue}`);
  const [maxValue, setMaxValue] = useState(priceFilter[type].maxValue === 99999 ? '' : `${priceFilter[type].maxValue}`);

  const dispatch = useDispatch();
  const history = useHistory();

  const debounceMinValue = useDebounce(parseFloat(minValue), 500);
  const debounceMaxValue = useDebounce(parseFloat(maxValue), 500);

  useEffect(() => {
    if (priceFilter[type].minValue === 0 && minValue !== '') setMinValue('');
  }, [priceFilter[type].minValue]);

  useEffect(() => {
    if (priceFilter[type].maxValue === 99999 && maxValue !== '') setMaxValue('');
  }, [priceFilter[type].maxValue]);

  useEffect(() => {
    setIncorrectValue(false);
    if (debounceMinValue) {
      if (!maxValue) {
        dispatch(PriceFilterAction(type, roundStringTo2Decimals(minValue)));
        setStateValueTo2Decimals('minValue');
      } else {
        if (parseFloat(maxValue) >= parseFloat(minValue)) {
          dispatch(PriceFilterAction(type, roundStringTo2Decimals(minValue), roundStringTo2Decimals(maxValue)));
          setStateValueTo2Decimals('maxValue');
          setStateValueTo2Decimals('minValue');
        } else setIncorrectValue(true);
      }
    }
    if (priceFilter[type].minValue !== 0 && minValue === '') {
      if (maxValue) dispatch(PriceFilterAction(type, 0, roundStringTo2Decimals(maxValue)));
      else dispatch(PriceFilterAction(type, 0));
    }
  }, [debounceMinValue]);

  useEffect(() => {
    setIncorrectValue(false);
    if (debounceMaxValue) {
      if (!minValue) {
        dispatch(PriceFilterAction(type, undefined, roundStringTo2Decimals(maxValue)));
        setStateValueTo2Decimals('maxValue');
      } else {
        if (parseFloat(maxValue) >= parseFloat(minValue)) {
          dispatch(PriceFilterAction(type, roundStringTo2Decimals(minValue), roundStringTo2Decimals(maxValue)));
          setStateValueTo2Decimals('maxValue');
          setStateValueTo2Decimals('minValue');
        } else setIncorrectValue(true);
      }
    }
    if (priceFilter[type].maxValue !== 99999 && maxValue === '') {
      if (minValue) dispatch(PriceFilterAction(type, roundStringTo2Decimals(minValue), 99999));
      else dispatch(PriceFilterAction(type, undefined, 99999));
    }
  }, [debounceMaxValue]);

  useEffect(() => {
    if (!showMore) setShowMoreSubMenu(false);
  }, [!showMore]);

  const roundStringTo2Decimals = (v: string) => Math.round((parseFloat(v) + Number.EPSILON) * 100) / 100;

  const setStateValueTo2Decimals = (type: 'minValue' | 'maxValue') =>
    type === 'minValue'
      ? setMinValue(roundStringTo2Decimals(minValue).toString())
      : setMaxValue(roundStringTo2Decimals(maxValue).toString());

  const checkBoxRenderHelper = (index: number, value: string) => {
    return (
      <Styled.ItemsCheckbox>
        <Styled.CheckboxWrapper>
          <Styled.WrapperInput active={activeItems.includes(value)}>
            <Styled.InputCircle iconName="CircleRing" />
            <Styled.InputCheckmark
              iconName="StatusCircleCheckmark"
              active={activeItems.includes(value)}
              hovered={itemsHovered[index]}
            />
          </Styled.WrapperInput>
        </Styled.CheckboxWrapper>
      </Styled.ItemsCheckbox>
    );
  };

  const setValuePriceFilter = (value: string, type: string) => {
    const intValue = parseFloat(value);
    if (intValue > 0 && intValue < 99999) {
      if (type === 'min') setMinValue(value);
      else if (type === 'max') setMaxValue(value);
    } else if (value === '') {
      if (type === 'min') {
        setMinValue('');
      } else if (type === 'max') {
        setMaxValue('');
      }
    }
  };

  const onActiveInfoCloseBtnClick = () => {
    setMinValue('');
    setMaxValue('');
    dispatch(PriceFilterAction(type, 0, 99999));
  };

  const onShowMoreBtnClick = () => {
    setShowMore(!showMore);
    history.push(`/${type}`);
  };

  const showMoreOption = (subContent: string[] | null) => {
    return (
      <>
        <Styled.PriceFilterWrapper>
          Price
          {(priceFilter[type].minValue !== 0 || priceFilter[type].maxValue !== 99999) && (
            <Styled.PriceFilterActiveInfo onClick={onActiveInfoCloseBtnClick}>
              <Styled.ActiveInfoText>Active</Styled.ActiveInfoText>
              <Styled.ActiveInfoCloseBtn iconName="Cancel" />
            </Styled.PriceFilterActiveInfo>
          )}
        </Styled.PriceFilterWrapper>
        <Styled.PriceFilterInputsWrapper>
          <Styled.PriceFilterInput redBorder={incorrectValue}>
            <Styled.PriceInput
              type="number"
              step="1"
              max="99999"
              value={minValue}
              placeholder="from"
              onChange={(e) => setValuePriceFilter(e.target.value, 'min')}
            />
            <Styled.PriceCurrency>$</Styled.PriceCurrency>
          </Styled.PriceFilterInput>
          -
          <Styled.PriceFilterInput redBorder={incorrectValue}>
            <Styled.PriceInput
              type="number"
              step="0.01"
              value={maxValue}
              placeholder="to"
              onChange={(e) => setValuePriceFilter(e.target.value, 'max')}
            />
            <Styled.PriceCurrency>$</Styled.PriceCurrency>
          </Styled.PriceFilterInput>
        </Styled.PriceFilterInputsWrapper>
        {subContent && showMoreButtonHelper(() => setShowMoreSubMenu(!showMoreSubMenu), 'Brands', true)}
        {subContent && showMoreSubMenu && (
          <NestedDisplayHelperSubMenu subContent={subContent} type={type} history={history} />
        )}
      </>
    );
  };

  const showMoreButtonHelper = (onBtnClickCallback: () => void, title: string, nestedSubMenu: boolean = false) => {
    return (
      <Styled.UnderItems onClick={onBtnClickCallback} style={nestedSubMenu ? { paddingLeft: '1rem' } : {}}>
        <Styled.ItemsCheckbox>
          <Styled.CheckboxWrapper>
            <Styled.WrapperInput>
              <Styled.InputCircle iconName="Add" />
            </Styled.WrapperInput>
          </Styled.CheckboxWrapper>
        </Styled.ItemsCheckbox>
        <Styled.ItemsLink>{title}</Styled.ItemsLink>
      </Styled.UnderItems>
    );
  };

  return (
    <Styled.NavUnderTitle>
      {content.map((value, index) => {
        return (
          <Styled.UnderItems
            key={index}
            onMouseEnter={() => setItemsHovered({ type: actionTypeUpdate, payload: index })}
            onMouseLeave={() => setItemsHovered({ type: actionTypeUpdate, payload: index })}
            onClick={() => dispatch(producerFilterAction(type, `${value}`)) && history.push(`/${type}`)}>
            {checkBoxRenderHelper(index, value)}
            <Styled.ItemsLink>{value}</Styled.ItemsLink>
          </Styled.UnderItems>
        );
      })}
      {showMoreButtonHelper(onShowMoreBtnClick, 'Show more')}
      {burgerBtn && showMore && showMoreOption(subContent)}
    </Styled.NavUnderTitle>
  );
});
