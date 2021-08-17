import React from 'react';

import { theme } from '../../../configs/constants';
import { Container } from './styles';

interface IProps {
  placeholder?: string;
  isSecure?: boolean;
  style?: any;
}

export function Input({ placeholder, isSecure, style }: IProps) {
  return (
    <Container
      {...style}
      placeholder={placeholder}
      placeholderTextColor={theme.mediumGray}
      selectionColor={theme.purple}
      secureTextEntry={isSecure}
    ></Container>
  );
}
