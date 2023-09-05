import React, { FunctionComponent } from 'react';

import { reachGoal } from '../../yandexMetrikaWrapper';

import Button from './button';

import { TwoColumnButtonsShort } from './styles';
import { IStepProps } from './types';

const buttonsData = [
  { title: '💻 Ya', value: 'yes' },
  { title: '❌ Tidak', value: 'no' },
];

const HasLaptop: FunctionComponent<IStepProps> = ({ onValueChange, value }) => {
  const buttonIndex = buttonsData.findIndex(button => button.value === value);

  return (
    <TwoColumnButtonsShort $buttonIndex={buttonIndex}>
      {buttonsData.map(({ title, value }) => (
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
