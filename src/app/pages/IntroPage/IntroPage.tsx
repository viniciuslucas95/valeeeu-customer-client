import React, { PropsWithChildren, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {
  Container,
  Logo,
  NavContainer,
  BallsContainer,
  SkipButtonContainer,
} from './styles';
import { BallSvg } from '../../components/Svgs';
import { theme } from '../../../configs/constants';
import { vw } from '../../helpers/units';
import { CustomSvg } from '../../components/Svgs';
import { skipButton } from '../../../assets/svgs';
import { ContentChanger } from './ContentChanger';

const buttonsSize = vw(3.25);
const ballsSize = vw(1.25);
const disabledBallConfig = {
  fill: theme.white,
  stroke: theme.darkGray,
  strokeWidth: 0.5,
};

export function IntroPage({ navigation }: PropsWithChildren<any>) {
  const [screen, setScreen] = useState(0);

  function skipIntro() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Search Screen' }],
    });
  }

  return (
    <Container>
      <SkipButtonContainer>
        <TouchableWithoutFeedback onPress={() => skipIntro()}>
          <CustomSvg
            size={buttonsSize}
            svg={skipButton}
            colors={[theme.white, theme.black]}
          />
        </TouchableWithoutFeedback>
      </SkipButtonContainer>
      <Logo>Valeeeu!</Logo>
      <ContentChanger setScreen={setScreen} skipIntro={skipIntro} />
      <NavContainer>
        <BallsContainer>
          <BallSvg
            size={ballsSize}
            {...(screen !== 0 ? { ...disabledBallConfig } : null)}
          />
          <BallSvg
            size={ballsSize}
            {...(screen !== 1 ? { ...disabledBallConfig } : null)}
          />
          <BallSvg
            size={ballsSize}
            {...(screen !== 2 ? { ...disabledBallConfig } : null)}
          />
        </BallsContainer>
      </NavContainer>
    </Container>
  );
}
