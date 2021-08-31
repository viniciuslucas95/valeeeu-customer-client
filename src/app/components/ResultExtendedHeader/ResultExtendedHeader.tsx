import React from 'react';
import { Link } from '../../../shared/app/components';
import { Sizes } from '../../../shared/app/enums';
import {
  LightText,
  MediumText,
} from '../../../shared/app/styledComponents/Texts';
import { Container } from './styles';

const textSize = Sizes.big;

export function ResultExtendedHeader() {
  return (
    <Container>
      <Link
        size={textSize}
        isSecondary
        onPress={() => console.log('previous card pressed')}
      >
        Anterior
      </Link>
      <MediumText size={textSize}>
        2 <LightText size={textSize}>de</LightText>{' '}
        <MediumText size={textSize}>37</MediumText>{' '}
        <LightText size={textSize}>resultados</LightText>
      </MediumText>
      <Link
        size={textSize}
        isSecondary
        onPress={() => console.log('next card pressed')}
      >
        Próximo
      </Link>
    </Container>
  );
}
