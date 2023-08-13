import React, { FunctionComponent } from 'react';

import {
  Arrow,
  CheckboxInput,
  Container,
  Label,
  ArrowSmall,
  Box,
} from './styles';
import { CheckboxSize, ICheckboxProps } from './types';

const noop = () => {};

export const Checkbox: FunctionComponent<ICheckboxProps> = ({
  checked,
  disabled,
  label,
  name,
  onChange,
  qaAttribute,
  value,
  size = CheckboxSize.LARGE,
  className,
  ...props
}) => {
  return (
    <Container
      disabled={disabled}
      data-qa-id={qaAttribute}
      className={className}
      $size={size}
    >
      <Box>
        <CheckboxInput
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange || noop}
          $size={size}
          {...props}
        />

        {size === CheckboxSize.LARGE && (
          <Arrow width="12" height="9" fill="none" viewBox="0 0 12 9">
            <path d="M1.5 4L4.97625 7L10.5 1" strokeWidth="2" />
          </Arrow>
        )}

        {size === CheckboxSize.SMALL && (
          <ArrowSmall width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1.4 4.00001L4.181 6.40001L8.6 1.60001" strokeWidth="2" />
          </ArrowSmall>
        )}
      </Box>

      {label ? (
        <Label disabled={disabled} $size={size}>
          {label}
        </Label>
      ) : null}
    </Container>
  );
};
