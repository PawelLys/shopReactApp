import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './PriceDisplay.style';

interface IProps {
  counter: number;
  setCounter: (arg0: number) => void;
}

export const CounterDisplay = ({ counter, setCounter }: IProps) => {
  const [inputActive, setInputActive] = useState(false);
  const [showCounterChooser, setShowCounterChooser] = useState(false);
  const [showRangeWarning, setRangeWarning] = useState('');

  const node = useRef<HTMLDivElement>(null);
  const focusInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    if (inputActive && counter === 1) {
      focusInput.current && focusInput.current.focus();
    }
  }, [showCounterChooser]);

  const handleClick = (e: MouseEvent) => {
    if (node.current && node.current.contains(e.target as Node)) return;
    setShowCounterChooser(false);
  };

  const displayCounterOptions = () => {
    let x: JSX.Element[] = [];
    for (let i = 1; i < 9; i++) {
      x = [
        ...x,
        <Styled.ChooserElement choosenValue={counter === i} key={i} onClick={() => setCounter(i)}>
          {i}
        </Styled.ChooserElement>,
      ];
    }
    return x;
  };

  const onInputChange = (value: number) => {
    if (showRangeWarning) setRangeWarning('');
    if (value < 0 || value === 0 || isNaN(value)) {
      value = 1;
      setRangeWarning('Min: 1');
    } else if (value > 99) {
      value = 99;
      setRangeWarning('Max: 99');
    }
    setCounter(value);
  };

  const onHigherNumberChange = () => {
    setCounter(1);
    setInputActive(true);
    if (showRangeWarning) setRangeWarning('');
  };

  return (
    <Styled.BottomCounterWrapper ref={node}>
      {counter > 0 && counter < 9 && !inputActive ? (
        <Styled.BottomCounter
          resetBottomRadius={showCounterChooser}
          onClick={() => setShowCounterChooser(!showCounterChooser)}>
          {counter}
          <Styled.CounterIcon iconName="CaretSolidDown" />
          {showCounterChooser && (
            <Styled.CounterChooserWrapper>
              <Styled.CounterChooser>
                {displayCounterOptions().map((v) => v)}
                <Styled.ChooserElement onClick={onHigherNumberChange}>9+</Styled.ChooserElement>
              </Styled.CounterChooser>
            </Styled.CounterChooserWrapper>
          )}
        </Styled.BottomCounter>
      ) : (
        <>
          <Styled.CounterAsInput
            type="number"
            min="1"
            max="99"
            ref={focusInput}
            value={counter}
            onChange={(event) => onInputChange(parseInt(event.target.value))}
            onFocus={() => setInputActive(true)}
            onBlur={() => setInputActive(false)}
          />
          {showRangeWarning && <Styled.CounterWarning>{showRangeWarning}</Styled.CounterWarning>}
        </>
      )}
    </Styled.BottomCounterWrapper>
  );
};
