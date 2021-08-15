import React from 'react';

import {
  TouchableContainer,
  TextContainer,
  Plataform,
  Text,
  IconContainer,
  ButtonContainer,
} from './styles';
import { FacebookIcon } from '../../../assets/svgs/icons';

export function FacebookLoginButton(props: any) {
  return (
    <TouchableContainer>
      <ButtonContainer {...props} plataform={Plataform.Facebook}>
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
        <TextContainer>
          <Text>Entrar com o Facebook</Text>
        </TextContainer>
      </ButtonContainer>
    </TouchableContainer>
  );
}
