import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from './Input';
import { InputSize } from './types';

storiesOf('UI-kit/Input', module)
  .add('default', () => <Input />)
  .add('with label', () => <Input label="Description" />)
  .add('with placeholder', () => <Input placeholder="Write" />)
  .add('with error', () => <Input error="Fill" />)
  .add('number', () => <Input type="number" />)
  .add('disabled', () => (
    <Input label="Description" placeholder="Write" disabled />
  ))
  .add('password', () => <Input type={'password'} placeholder={'Password'} />)
  .add('large', () => <Input inputSize={InputSize.LARGE} />);
