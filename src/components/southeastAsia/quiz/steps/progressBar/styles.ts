import styled from 'styled-components';

import { Tokens } from '../../../../ui-kit/tokens';

export const Wrapper = styled.div`
  height: 2px;
  background-color: ${({ theme }) => Tokens.day.bg.defaultNormal};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 74px;

  @media (min-width: 1200px) {
    bottom: 90px;
  }
`;

export const Complete = styled(Wrapper)<{ $percent: number }>`
  width: ${({ $percent }) => $percent}%;
  background-color: ${({ theme }) => Tokens.day.interactive.success};
  transition: width 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  top: 0;
`;
