import styled from 'styled-components/native';
import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  margin-left: ${vwPx(2)};
  font-family: 'Poppins-Light';
  color: ${theme.mediumGray};
  position: relative;
  top: ${vhPx(0.15)};
  font-size: ${vwPx(3.5)};
`;
