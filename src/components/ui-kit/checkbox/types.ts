import React, { InputHTMLAttributes } from 'react';

export enum CheckboxSize {
  LARGE = 'large',
  SMALL = 'small',
}

export interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactElement | string;
  qaAttribute?: string;
  size?: CheckboxSize;
}
