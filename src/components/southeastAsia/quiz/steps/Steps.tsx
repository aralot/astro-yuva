import React, { FunctionComponent, useState, useCallback } from 'react';

import { Button, ButtonKind } from '../../../ui-kit';

import FavoriteSubject from './FavoriteSubject';
import Age from './Age';
import HasLaptop from './HasLaptop';
import Schedule from './Schedule';
import Contact from './Contact';
import ProgressBar from './progressBar';

import { BRANCH_CODE_INDONESIA, useForm } from './useForm';
import { LOCALE, TIME_ZONE, StepsCollection, StepType } from './types';
import { Form, Content, ButtonsWrapper, StyledH2 } from './styles';

const BEFORE_MOVE_TO_NEXT_STEP_DELAY_MS = 200;
const FIRST_STEP = StepType.HOBBY;

export const getDateRangeLabel = (date: Date) => {
  return new Intl.DateTimeFormat(LOCALE, {
    day: 'numeric',
    month: 'long',
    timeZone: TIME_ZONE,
  })
    .format(date)
    .toLowerCase();
};

const Steps: FunctionComponent = ({}) => {
  const [isSlotUsed, setIsSlotUsed] = useState(false);
  const [stepType, setStepType] = useState(FIRST_STEP);
  const [isChecked, setIsChecked] = useState(true);

  const {
    childAge,
    childFavoriteSubject,
    childFirstName,
    groupedSlots,
    hasLaptop,
    isPending,
    onSubmit,
    parentName,
    phone,
    refetchSlots,
    setChildAge,
    setChildFavoriteSubject,
    setChildFirstName,
    setHasLaptop,
    setParentName,
    setPhone,
    setTimeSlotValue,
    timeSlotValue,
  } = useForm({
    branchCode: BRANCH_CODE_INDONESIA,
    getDateRangeLabel,
  });

  const steps: StepsCollection = {
    [StepType.HOBBY]: {
      buttons: [
        { title: '🧑🏽‍💻 Ilmu Komputer', value: 'komputer' },
        { title: '🎨 Seni, lukisan, desain', value: 'desain' },
        { title: '📐 Matematika', value: 'matematika' },
        { title: '📚 Kultur dan Sejarah', value: 'kultur' },
        { title: 'Semua yang di atas', value: 'semua' },
      ],
      component: FavoriteSubject,
      setValue: setChildFavoriteSubject,
      title: <span>1. Apa mata pelajaran favorit anak Anda&nbsp;??</span>,
      value: childFavoriteSubject,
    },
    [StepType.AGE]: {
      buttons: [
        '5',
        '12',
        '6',
        '13',
        '7',
        '14',
        '8',
        '15',
        '9',
        '16',
        '10',
        '17',
        '11',
      ].map(value => {
        return { value };
      }),
      component: Age,
      setValue: setChildAge,
      title: <span>2. Berapa usia anak Anda? 😊</span>,
      value: childAge,
    },
    [StepType.HAS_LAPTOP]: {
      buttons: [
        { title: '💻 Ya', value: 'yes' },
        { title: '❌ Tidak', value: 'no' },
      ],
      component: HasLaptop,
      setValue: setHasLaptop,
      title: (
        <span>
          3. Untuk mengikuti kelas, Anda membutuhkan laptop/komputer (wajib),
          tolong beri tahu jika Anda memilikinya
        </span>
      ),
      value: hasLaptop,
    },
    [StepType.SCHEDULE]: {
      component: Schedule,
      setValue: setTimeSlotValue,
      title: (
        <span>
          {!isSlotUsed && '4. '}
          Tanggal kelas gratis yang nyaman untuk anak dan Anda? (WIB)
        </span>
      ),
      value: timeSlotValue,
    },
    [StepType.CONTACT]: {
      component: Contact,
      title: <span>5. Silakan tinggalkan kontak Anda</span>,
    },
    [StepType.SLOT_USED]: {},
  };

  const nextStep = useCallback(() => {
    setStepType(index => index + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStepType(index => index - 1);
  }, []);

  const submit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!isChecked) return;
      const isSuccess = await onSubmit(event);
      if (isSuccess) {
        window.location.href = '/finished';
      } else {
        refetchSlots();
        setStepType(StepType.SLOT_USED);
        setTimeSlotValue('');
        setIsSlotUsed(true);
      }
    },
    [isChecked, onSubmit, refetchSlots, setTimeSlotValue],
  );

  const { buttons, component: Step, setValue, title, value } = steps[stepType];

  const isSlotUsedStep = stepType === StepType.SLOT_USED;
  const isFinishStep =
    stepType === StepType.CONTACT ||
    (isSlotUsed && stepType === StepType.SCHEDULE);

  const progressPercent =
    ((stepType + 1) * 100) / (Object.keys(steps).length - 1);

  const onValueChange = useCallback(
    (value: string) => {
      if (!setValue) return;

      setValue(value);

      if (stepType === StepType.HAS_LAPTOP && value === 'no') {
        window.location.href = '/no-laptop';
        return;
      }

      setTimeout(() => nextStep(), BEFORE_MOVE_TO_NEXT_STEP_DELAY_MS);
    },
    [setValue, nextStep, stepType],
  );

  const getIsNextActive = () => {
    if (isSlotUsedStep) return true;
    if (isFinishStep) return isChecked;

    return Boolean(value);
  };

  const goToScheduleStep = useCallback(() => {
    setStepType(StepType.SCHEDULE);
  }, []);

  return (
    <Form onSubmit={submit}>
      <Content>
        <StyledH2>{title}</StyledH2>
        {buttons && Step && (
          <Step buttons={buttons} onValueChange={onValueChange} value={value} />
        )}
        {isSlotUsedStep && (
          <CenteredH2>
            Oops! Jadwal sudah terisi. Silakan pilih jadwal lain 🙁
          </CenteredH2>
        )}
        {stepType === StepType.SCHEDULE && (
          <Schedule
            groupedSlots={groupedSlots}
            onValueChange={onValueChange}
            value={value}
          />
        )}
        {stepType === StepType.CONTACT && (
          <Contact
            childFirstNameState={[childFirstName, setChildFirstName]}
            parentNameState={[parentName, setParentName]}
            phoneState={[phone, setPhone]}
            checkboxState={[isChecked, setIsChecked]}
          />
        )}
      </Content>
      {!isSlotUsed && <ProgressBar percent={progressPercent} />}
      <ButtonsWrapper>
        {!isSlotUsed && (
          <Button
            onClick={prevStep}
            kind={ButtonKind.TECHNICAL}
            disabled={stepType === StepType.HOBBY || isPending}
            type="button"
          >
            Back
          </Button>
        )}
        <Button
          onClick={
            isSlotUsedStep
              ? goToScheduleStep
              : isFinishStep
              ? undefined
              : nextStep
          }
          disabled={!getIsNextActive() || isPending}
          type={isFinishStep ? 'submit' : 'button'}
        >
          {isSlotUsedStep ? 'Kembali' : isFinishStep ? 'Kirim' : 'Next'}
        </Button>
      </ButtonsWrapper>
    </Form>
  );
};

export default Steps;
