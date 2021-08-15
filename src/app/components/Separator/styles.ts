import styled from 'styled-components/native';

import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export const Container = styled.View`
  width: ${vwPx(70)};
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View`
  background-color: ${theme.primaryPurple};
  height: ${vhPx(0.1)};
  flex: 1;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Light';
  color: ${theme.primaryPurple};
  margin: 0 ${vwPx(3)};
`;
