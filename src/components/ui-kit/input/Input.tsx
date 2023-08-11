import React, { FunctionComponent } from 'react';
import { useTheme } from 'styled-components';

// @hardcode
// import { Icon } from '../icon';
// import { Icons } from '../icons';

import { Error, Label, Loading, StyledInput } from './styles';
import { IInputProps } from './types';

export const Input: FunctionComponent<IInputProps> = ({
  className,
  error,
  inputRef,
  inputSize,
  label,
  loading,
  qaAttribute,
  ...props
}) => {
  const theme = useTheme();

  return (
    <div className={className}>
      {Boolean(label) && <Label disabled={props.disabled}>{label}</Label>}

      <StyledInput
        data-qa-id={qaAttribute}
        ref={inputRef}
        {...props}
        $hasError={Boolean(error)}
        $size={inputSize}
      />

      {/* @hardcode
      {error && (
        <Error>
          <Icon
            content={Icons.small.attention}
            color={theme.palette.interactive_error}
          />
          {error}
        </Error>
      )}
      */}

      {loading && <Loading>{loading}</Loading>}
    </div>
  );
};
