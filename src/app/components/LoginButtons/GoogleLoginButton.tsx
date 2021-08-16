import React, { useState } from 'react';

import {
  TouchableContainer,
  TextContainer,
  Plataform,
  Text,
  IconContainer,
  ButtonContainer,
} from './styles';
import { GoogleIcon } from '../../../assets/svgs/icons';
import { IProps } from './interfaces';

export function GoogleLoginButton({
  isFetchingData,
  isPlataformFetchingData,
  fetchDataAsync,
  style,
}: IProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableContainer
      onPressIn={() => {
        if (!isFetchingData) setIsPressed(true);
      }}
      onPressOut={() => setIsPressed(false)}
      onPress={() => {
        if (isFetchingData) return;

        fetchDataAsync();
      }}
    >
      <ButtonContainer
        {...style}
        plataform={Plataform.Google}
        highlight={isPressed || isPlataformFetchingData}
      >
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
