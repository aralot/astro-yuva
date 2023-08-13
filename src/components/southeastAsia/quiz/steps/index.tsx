import React, { FunctionComponent } from 'react';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import Steps from './Steps';
import YandexMetrika from './YandexMetrika';

import { api } from './useForm';

const StepsWithApi: FunctionComponent = ({}) => {
  return (
    <ApiProvider api={api}>
      <Steps />
      <YandexMetrika />
    </ApiProvider>
  );
};

export default StepsWithApi;
