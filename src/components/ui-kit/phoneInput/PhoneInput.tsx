import React, { FunctionComponent, useCallback } from 'react';

import { Input } from '../../ui-kit';
import { IPhoneInputProps } from './types';

export const RUSSIA_COUNTRY_CODE = '+7 ';
const MIN_NUMBER_COUNT = 9;
const ERROR_MESSAGE = `Номер телефона должен содержать минимум ${MIN_NUMBER_COUNT} цифр`;

const onInputDefault = (event: React.ChangeEvent<HTMLInputElement>) => {
  const input = event.target;
  const numberCount = input.value.replace(/\D+/g, '').length;
  if (numberCount < MIN_NUMBER_COUNT) {
    input.setCustomValidity(ERROR_MESSAGE);
  } else {
    input.setCustomValidity('');
  }
};

export const PhoneInput: FunctionComponent<IPhoneInputProps> = ({
  defaultCode = RUSSIA_COUNTRY_CODE,
  onChange,
  onInput = onInputDefault,
  onFocus,
  onBlur,
  ...inputProps
}) => {
  const handleFocus = useCallback(
    event => {
      if (!event.target.value) {
        onChange(defaultCode);
        onInput(event);
      }
      if (onFocus) onFocus(event);
    },
    [defaultCode, onChange, onInput, onFocus],
  );

  const handleBlur = useCallback(
    event => {
      if (event.target.value === defaultCode) {
        onChange('');
      }

      if (onBlur) onBlur(event);
    },
    [defaultCode, onChange, onBlur],
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <Input
      label="Номер телефона"
      name="phone"
      onInput={onInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      required
      type="tel"
      onChange={handleChange}
      {...inputProps}
    />
  );
};
