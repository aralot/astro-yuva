import styled, { css } from 'styled-components';

import { H2, P2Short, Input, PhoneInput } from '../../../ui-kit';

export const Wrapper = styled.div`
  @media (min-width: 75em) {
    width: 390px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;

  @media (min-width: 75em) {
    min-height: 457px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  padding-top: 24px;

  & > button {
    flex-grow: 1;
  }
`;

export const StyledH2 = styled(H2)`
  margin-bottom: 24px;
`;

export const CenteredH2 = styled(H2)`
  margin: auto 0;
  padding: 50px 0;
  text-align: center;
`;

export const StyledP2 = styled(P2Short)`
  margin-bottom: 12px;
`;

export const Subheader = styled(P2Short)`
  margin-top: -16px;
  margin-bottom: 24px;
`;

export const Buttons = styled.div<{ $buttonIndex: number }>`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 8px;

  ${({ $buttonIndex }) => css`
    & > button:nth-child(${$buttonIndex + 1}) {
      background-color: #f0daff;
      color: #833ae0;
    }

    & > button {
      width: 100%;
    }
  `}
`;

export const TwoColumnButtons = styled(Buttons)`
  grid-template-columns: 1fr 1fr;
`;

export const ThreeColumnButtons = styled(Buttons)`
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-column-gap: 4px;

  & > button {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TwoColumnButtonsShort = styled(TwoColumnButtons)`
  margin-bottom: 8px;
`;

export const Dates = styled.div`
  width: 130px;
  flex-shrink: 0;
`;

export const Time = styled.div`
  flex-grow: 1;
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

export const StyledPhoneInput = styled(PhoneInput)`
  margin-bottom: 16px;
`;
