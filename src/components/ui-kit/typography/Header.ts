import styled, { css } from 'styled-components';

import { Colors } from '../colors';

const defaultStyle = css`
  margin: 0;
  color: ${({ theme }) => Colors.black_pearl};
`;

export const h1Style = css`
  ${defaultStyle};

  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
`;

export const H1 = styled.h1`
  ${h1Style}
`;

export const h2Style = css`
  ${defaultStyle};

  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`;

export const H2 = styled.h2`
  ${h2Style}
`;

export const h3Style = css`
  ${defaultStyle};

  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`;

export const H3 = styled.h3`
  ${h3Style}
`;

export const h3AltStyle = css`
  ${defaultStyle};

  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const H3Alt = styled.h3`
  ${h3AltStyle}
`;

export const h4Style = css`
  ${defaultStyle};

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

export const H4 = styled.h4`
  ${h4Style}
`;

export const h4AltStyle = css`
  ${defaultStyle};

  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const H4Alt = styled.h4`
  ${h4AltStyle}
`;

export const h5Style = css`
  ${defaultStyle};

  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`;

export const H5 = styled.h5`
  ${h5Style}
`;
