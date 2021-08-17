import React, { PropsWithChildren, useState } from 'react';

import { TouchableContainer, ButtonContainer, Text, Container } from './styles';

interface IProps {
  secondary?: boolean;
  style?: any;
}

export function Button({
  children,
  style,
  secondary,
}: PropsWithChildren<IProps>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container {...style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighting(true)}
        onPressOut={() => setIsHighlighting(false)}
      >
        <ButtonContainer secondary={secondary} highlight={isHighlighting}>
          <Text secondary={secondary} highlight={isHighlighting}>
            {children}
          </Text>
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
