import React, { FunctionComponent, useCallback } from 'react';

import {
  Button as UIKitButton,
  ButtonKind,
  ButtonSize,
} from '../../../ui-kit/button';

import { IButtonProps } from './types';

const Button: FunctionComponent<IButtonProps> = ({
  children,
  onClick,
  value,
}) => {
  const handleClick = useCallback(
    event => {
      onClick(event.currentTarget.dataset.value);
    },
    [onClick],
  );

  return (
    <UIKitButton
      data-value={value}
      handleClick={handleClick}
      kind={ButtonKind.TECHNICAL}
      size={ButtonSize.MEDIUM}
      type="button"
    >
      {children}
    </UIKitButton>
  );
};

export default Button;
