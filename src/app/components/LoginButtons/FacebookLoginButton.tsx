import React, { useState } from 'react';

import {
  TouchableContainer,
  TextContainer,
  Plataform,
  Text,
  IconContainer,
  ButtonContainer,
} from './styles';
import { FacebookIcon } from '../../../assets/svgs/icons';
import { IProps } from './interfaces';

export function FacebookLoginButton({
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
        plataform={Plataform.Facebook}
        highlight={isPressed || isPlataformFetchingData}
      >
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
