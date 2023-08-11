import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Icons } from '../icons';
import { Button } from './Button';
import { ButtonKind, ButtonSize } from './types';

const KindName = styled.div`
  grid-column: span 3;
  font-size: 32px;
  line-height: 40px;

  color: #000000;
`;

const TypeOfButton = styled.div`
  font-size: 16px;
  line-height: 20px;
`;

const SizeName = styled.div`
  font-size: 32px;
  line-height: 40px;

  grid-column: 1 / 3;
`;

const ButtonCondition = styled.div`
  font-size: 16px;
  line-height: 20px;

  grid-column: 3 / 4;
`;

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(12, auto);
  gap: 12px;
  align-items: center;
`;

const DarkTheme = styled.div`
  background-color: black;
  color: #ffffff;
  padding: 20px 10px;
`;

const kinds = [ButtonKind.PRIMARY, ButtonKind.SECONDARY, ButtonKind.TECHNICAL];
const sizes = [ButtonSize.LARGE, ButtonSize.MEDIUM, ButtonSize.SMALL];
const states = ['default', 'disabled'];

storiesOf('ui-kit/Button', module)
  .add('default', () => {
    return (
      <Root>
        <SizeName />
        <ButtonCondition />
        <KindName>Primary</KindName>
        <KindName>Secondary</KindName>
        <KindName>Technical</KindName>
        <SizeName />
        <ButtonCondition />
        <TypeOfButton>With icon</TypeOfButton>
        <TypeOfButton>Text</TypeOfButton>
        <TypeOfButton>Icon</TypeOfButton>
        <TypeOfButton>With icon</TypeOfButton>
        <TypeOfButton>Text</TypeOfButton>
        <TypeOfButton>Icon</TypeOfButton>
        <TypeOfButton>With icon</TypeOfButton>
        <TypeOfButton>Text</TypeOfButton>
        <TypeOfButton>Icon</TypeOfButton>
        {sizes.map(size =>
          states.map((state, ind) => (
            <React.Fragment key={ind}>
              <SizeName>{state === 'default' ? size : ''}</SizeName>
              <ButtonCondition>{`${state[0].toUpperCase()}${state.slice(
                1,
              )}`}</ButtonCondition>
              {kinds.map((kind, ind) => (
                <React.Fragment key={ind}>
                  <div>
                    <Button
                      disabled={state === 'disabled'}
                      kind={kind}
                      icon={Icons[size].class}
                      size={size}
                    >
                      Button
                    </Button>
                  </div>
                  <div>
                    <Button
                      disabled={state === 'disabled'}
                      kind={kind}
                      size={size}
                    >
                      Button
                    </Button>
                  </div>
                  <div>
                    <Button
                      disabled={state === 'disabled'}
                      kind={kind}
                      icon={Icons[size].class}
                      size={size}
                    />
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          )),
        )}
      </Root>
    );
  })
  .add('DarkTechnical', () => {
    return (
      <DarkTheme>
        <Root>
          <SizeName />
          <ButtonCondition />
          <TypeOfButton>Text</TypeOfButton>
          {sizes.map(size =>
            states.map((state, ind) => (
              <React.Fragment key={ind}>
                <SizeName>{state === 'default' ? size : ''}</SizeName>
                <ButtonCondition>{`${state[0].toUpperCase()}${state.slice(
                  1,
                )}`}</ButtonCondition>
                <React.Fragment>
                  <div>
                    <Button
                      disabled={state === 'disabled'}
                      kind={ButtonKind.DARKTECHNICAL}
                      size={size}
                    >
                      Кнопка
                    </Button>
                  </div>
                </React.Fragment>
              </React.Fragment>
            )),
          )}
        </Root>
      </DarkTheme>
    );
  })
  .add('Custom width', () => (
    <Button width="666px">Button with custom width 666px</Button>
  ));
