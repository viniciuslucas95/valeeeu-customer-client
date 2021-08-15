import React from 'react';

import {
  TouchableContainer,
  TextContainer,
  Plataform,
  Text,
  IconContainer,
  ButtonContainer,
} from './styles';
import { GoogleIcon } from '../../../assets/svgs/icons';

export function GoogleLoginButton(props: any) {
  return (
    <TouchableContainer>
      <ButtonContainer {...props} plataform={Plataform.Google}>
        <IconContainer>
          <GoogleIcon />
        </IconContainer>
        <TextContainer>
          <Text>Entrar com o Google</Text>
        </TextContainer>
      </ButtonContainer>
    </TouchableContainer>
  );
}
