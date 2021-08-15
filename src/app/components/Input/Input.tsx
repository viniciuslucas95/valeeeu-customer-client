import React from 'react';

import { theme } from '../../../configs/constants';
import { Container } from './styles';

interface IProps {
  placeholder?: string;
  style?: any;
}

export function Input({ placeholder, style }: IProps) {
  return (
    <Container
      {...style}
      placeholder={placeholder}
      placeholderTextColor={theme.mediumGray}
    ></Container>
  );
}
