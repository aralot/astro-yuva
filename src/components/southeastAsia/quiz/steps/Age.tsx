import React, { FunctionComponent } from 'react';
import ym from 'react-yandex-metrika';

import Button from './button';

import { TwoColumnButtons } from './styles';
import { IStepProps } from './types';

const Age: FunctionComponent<IStepProps> = ({
  buttons,
  onValueChange,
  value,
}) => {
  const buttonIndex = buttons.findIndex(
    ({ value: buttonValue }) => buttonValue === value,
  );

  return (
    <TwoColumnButtons $buttonIndex={buttonIndex}>
      {buttons.map(({ value }) => (
        <Button
          onClick={event => {
            // @hardcode
            // ym('reachGoal', 'age_newautobooking');
            onValueChange(event);
          }}
          key={'childAge' + value}
          value={value}
        >
          {value}
        </Button>
      ))}
    </TwoColumnButtons>
  );
};

export default Age;
