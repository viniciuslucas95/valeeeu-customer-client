import React, { PropsWithChildren } from 'react';
import { FlexDistribution } from '../../../../../shared/app/enums';
import { IStyleable } from '../../../../../shared/app/interfaces';
import { Container } from './styles';

interface IProps extends IStyleable {
  children?: object;
  justifyContent?: string;
}

export function IconsContainer({
  children,
  style,
  justifyContent,
}: PropsWithChildren<IProps>) {
  return (
    <Container
      style={style}
      justifyContent={justifyContent ?? FlexDistribution.spaceBetween}
    >
      {children}
    </Container>
  );
}
