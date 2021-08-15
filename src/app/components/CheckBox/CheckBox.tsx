import React, { PropsWithChildren } from 'react';

import { TouchableContainer, Container, Text } from './styles';
import { CheckBox as CheckBoxImage } from '../../../assets/svgs';

export function CheckBox({ children }: PropsWithChildren<any>) {
  return (
    <TouchableContainer>
      <Container>
        <CheckBoxImage />
        <Text>{children}</Text>
      </Container>
    </TouchableContainer>
  );
}
