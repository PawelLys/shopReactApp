import React from 'react';
import * as Styled from './SplitPayment.style';

import ZipPay from '../../../../images/zipPay.jpg';

export const SplitPayment = React.memo(() => {
  return (
    <Styled.Container>
      <Styled.Photo src={ZipPay} alt="ZipPay" />
    </Styled.Container>
  );
});
