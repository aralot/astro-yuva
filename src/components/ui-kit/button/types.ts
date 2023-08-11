import { FunctionComponent, SVGProps, MouseEventHandler } from 'react';

export interface IButtonProps {
  disabled?: boolean;
  handleClick?: MouseEventHandler;
  kind?: ButtonKind;
  qaAttribute?: string;
  size?: ButtonSize;
  width?: string;
}

export interface IBackgroundAndColorStyle {
  active: {
    backgroundColor: string;
    color: string;
  };
  backgroundColor: string;
  color: string;
  disabled: {
    backgroundColor: string;
    color: string;
  };
  hover: {
    backgroundColor: string;
    color: string;
  };
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonKind {
  DARKTECHNICAL = 'darkTechnical',
  NIGHT = 'night',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TECHNICAL = 'technical',
  WARNING = 'warning',
}

export const mapSizeToWidth = {
  [ButtonSize.LARGE]: 48,
  [ButtonSize.MEDIUM]: 36,
  [ButtonSize.SMALL]: 28,
};
