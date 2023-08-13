import styled, { css } from 'styled-components';

import { Colors } from '../colors';

export const linkStyle = css`
  color: ${({ theme }) => Colors.interactive_primary};

  &:hover,
  &:focus {
    color: ${({ theme }) => Colors.dark_purple_hover};
    text-decoration: underline;
  }
`;

export const Link = styled.a`
  ${linkStyle};
`;
