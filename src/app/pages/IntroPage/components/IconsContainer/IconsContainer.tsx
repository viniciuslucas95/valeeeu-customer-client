import React, { PropsWithChildren } from 'react';
import { IStyleable } from '../../../../../shared/app/pages/components/interfaces';
import { FlexDistribution } from '../../../../../shared/app/pages/enums';
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
