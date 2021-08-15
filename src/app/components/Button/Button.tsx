import React, { PropsWithChildren } from 'react';

import { TouchableContainer, Container, Text } from './styles';

interface IProps {
  secondary?: boolean;
  style?: any;
}

export function Button({
  children,
  style,
  secondary,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableContainer>
      <Container secondary={secondary} {...style}>
        <Text secondary={secondary}>{children}</Text>
      </Container>
    </TouchableContainer>
  );
}
