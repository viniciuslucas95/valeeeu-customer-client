import styled from 'styled-components/native';

import { sizes, theme } from '../../../configs/constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.white};
`;

export const CheckBoxAndRecoverContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${sizes.elementMaxWidth};
`;
