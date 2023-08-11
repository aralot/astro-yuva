import styled, { css } from 'styled-components';

export const tagAndLabelStyle = css`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.black_pearl};
`;

export const TagAndLabel = styled.span`
  ${tagAndLabelStyle}
`;
