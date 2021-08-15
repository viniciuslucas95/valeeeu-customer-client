import React, { PropsWithChildren } from 'react';

import { TouchableContainer, Text } from './styles';

export function Link({ children, style }: PropsWithChildren<any>) {
  return (
    <TouchableContainer {...style}>
      <Text>{children}</Text>
    </TouchableContainer>
  );
}
