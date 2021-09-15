import React from 'react';
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
} from '../../../../../shared/app/styledComponents/Texts';
import { Sizes } from '../../../../../shared/app/enums';
import { FakeInputButton } from '../../../../components';
import { INavigate } from '../../../../../shared/app/interfaces';
import { MainScreens } from '../../../../enums';

const { vh, vw } = Unit;
const marginVertical = vh(1.5);
const iconsSize = vw(0.8);

export function SearchSection({ navigation }: INavigate) {
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
      <FakeInputButton
        placeholderText='Buscar serviço ou produto...'
        size={Sizes.big}
        style={{ marginVertical: marginVertical }}
        onPress={() => navigation.navigate(MainScreens.Result)}
      />
    </Container>
  );
}
