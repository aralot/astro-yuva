import React, {
  forwardRef,
  RefAttributes,
  ComponentPropsWithRef,
  ComponentProps,
  ElementType,
} from 'react';

import { ButtonKind, ButtonSize, IButtonProps } from './types';
import { StyledButton, Children } from './styles';

function createButton<As extends ElementType>(as: As) {
  return forwardRef<
    ComponentPropsWithRef<As> extends RefAttributes<infer E> ? E : any,
    Omit<ComponentProps<As>, keyof IButtonProps> & IButtonProps
  >(
    (
      {
        disabled = false,
        handleClick,
        kind = ButtonKind.PRIMARY,
        qaAttribute,
        size = ButtonSize.MEDIUM,
        width,
        children,
        ...other
      },
      ref,
    ) => {
      return (
        <StyledButton
          data-qa-id={qaAttribute}
          disabled={disabled}
          $iconOnly={!children}
          kind={kind}
          onClick={handleClick}
          size={size}
          style={{ width }}
          {...other}
          ref={ref as any}
          as={as as any}
        >
          {children && <Children>{children}</Children>}
        </StyledButton>
      );
    },
  );
}

export const Button = createButton('button');
Button.displayName = 'Button';

export const ButtonAsLabel = createButton('label');
ButtonAsLabel.displayName = 'ButtonAsLabel';

export const ButtonAsLink = createButton('a');
ButtonAsLink.displayName = 'ButtonAsLink';
