import React, { FunctionComponent } from 'react';

import { IProgressBarProps } from './types';
import { Wrapper, Complete } from './styles';

const ProgressBar: FunctionComponent<IProgressBarProps> = ({ percent }) => {
  return (
    <Wrapper>
      <Complete $percent={percent} />
    </Wrapper>
  );
};

export default ProgressBar;
