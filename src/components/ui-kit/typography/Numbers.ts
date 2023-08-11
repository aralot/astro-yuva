import styled, { css } from 'styled-components';

export const n1Style = css`
  font-weight: bold;
  font-size: 44px;
  line-height: 56px;
  color: ${({ theme }) => theme.palette.black_pearl};
`;

export const N1 = styled.span`
  ${n1Style}
`;

export const n2Style = css`
  font-size: 32px;
  line-height: 40px;
  color: ${({ theme }) => theme.palette.black_pearl};
`;

export const N2 = styled.span`
  ${n2Style}
`;
