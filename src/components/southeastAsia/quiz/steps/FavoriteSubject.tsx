import React, { FunctionComponent } from 'react';
import ym from 'react-yandex-metrika';

import Button from './button';

import { Buttons } from './styles';
import { IStepProps } from './types';

const FavoriteSubject: FunctionComponent<IStepProps> = ({
  buttons,
  onValueChange,
  value,
}) => {
  const buttonIndex = buttons.findIndex(button => button.value === value);

  return (
    <Buttons $buttonIndex={buttonIndex}>
      {buttons.map(({ title, value }) => (
        <Button
          key={value}
          value={value}
          onClick={event => {
            // @hardcode
            // ym('reachGoal', 'favorite_newautobooking');
            onValueChange(event);
          }}
        >
          {title}
        </Button>
      ))}
    </Buttons>
  );
};

export default FavoriteSubject;
