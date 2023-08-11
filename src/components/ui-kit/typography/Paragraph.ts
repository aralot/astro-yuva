import styled, { css } from 'styled-components';

import { Colors } from '../colors';

const defaultStyle = css`
  margin: 0;
  color: ${Colors.black_pearl};
`;

export const p1Style = css`
  ${defaultStyle};

  font-size: 18px;
  line-height: 24px;
`;

export const P1 = styled.p`
  ${p1Style};
`;

export const p2LongStyle = css`
  ${defaultStyle};

  font-size: 16px;
  line-height: 24px;
`;

export const P2Long = styled.p`
  ${p2LongStyle};
`;

export const p2ShortStyle = css`
  ${defaultStyle};

  font-size: 16px;
  line-height: 20px;
`;

export const P2Short = styled.p`
  ${p2ShortStyle};
`;

export const p3Style = css`
  ${defaultStyle};

  font-size: 14px;
  line-height: 18px;
`;

export const P3 = styled.p`
  ${p3Style}
`;
