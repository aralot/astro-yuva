import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H3Alt, H4, H4Alt, H5 } from './Header';
import { P1, P2Long, P2Short, P3 } from './Paragraph';
import { N1, N2 } from './Numbers';
import { TagAndLabel } from './TagAndLabel';

const Root = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-content: center;

  & > * {
    display: flex;
    align-items: center;
    height: 56px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.black_opacity_10};
  }
`;

const Title = styled(TagAndLabel)`
  color: ${({ theme }) => theme.palette.black_pearl};
  text-transform: unset;
  padding-right: 48px;
`;

storiesOf('ui-kit/Typography', module).add('default', () => {
  return (
    <Root>
      <Title>H1 32/40</Title>
      <H1>Заголовок 1</H1>
      <Title>H2 24/30</Title>
      <H2>Заголовок 2</H2>
      <Title>H3 18/24</Title>
      <H3>Заголовок 3</H3>
      <Title>H3Alt 18/24</Title>
      <H3Alt>альт. Заголовок 3 </H3Alt>
      <Title>H4 16/20</Title>
      <H4>Заголовок 4</H4>
      <Title>H4Alt 16/20</Title>
      <H4Alt>альт. заголовок 4</H4Alt>
      <Title>H5 16/20</Title>
      <H5>Заголовок 5</H5>
      <Title>P1 18/24</Title>
      <P1>Абзац 1</P1>
      <Title>P2Long 16/24</Title>
      <P2Long>Абзац с длинными строками</P2Long>
      <Title>P2Short 16/20</Title>
      <P2Short>
        Абзац с одной или двумя строками с одним или двумя словами
      </P2Short>
      <Title>P3 14/18</Title>
      <P3>Абзац 3</P3>
      <Title>TagAndLabel 14/18</Title>
      <TagAndLabel>Тэг и лэйбл ИнПУТОВ</TagAndLabel>
      <Title>N1 44/56</Title>
      <N1>1</N1>
      <Title>N2 32/40</Title>
      <N2>11</N2>
    </Root>
  );
});
