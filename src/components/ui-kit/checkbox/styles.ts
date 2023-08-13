import styled, { css } from 'styled-components';

import { p2ShortStyle, p3Style } from '../typography';
import { Colors } from '../colors';

import { CheckboxSize } from './types';

export const Container = styled.label<{
  disabled?: boolean;
  $size: CheckboxSize;
}>`
  position: relative;
  display: grid;
  grid-template-columns: 20px auto;
  grid-gap: 6px;
  min-height: 20px;

  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}

  ${({ $size }) =>
    $size === CheckboxSize.SMALL &&
    css`
      grid-template-columns: 18px auto;
      height: 18px;
      grid-gap: 4px;
    `}
`;

export const Arrow = styled.svg`
  position: absolute;
  stroke: transparent;
  left: 3px;
  top: 4.5px;
`;

export const ArrowSmall = styled(Arrow)`
  top: 3.5px;
`;

export const CheckboxInput = styled.input<{
  $size: CheckboxSize;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin: auto;

  background-color: ${({ theme }) => Colors.white};
  border: 2px solid ${({ theme }) => Colors.divider_and_input_border};
  border-radius: 4px;
  cursor: pointer;

  -webkit-appearance: none;
  appearance: none;
  transition: all 0.3s;

  ${({ $size }) =>
    $size === CheckboxSize.SMALL &&
    css`
      width: 16px;
      height: 16px;
    `}

  ${({ checked, disabled, theme }) => {
    if (checked && disabled) {
      return css`
        & + ${Arrow} {
          stroke: ${Colors.text_disabled};
        }
        border-color: ${Colors.divider_and_input_border};
        background-color: ${Colors.interactive_disabled};
      `;
    }

    if (checked) {
      return css`
        & + ${Arrow} {
          stroke: white;
        }
        background-color: ${Colors.interactive_primary};
        border-color: ${Colors.interactive_primary};

        ${Container}:hover & {
          background-color: ${Colors.interactive_primary_hover};
          border-color: ${Colors.interactive_primary_hover};
        }
      `;
    }

    if (disabled) {
      return css`
        background-color: ${Colors.interactive_disabled};
      `;
    }

    return css`
      ${Container}:hover & {
        border-color: ${Colors.interactive_primary_hover};
      }
    `;
  }};
`;

export const Label = styled.div<{
  disabled?: boolean;
  $size: CheckboxSize;
}>`
  ${({ $size }) => ($size === CheckboxSize.LARGE ? p2ShortStyle : p3Style)};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${Colors.text_secondary};
    `};

  user-select: none;
`;

export const Box = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  margin: auto;
`;
