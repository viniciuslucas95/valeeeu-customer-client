import React from 'react';
import { Input } from '../../../../../shared/app/pages/components';
import { Sizes } from '../../../../../shared/app/pages/components/enums';
import { Container } from './styles';
import { Unit } from '../../../../../shared/app/helpers';
import { IconsContainer } from '../IconsContainer';
import {
  ArtistsSvg,
  CaretakerSvg,
  TeacherSvg,
  MechanicSvg,
} from '../../../../../assets/svgs';
import {
  LightText,
  ItalicText,
  SemiBoldText,
} from '../../../../../shared/app/pages/styledComponents/Texts';

const { vh, vw } = Unit;
const marginVertical = vh(1.5);
const iconsSize = vw(0.8);

export function SearchSection() {
  return (
    <Container>
      <IconsContainer style={{ marginTop: marginVertical }}>
        <TeacherSvg size={iconsSize} />
        <ArtistsSvg size={iconsSize} />
        <CaretakerSvg size={iconsSize} />
        <MechanicSvg size={iconsSize} />
      </IconsContainer>
      <LightText style={{ marginTop: marginVertical }}>
        Pesquise por <SemiBoldText>serviços</SemiBoldText> (
        <ItalicText>eletricistas</ItalicText>,{' '}
        <ItalicText>manicures</ItalicText>, <ItalicText>professores</ItalicText>
        , <ItalicText>contadores</ItalicText>,{' '}
        <ItalicText>designers</ItalicText>,{' '}
        <ItalicText>entre outros</ItalicText>) ou{' '}
        <SemiBoldText>produtos</SemiBoldText> (<ItalicText>roupas</ItalicText>,{' '}
        <ItalicText>carros</ItalicText>, <ItalicText>utensílios</ItalicText>,{' '}
        <ItalicText>comidas</ItalicText>, <ItalicText>e mais</ItalicText>).
      </LightText>
      <Input
        placeholder='Buscar serviço ou produto...'
        size={Sizes.big}
        style={{ marginVertical: marginVertical }}
      />
    </Container>
  );
}
