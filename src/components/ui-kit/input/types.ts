import { InputHTMLAttributes, RefObject } from 'react';

export enum InputSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  inputRef?: RefObject<HTMLInputElement>;
  inputSize?: InputSize;
  label?: string;
  loading?: string;
  qaAttribute?: string;
}
