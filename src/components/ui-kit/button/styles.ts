import styled, { css } from 'styled-components';

import {
  ButtonKind,
  ButtonSize,
  mapSizeToWidth,
  IBackgroundAndColorStyle,
} from './types';

import { p1Style, p2LongStyle, p3Style } from '../typography';
import { Colors } from '../colors';
import { Tokens } from '../tokens';

export const createBackgroundAndColorStyle = ({
  active,
  backgroundColor,
  color,
  disabled,
  hover,
}: IBackgroundAndColorStyle) => css`
  background-color: ${backgroundColor};
  color: ${color};

  svg {
    color: ${color};
  }

  &:hover {
    background-color: ${hover.backgroundColor};
    color: ${hover.color};

    svg {
      color: ${hover.color};
    }
  }

  &:active {
    background-color: ${active.backgroundColor};
    color: ${active.color};

    svg {
      color: ${active.color};
    }
  }

  &:disabled {
    background-color: ${disabled.backgroundColor};
    color: ${disabled.color};

    svg {
      color: ${disabled.color};
    }
  }
`;

export const StyledButton = styled.button<{
  disabled: boolean;
  $hasIcon: boolean;
  $iconOnly: boolean;
  kind: ButtonKind;
  size: ButtonSize;
}>`
  display: inline-flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  border-radius: 8px;

  font-family: 'Cera CY', Helvetica, Arial, sans-serif;
  color: #833ae0;

  transition: 0.2s ease;
  transition-property: color, background-color;
  cursor: pointer;

  svg {
    transition: fill 0.2s ease;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  ${({ $hasIcon, size }) => {
    switch (size) {
      case ButtonSize.SMALL: {
        return css`
          ${p3Style};
          height: 28px;
          padding: 0 ${$hasIcon ? 12 : 14}px;
          border-radius: 8px;
        `;
      }
      case ButtonSize.MEDIUM: {
        return css`
          ${p2LongStyle};
          height: 36px;
          padding: 0 ${$hasIcon ? 14 : 20}px;
          border-radius: 10px;
        `;
      }
      case ButtonSize.LARGE: {
        return css`
          ${p1Style};
          height: 48px;
          padding: 0 ${$hasIcon ? 16 : 24}px;
          border-radius: 12px;
        `;
      }
      default:
        return css``;
    }
  }}

  ${({ kind }) => {
    switch (kind) {
      case ButtonKind.PRIMARY:
        return createBackgroundAndColorStyle({
          active: {
            backgroundColor: Colors.interactive_secondary,
            color: Colors.dark_purple,
          },
          backgroundColor: Colors.dark_purple,
          color: Colors.white,
          disabled: {
            backgroundColor: Colors.interactive_disabled,
            color: Colors.text_disabled,
          },
          hover: {
            backgroundColor: Colors.interactive_primary_hover,
            color: Colors.white,
          },
        });

      case ButtonKind.SECONDARY:
        return createBackgroundAndColorStyle({
          active: {
            backgroundColor: Tokens.day.interactive.secondary,
            color: Tokens.day.interactive.primary,
          },
          backgroundColor: Tokens.day.interactive.secondary,
          color: Tokens.day.interactive.primary,
          disabled: {
            backgroundColor: Tokens.day.interactive.disabled,
            color: Tokens.day.text.disabled,
          },
          hover: {
            backgroundColor: Tokens.day.interactive.secondaryHover,
            color: Tokens.day.interactive.primary,
          },
        });

      case ButtonKind.TECHNICAL:
        return createBackgroundAndColorStyle({
          active: {
            backgroundColor: Tokens.day.interactive.secondary,
            color: Tokens.day.interactive.primary,
          },
          backgroundColor: Tokens.day.interactive.tertiary,
          color: Tokens.day.text.primary,
          disabled: {
            backgroundColor: Tokens.day.interactive.disabled,
            color: Tokens.day.text.disabled,
          },
          hover: {
            backgroundColor: Tokens.day.interactive.tertiary,
            color: Tokens.day.interactive.primary,
          },
        });

      case ButtonKind.DARKTECHNICAL:
        return createBackgroundAndColorStyle({
          active: {
            backgroundColor: Colors.interactive_secondary,
            color: Colors.dark_purple,
          },
          backgroundColor: Colors.white_opacity_20,
          color: Colors.white,
          disabled: {
            backgroundColor: Tokens.day.interactive.disabled,
            color: Tokens.day.text.disabled,
          },
          hover: {
            backgroundColor: Colors.white_opacity_20,
            color: Colors.purple_75,
          },
        });

      case ButtonKind.WARNING:
        return createBackgroundAndColorStyle({
          active: {
            backgroundColor: Tokens.night.status.reviewActive,
            color: Tokens.day.text.primary,
          },
          backgroundColor: Tokens.night.status.review,
          color: Tokens.day.text.primary,
          disabled: {
            backgroundColor: Tokens.day.interactive.disabled,
            color: Tokens.day.text.disabled,
          },
          hover: {
            backgroundColor: Tokens.night.status.reviewHover,
            color: Tokens.day.text.primary,
          },
        });

      case ButtonKind.NIGHT:
        return createBackgroundAndColorStyle({
          active: {
            backgroundColor: Tokens.day.interactive.secondary,
            color: Tokens.day.interactive.primary,
          },
          backgroundColor: Tokens.night.interactive.tertiary,
          color: Tokens.day.text.buttonPrimary,
          disabled: {
            backgroundColor: Tokens.base.transparent.white['20'],
            color: Tokens.base.transparent.white['70'],
          },
          hover: {
            backgroundColor: Tokens.night.interactive.tertiary,
            color: Tokens.base.purple['40'],
          },
        });

      default:
        return css``;
    }
  }}

  ${({ $iconOnly, size }) =>
    $iconOnly &&
    css`
      width: ${mapSizeToWidth[size]}px;
      padding: 0;
    `}
`;

export const Children = styled.span`
  display: inline-block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:not(:only-child) {
    margin-left: 8px;
  }
`;
