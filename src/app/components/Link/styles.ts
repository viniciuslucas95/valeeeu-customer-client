import styled from 'styled-components/native';
import { theme } from '../../../configs/constants';
import { vwPx } from '../../helpers/units';

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Text = styled.Text`
  font-family: 'Poppins-Light';
  color: ${theme.primaryPurple};
  font-size: ${vwPx(3.5)};
`;
