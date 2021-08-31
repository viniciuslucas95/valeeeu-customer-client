import styled from 'styled-components/native';
import { Unit } from '../../../../../shared/app/helpers';
import { colors } from '../../../../../shared/configs';

const { vwPx } = Unit;

export const Text = styled.Text`
  font-family: 'Poppins-Light';
  color: ${colors.purple};
  font-size: ${vwPx(3.75)};
`;
