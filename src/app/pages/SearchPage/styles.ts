import styled from 'styled-components/native';

import { sizes, theme } from '../../../configs/constants';
import { vh, vhPx, vwPx } from '../../helpers/units';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const TouchableContainer = styled.TouchableWithoutFeedback`
  position: absolute;
  bottom: ${vhPx(5)};
`;

export const SearchContainer = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: ${vhPx(5)};
  width: ${sizes.elementMaxWidth};
  border: ${sizes.border} solid ${theme.primaryPurple};
  border-radius: ${vwPx(10)};
  background-color: ${theme.white};
  padding: ${vwPx(2)} ${vwPx(4)};
  height: ${sizes.elementHeight};
`;

export const Placeholder = styled.Text`
  top: ${vhPx(0.25)};
  font-family: 'Poppins-Regular';
  color: ${theme.mediumGray};
  font-size: ${vwPx(4.5)};
`;

export const SeparatorContainer = styled.View`
  left: ${vwPx(10)};
`;

export const IconContainer = styled.View`
  right: ${vwPx(1)};
`;
