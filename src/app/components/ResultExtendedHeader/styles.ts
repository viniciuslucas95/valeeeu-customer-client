import styled from 'styled-components/native';
import { colors, sizes } from '../../../shared/configs';
import { Unit } from '../../../shared/app/helpers';

const { vhPx, vwPx } = Unit;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${vhPx(0.25)} ${vwPx(5)} 0 ${vwPx(5)};
  background-color: ${colors.purple};
  height: ${vhPx(5)};
  border-bottom-color: ${colors.purpleHighlight};
  border-bottom-width: ${sizes.border};
`;
