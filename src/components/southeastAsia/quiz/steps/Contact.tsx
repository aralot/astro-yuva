import React, { FunctionComponent, useCallback } from 'react';
import ym from 'react-yandex-metrika';

import { Checkbox, Link, P3 } from '../../../ui-kit';

import { StyledInput, StyledPhoneInput, Subheader } from './styles';
import { IContactProps } from './types';

const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  const input = event.target;
  if (input.value.trim()) {
    input.setCustomValidity('');
    return true;
  } else {
    input.setCustomValidity('Silakan isi disini');
  }
};

const Contact: FunctionComponent<IContactProps> = ({
  checkboxState,
  childFirstNameState,
  parentNameState,
  phoneState,
}) => {
  const [childFirstName, setChildFirstName] = childFirstNameState;
  const [parentName, setParentName] = parentNameState;
  const [phone, setPhone] = phoneState;
  const [isChecked, setIsChecked] = checkboxState;

  const onPhoneInput = useCallback(event => {
    const MIN_NUMBER_COUNT = 12;
    const MAX_NUMBER_COUNT = 14;

    const input = event.target;
    const numberCount = input.value.replace(/\D+/g, '').length;
    if (numberCount < MIN_NUMBER_COUNT || numberCount > MAX_NUMBER_COUNT) {
      input.setCustomValidity(
        `Silakan memasukan nomor yang sesuai (${MIN_NUMBER_COUNT}-${MAX_NUMBER_COUNT} angka)`,
      );
    } else {
      input.setCustomValidity('');
    }
  }, []);

  return (
    <>
      <Subheader>
        Kami akan segera menghubungi Anda melalui WhatsApp untuk mengonfirmasi
        entri Anda 🔥
      </Subheader>
      <div>
        <StyledInput
          autoFocus
          label="Nama anak Anda"
          onChange={e => setChildFirstName(e.target.value)}
          onInput={validateInput}
          onFocus={event => {
            ym('reachGoal', 'childs_name_newautobooking');
            validateInput(event);
          }}
          placeholder="Name"
          value={childFirstName}
          required
        />
        <StyledInput
          label="Masukkan nama anda"
          onChange={e => setParentName(e.target.value)}
          placeholder="Name"
          onInput={validateInput}
          onFocus={event => {
            ym('reachGoal', 'parents_name_newautobooking');
            validateInput(event);
          }}
          value={parentName}
          required
        />
        <StyledPhoneInput
          defaultCode="+62 "
          label="Masukkan nomor telepon anda"
          onChange={setPhone}
          onInput={onPhoneInput}
          onFocus={() => ym('reachGoal', 'contact_phone_newautobooking')}
          placeholder="+62 (999) 999-99-9999"
          value={phone}
        />
        <Checkbox
          checked={isChecked}
          onChange={e => setIsChecked(e.target.checked)}
          label={
            <P3>
              Saya setuju{' '}
              <Link
                href="https://docs.google.com/document/d/1914ESnZStZMTyRC1B0v8aaSIg0HESJHZjKNkC0wg6ws/edit"
                target="_blank"
              >
                dengan ketentuan
              </Link>{' '}
              yang berlaku
            </P3>
          }
        />
      </div>
    </>
  );
};

export default Contact;
