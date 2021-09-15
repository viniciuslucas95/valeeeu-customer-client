import styled from 'styled-components/native';
import { colors } from '../../../../../shared/configs';
import { Unit } from '../../../../../shared/app/helpers';

const { vwPx } = Unit;

export const Container = styled.View`
  background-color: ${colors.purple};
  padding: 0 ${vwPx(5)};
  width: ${vwPx(100)};
`;
