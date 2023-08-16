import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  createApi,
  fetchBaseQuery,
  ApiProvider,
} from '@reduxjs/toolkit/query/react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ym from 'react-yandex-metrika';

const BRANCH_CODE = 'OSA-autobooking';
export const BRANCH_CODE_INDONESIA = 'Indonesia-autobooking';
export const CALLBACK = 'callback';

interface IParams {
  branchCode?: string;
  getDateRangeLabel(date: Date): string;
  isFooter?: boolean;
  isLight?: boolean;
}

const getCookieByName = (name: string) => {
  const cookieKeyToValue = document.cookie
    .split(';')
    .map(rawCookie => rawCookie.trim().split('='))
    .find(cookieKeyToValue => cookieKeyToValue[0] === name);
  return cookieKeyToValue && cookieKeyToValue[1];
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // @hardcode
    // baseUrl: '/api/v2',
    baseUrl: 'https://temp-try-to-disable-cors.dev.alg.team/api/v2',
  }),
  endpoints: builder => ({
    createOnlineBooking: builder.mutation({
      extraOptions: { maxRetries: 0 },
      query: body => ({
        body,
        method: 'POST',
        url: 'online-booking/create',
      }),
    }),

    getOnlineBookingList: builder.query({
      query: ({ branchCode, childAge, childBirthDate }) => ({
        params: {
          branchCode,
          ...(childAge ? { childAge } : { childBirthDate }),
        },
        url: 'online-booking/list',
      }),
      transformResponse: result => result.data,
    }),
  }),
});

export function useForm({
  branchCode = BRANCH_CODE,
  getDateRangeLabel,
  isFooter = false,
  isLight,
}: IParams) {
  const [parentName, setParentName] = useState('');
  const [childFirstName, setChildFirstName] = useState('');
  const [childLastName, setChildLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [childFavoriteSubject, setChildFavoriteSubject] = useState<
    string | null
  >(null);
  const [hasLaptop, setHasLaptop] = useState<string | null>(null);
  const [childAge, setChildAge] = useState<string | null>(null);
  const [childBirthDate, setChildBirthDate] = useState<string | null>(null);

  const [dateSlotValue, setDateSlotValue] = useState<string>('');

  const [timeSlotValue, setTimeSlotValue] = useState<string>('');

  const {
    data,
    isSuccess: isListLoaded,
    refetch: refetchSlots,
  } = api.useGetOnlineBookingListQuery(
    childAge || childBirthDate
      ? {
          branchCode,
          ...(childAge && { childAge }),
          ...(childBirthDate && { childBirthDate }),
        }
      : skipToken,
  );

  useEffect(() => {
    if (data?.items.length === 1) {
      const startAt = data.items[0].groupStartTime;
      const date = new Date(startAt);
      setDateSlotValue(getDateRangeLabel(date));
      setTimeSlotValue(startAt);
    }
  }, [data?.items, getDateRangeLabel]);

  const groupedSlots = useMemo(() => {
    const slots = new Map<string, string[]>();

    data?.items.forEach(item => {
      const date = new Date(item.groupStartTime);

      const key = getDateRangeLabel(date);

      const dates = slots.get(key);
      if (dates) {
        dates.push(item.groupStartTime);
      } else {
        slots.set(key, [item.groupStartTime]);
      }
    });

    return slots;
  }, [data, getDateRangeLabel]);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [createOnlineBookingMutation, { isSuccess }] =
    api.useCreateOnlineBookingMutation();

  const [isPending, setIsPending] = useState(false);

  //  const { closePopup, isPopupVisible, openPopup } = usePopup();

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      let isSuccess = false;

      if (!executeRecaptcha) return isSuccess;

      setIsPending(true);

      try {
        const reCaptchaToken = await executeRecaptcha('online_booking');
        if (reCaptchaToken) {
          let crmPipeline = 'pipeline__autobooking_mini';
          let crmStatus =
            timeSlotValue && timeSlotValue !== CALLBACK
              ? 'group_sign'
              : 'autobooking_no_time';
          let meta = Object.fromEntries(
            new URLSearchParams(location.search).entries(),
          );
          if (branchCode === BRANCH_CODE_INDONESIA) {
            crmPipeline = 'main__2';
            crmStatus = 'autobooking';
            meta.fpb = getCookieByName('_fbp') || '';
            meta.fbc = getCookieByName('_fbc') || '';
            meta.gclientid = getCookieByName('_ga') || '';
            meta.ym_uid = getCookieByName('_ym_uid') || '';
            meta.referrer = document.referrer;
          }
          const payload: ICreateOnlineBookingParams = {
            branchCode,
            childAge: childAge || undefined,
            childBirthDate: childBirthDate || undefined,
            childFirstName: childFirstName || 'noname',
            childLastName: childLastName || childFirstName || 'noname',
            crmPipeline,
            crmStatus,
            email,
            meta,
            parentName: parentName || 'noname',
            phone,
            reCaptchaToken,
          };

          if (timeSlotValue && timeSlotValue !== CALLBACK) {
            payload.startTime = timeSlotValue;
          }

          if (childFavoriteSubject) {
            payload.hobby = childFavoriteSubject;
          }

          if (branchCode === BRANCH_CODE_INDONESIA) {
            ym('reachGoal', 'contact_send_newautobooking');
          } else {
            if (isFooter) {
              ym('reachGoal', 'submit_footerform');
            } else if (isLight === undefined) {
              ym('reachGoal', 'submit_headform');
            } else {
              ym('reachGoal', isLight ? 'submit_whiteform' : 'submit_darkform');
            }
            ym('reachGoal', 'submit_form');
          }

          await createOnlineBookingMutation(payload).unwrap();
          // @hardcode
          // const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));
          // await sleep();
          isSuccess = true;
        }
      } catch (e) {
        console.error(e);
        // @hardcode
        isSuccess = true;
      }
      // openPopup();
      setIsPending(false);

      return isSuccess;
    },
    [
      branchCode,
      childAge,
      childBirthDate,
      childFavoriteSubject,
      childFirstName,
      childLastName,
      email,
      executeRecaptcha,
      isFooter,
      isLight,
      //      openPopup,
      parentName,
      phone,
      timeSlotValue,
    ],
  );

  return {
    childAge,
    childBirthDate,
    childFavoriteSubject,
    childFirstName,
    childLastName,
    //    closePopup,
    dateSlotValue,
    email,
    groupedSlots,
    hasLaptop,
    isListLoaded,
    isPending,
    //    isPopupVisible,
    isSuccess,
    onSubmit,
    parentName,
    phone,
    refetchSlots,
    setChildAge,
    setChildBirthDate,
    setChildFavoriteSubject,
    setChildFirstName,
    setChildLastName,
    setDateSlotValue,
    setEmail,
    setHasLaptop,
    setParentName,
    setPhone,
    setTimeSlotValue,
    timeSlotValue,
  };
}
