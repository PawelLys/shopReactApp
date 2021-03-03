import React from 'react';
import * as Styled from './SplitPayment.style';

export const SplitPayment = React.memo(() => {
  return (
    <Styled.Container>
      <Styled.Photo
        src="https://knoxfielddental.com.au/wp-content/uploads/2019/06/zippay-homepage-green-black-650.png"
        alt="ZipPay"
      />
    </Styled.Container>
  );
});
