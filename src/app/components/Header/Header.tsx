import React, { PropsWithChildren, useState } from 'react';

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  TouchableContainer,
  IconContainer,
} from './styles';
import { BackIcon } from '../../../assets/svgs/icons';
import { theme } from '../../../configs/constants';
import { vw } from '../../helpers/units';

export function Header({ children, navigation }: PropsWithChildren<any>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container>
      <ButtonContainer>
        <TouchableContainer
          onPressIn={() => setIsHighlighting(true)}
          onPressOut={() => setIsHighlighting(false)}
          onPress={() => navigation.goBack()}
        >
          <IconContainer>
            <BackIcon
              fillColor={isHighlighting ? theme.lightGray : theme.white}
              size={isHighlighting ? vw(1.1) : undefined}
            />
          </IconContainer>
        </TouchableContainer>
      </ButtonContainer>
      <TitleContainer>
        <Text>{children}</Text>
      </TitleContainer>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
}
