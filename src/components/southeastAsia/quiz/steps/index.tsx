import React, { FunctionComponent } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { ApiProvider } from '@reduxjs/toolkit/query/react';

import Steps from './Steps';

import { api } from './useForm';

const StepsWithApi: FunctionComponent = ({}) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdK_RclAAAAADApWB10Y1ClEYT6KEL0XkCLNZRv">
      <ApiProvider api={api}>
        <Steps />
      </ApiProvider>
    </GoogleReCaptchaProvider>
  );
};

export default StepsWithApi;
