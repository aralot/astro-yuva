import React, { FunctionComponent } from 'react';
import { Wrapper } from './styles';

export const SmilingFace: FunctionComponent = () => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 36 36"
    >
      <circle cx="18" cy="18" r="18" fill="#FFCC4D" />
      <path
        fill="#664500"
        d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379a.499.499 0 0 0-.237-.554a.505.505 0 0 0-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855a.502.502 0 0 0-.598-.081a.5.5 0 0 0-.239.557z"
      />
      <ellipse cx="12" cy="13.5" fill="#664500" rx="2.5" ry="3.5" />
      <ellipse cx="24" cy="13.5" fill="#664500" rx="2.5" ry="3.5" />
    </svg>
  </Wrapper>
);