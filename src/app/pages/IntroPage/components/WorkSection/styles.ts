import styled from 'styled-components/native';
import { Unit } from '../../../../../shared/app/helpers';

const { vwPx } = Unit;

export const Container = styled.View`
  padding: 0 ${vwPx(5)};
  width: ${vwPx(100)};
`;

export const GooglePlayImage = styled.Image`
  width: auto;
  height: ${vwPx(20)};
`;
