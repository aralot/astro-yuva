import React from 'react';

export const TIME_ZONE = 'Asia/Pontianak';
export const LOCALE = 'id-ID';
export const MIN_SLOTS_IN_DAY = 3;

export enum StepType {
  HOBBY = 0,
  AGE = 1,
  HAS_LAPTOP = 2,
  SCHEDULE = 3,
  CONTACT = 4,
  SLOT_USED = 5,
}

export interface IStepParams {
  buttons?: Array<{ title?: string; value: string }>;
  component?: React.ComponentType<any>;
  setValue?(value: string): void;
  title?: JSX.Element;
  value?: string | null;
}

export type StepsCollection = Record<StepType, IStepParams>;
