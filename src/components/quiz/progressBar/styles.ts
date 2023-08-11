import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.tokens.day.bg.defaultNormal};
  position: absolute;
  left: 0;
  right: 0;
`;

export const Complete = styled(Wrapper)<{ $percent: number }>`
  width: ${({ $percent }) => $percent}%;
  background-color: ${({ theme }) => theme.tokens.day.interactive.success};
  transition: width 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
`;
