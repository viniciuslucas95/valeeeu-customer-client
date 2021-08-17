import styled from 'styled-components/native';

import { sizes, theme } from '../../../configs/constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.white};
`;

export const NameContainer = styled.View`
  width: ${sizes.elementMaxWidth};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
