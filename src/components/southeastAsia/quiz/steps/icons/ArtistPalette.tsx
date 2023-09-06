import React, { FunctionComponent } from 'react';

import { Wrapper } from './styles';

export const ArtistPalette: FunctionComponent = () => (
  <Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <path
        fill="#D99E82"
        d="M18 3.143c-9.941 0-18 6.908-18 15.428c0 1.066.126 2.107.367 3.112C2.146 24.744 3.377 22.812 9 20c5.727-2.864 0 4-2 8c-.615 1.23-.282 2.271.56 3.124C10.506 32.928 14.104 34 18 34c9.941 0 18-6.907 18-15.429c0-8.52-8.059-15.428-18-15.428zm2.849 24.447c-.395 1.346-2.46 1.924-4.613 1.291c-2.153-.632-3.578-2.234-3.183-3.581c.395-1.346 2.46-1.924 4.613-1.29c2.153.631 3.578 2.233 3.183 3.58z"
      />
      <circle cx="10" cy="11" r="3" fill="#5C913B" />
      <circle cx="20" cy="9" r="3" fill="#269" />
      <circle cx="29" cy="15" r="3" fill="#DD2E44" />
      <circle cx="28" cy="24" r="3" fill="#FFCC4D" />
    </svg>
  </Wrapper>
);
