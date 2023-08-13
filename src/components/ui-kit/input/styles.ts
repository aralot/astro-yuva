import styled, { css } from 'styled-components';

import { p2ShortStyle, TagAndLabel, P3 } from '../typography';
import { preloader } from '../preloader';
import { Colors } from '../colors';

import { InputSize } from './types';

export const styleInput = css<{
  $hasError?: boolean;
  $size?: InputSize;
  disabled?: boolean;
  type?: string | undefined;
}>`
  ${p2ShortStyle};

  display: block;
  width: 100%;
  padding: 8px;

  background: ${({ theme }) => Colors.white};
  border: 1px solid ${({ theme }) => Colors.divider_and_input_border};

  ${({ $size }) => {
    switch ($size) {
      case InputSize.LARGE:
        return css`
          height: 48px;
          border-radius: 12px;
          font-size: 18px;
        `;
      case InputSize.SMALL:
      default:
        return css`
          height: 36px;
          border-radius: 10px;
        `;
    }
  }}

  outline: none;

  &::placeholder {
    color: ${({ theme }) => Colors.text_disabled};
  }

  &:hover {
    border-color: ${({ theme }) => Colors.interactive_primary_hover};
  }

  &:focus {
    border-color: ${({ theme }) => Colors.interactive_primary};
  }

  &:disabled {
    background: ${({ theme }) => Colors.interactive_disabled};
    color: ${({ theme }) => Colors.text_disabled};
    pointer-events: none;
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${Colors.interactive_error} !important;
    `}

  ${({ type }) =>
    type === 'password' &&
    css`
      font-family: monospace;
    `}
`;

export const StyledInput = styled.input`
  ${styleInput};
`;

export const Label = styled(TagAndLabel)<{ disabled?: boolean }>`
  display: block;
  margin-bottom: 8px;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${Colors.text_secondary};
    `}
`;

const bottomLabelStyles = css`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: 16px auto;
  margin-top: 4px;
`;

export const Error = styled(P3)`
  ${bottomLabelStyles};

  color: ${({ theme }) => Colors.interactive_error};
`;

export const Loading = styled(P3)`
  ${bottomLabelStyles};

  color: ${({ theme }) => Colors.text_secondary};

  &:before {
    content: '';
    display: inline;
    width: 16px;
    height: 16px;

    background: url(${preloader}) center no-repeat;
    background-size: 16px;
  }
`;
