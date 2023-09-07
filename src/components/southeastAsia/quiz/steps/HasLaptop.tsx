import React, { FunctionComponent } from 'react';

import { reachGoal } from '../../yandexMetrikaWrapper';

import Button from './button';

import { TwoColumnButtonsShort } from './styles';
import { IStepProps } from './types';

const HasLaptop: FunctionComponent<IStepProps> = ({
  buttons,
  onValueChange,
  value,
}) => {
  const buttonIndex = buttons.findIndex(button => button.value === value);

  return (
    <TwoColumnButtonsShort $buttonIndex={buttonIndex}>
      {buttons.map(({ title, value }) => (
        <Button
          onClick={event => {
            reachGoal(
              value === 'yes'
                ? 'pc_yes_newautobooking'
                : 'pc_no_newautobooking',
            );
            onValueChange(event);
          }}
          key={value}
          value={value}
        >
          {title}
        </Button>
      ))}
    </TwoColumnButtonsShort>
  );
};

export default HasLaptop;
