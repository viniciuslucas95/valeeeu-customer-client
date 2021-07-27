import React from 'react';
import { Animated } from 'react-native';

import {
  TextContainer,
  IconsContainer,
  Title,
  Paragraph,
  ScreenContainer,
  StartButtonContainer,
} from './styles';
import { theme } from '../../../../configs/constants';
import { CustomSvg } from '../../../components/Svgs';
import {
  splashScreen1Svg,
  splashScreen2Svg,
  splashScreen3Svg,
  startButton,
} from '../../../../assets/svgs';
import { vw } from '../../../helpers/units';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const iconsSize = vw(2.5);
const startButtonSize = vw(3.5);

interface IProps {
  translateX: Animated.Value;
}

interface IExtProps extends IProps {
  skipIntro(): void;
}

export function Content1({ translateX }: IProps) {
  return (
    <ScreenContainer translateX={translateX}>
      <IconsContainer>
        <CustomSvg
          svg={splashScreen1Svg}
          size={iconsSize}
          colors={[theme.black, theme.darkGray]}
        />
      </IconsContainer>
      <TextContainer>
        <Title>Sem tempo a perder...</Title>
        <Paragraph>
          Ninguém tem tempo a perder com burocracias que apenas atrasam a vida.
        </Paragraph>
        <Title>Nada de ficar sem trabalhar!</Title>
        <Paragraph>
          Todos podem ganhar sua graninha! Faça o seu perfil e mostre para a
          vizinhança que você está disponível para ser contratado.
        </Paragraph>
      </TextContainer>
    </ScreenContainer>
  );
}

export function Content2({ translateX }: IProps) {
  return (
    <ScreenContainer translateX={translateX}>
      <IconsContainer>
        <CustomSvg
          svg={splashScreen2Svg}
          size={iconsSize}
          colors={[theme.black, theme.darkGray]}
        />
      </IconsContainer>
      <TextContainer>
        <Title>Veja no mapa serviços próximos</Title>
        <Paragraph>
          Com um sistema de localização em tempo real, ache serviços oferecidos
          próximos a você que estão disponíveis no momento.
        </Paragraph>
      </TextContainer>
    </ScreenContainer>
  );
}

export function Content3({ translateX, skipIntro }: IExtProps) {
  return (
    <ScreenContainer translateX={translateX}>
      <IconsContainer>
        <CustomSvg
          svg={splashScreen3Svg}
          size={iconsSize}
          colors={[theme.black, theme.darkGray]}
        />
      </IconsContainer>
      <TextContainer>
        <Title>Todos são avaliados</Title>
        <Paragraph>
          Na dúvida se o serviço prestado é bom ou se o cliente paga direito?
          Veja a avaliação de ambos os usuários pelas suas estrelas e
          comentários de outros usuários.
        </Paragraph>
        <Title>Pronto para começar?</Title>
        <StartButtonContainer>
          <TouchableWithoutFeedback onPress={() => skipIntro()}>
            <CustomSvg
              svg={startButton}
              size={startButtonSize}
              colors={[theme.white, theme.black]}
            />
          </TouchableWithoutFeedback>
        </StartButtonContainer>
      </TextContainer>
    </ScreenContainer>
  );
}
