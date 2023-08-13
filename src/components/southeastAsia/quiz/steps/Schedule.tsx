import React, {
  FunctionComponent,
  useState,
  useMemo,
  useLayoutEffect,
} from 'react';
import ym from 'react-yandex-metrika';

import { getDateRangeLabel } from './Steps';

import Button from './button';

import {
  StyledP2,
  Buttons,
  ScheduleWrapper,
  ThreeColumnButtons,
  Dates,
  Time,
} from './styles';
import { IScheduleProps, TIME_ZONE, LOCALE, MIN_SLOTS_IN_DAY } from './types';

const Schedule: FunctionComponent<IScheduleProps> = ({
  groupedSlots,
  onValueChange,
  value,
}) => {
  const [dateSlotValue, setDateSlotValue] = useState('');

  const dateSlots = useMemo(() => {
    const dates: string[] = [];

    const groups = Array.from(groupedSlots.entries());

    dates.push(...groups.splice(0, 3).map(([value]) => value));

    [...dates].forEach(value => {
      const slots = groupedSlots.get(value);
      if (groups.length && slots && slots.length < MIN_SLOTS_IN_DAY) {
        const group = groups.shift();
        if (group) dates.push(group[0]);
      }
    });

    return dates.map(value => ({
      title: value,
      value,
    }));
  }, [groupedSlots]);

  const firstDateSlotValue = dateSlots.length ? dateSlots[0].value : null;

  useLayoutEffect(() => {
    if (value) {
      setDateSlotValue(getDateRangeLabel(new Date(value as string)));
    } else if (firstDateSlotValue) {
      setDateSlotValue(firstDateSlotValue);
    }
  }, [value, firstDateSlotValue]);

  const timeSlots = useMemo(() => {
    if (!dateSlotValue) return [];

    return (groupedSlots.get(dateSlotValue) || []).map(value => ({
      title: new Intl.DateTimeFormat(LOCALE, {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: TIME_ZONE,
      }).format(new Date(value)),
      value: value,
    }));
  }, [groupedSlots, dateSlotValue]);

  const dateButtonIndex = dateSlots.findIndex(
    ({ value }) => value === dateSlotValue,
  );
  const timeButtonIndex = timeSlots.findIndex(
    ({ value: buttonValue }) => buttonValue === value,
  );

  return (
    <ScheduleWrapper>
      <Dates>
        <StyledP2>Tanggal</StyledP2>
        <Buttons $buttonIndex={dateButtonIndex}>
          {dateSlots.map(({ title, value }) => (
            <Button onClick={setDateSlotValue} key={value} value={value}>
              {title}
            </Button>
          ))}
        </Buttons>
      </Dates>
      <Time>
        <StyledP2>Waktu</StyledP2>
        <ThreeColumnButtons $buttonIndex={timeButtonIndex}>
          {timeSlots.map(({ title, value }) => (
            <Button
              onClick={event => {
                // @hardcode
                // ym('reachGoal', 'date_time_newautobooking');
                onValueChange(event);
              }}
              key={value}
              value={value}
            >
              {title}
            </Button>
          ))}
        </ThreeColumnButtons>
      </Time>
    </ScheduleWrapper>
  );
};

export default Schedule;
