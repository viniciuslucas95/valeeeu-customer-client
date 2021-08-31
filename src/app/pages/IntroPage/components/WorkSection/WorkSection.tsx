import React from 'react';
import { ClockSvg, MoneySvg, SearchSvg } from '../../../../../assets/svgs';
import { Container, GooglePlayImage } from './styles';
import { Unit } from '../../../../../shared/app/helpers';
import { IconsContainer } from '../IconsContainer';
import {
  LightText,
  MediumText,
  SemiBoldText,
} from '../../../../../shared/app/styledComponents/Texts';
import { colors } from '../../../../../shared/configs';
import { FlexDistribution, Sizes } from '../../../../../shared/app/enums';

const googlePlayImage = require('../../../../../assets/images/google-play-badge.png');

const { vh, vw } = Unit;
const marginVertical = vh(1.5);
const iconsSize = vw(0.8);
const textColor = colors.purple;

export function WorkSection() {
  return (
    <Container>
      <IconsContainer
        style={{ marginTop: marginVertical }}
        justifyContent={FlexDistribution.spaceAround}
      >
        <SearchSvg size={iconsSize} />
        <ClockSvg size={iconsSize} />
        <MoneySvg size={iconsSize} />
      </IconsContainer>
      <MediumText
        color={textColor}
        size={Sizes.big}
        style={{ marginTop: marginVertical }}
      >
        Ofereça você também seus serviços ou venda seus produtos!
      </MediumText>
      <LightText color={textColor}>
        Aqui há espaço para todos! Possibilitamos diversos método de trabalho:
        você pode ir na residência do cliente, o cliente pode ir no seu
        estabelecimento, você pode trabalhar a distância com envios por
        transportadoras e também de forma virtual.
      </LightText>
      <LightText
        color={textColor}
        size={Sizes.huge}
        style={{ marginTop: marginVertical }}
      >
        Baixe já a versão de trabalhador e se cadastre{' '}
        <SemiBoldText color={textColor} size={Sizes.huge}>
          gratuitamente
        </SemiBoldText>
        !
      </LightText>
      <GooglePlayImage
        source={googlePlayImage}
        resizeMode='contain'
        style={{ marginTop: marginVertical }}
      />
    </Container>
  );
}
