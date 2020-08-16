import styled from 'styled-components';
import { Row as bsRow, Col as bsCol } from 'react-bootstrap';

export const BannerRow = styled(bsRow)`
  max-width: 85vw;
  margin-bottom: 1.5rem;
`;

export const BannerCol = styled(bsCol)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled(bsRow)`
  padding: 0%;
`;

export const Col = styled(bsCol)`
  padding: 0%;
`;
