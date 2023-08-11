import { IInputProps } from '../../ui-kit';

export interface IPhoneInputProps extends Omit<IInputProps, 'onChange'> {
  defaultCode?: string;
  onChange(value: string): void;
}
