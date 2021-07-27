import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { theme } from '../../../../configs/constants';
import { vhPx, vwPx } from '../../../helpers/units';

interface IProps {
  translateX: Animated.Value;
}

export const Screens = styled.View`
  flex-direction: row;
  left: ${vwPx(100)};
`;

export const ScreenContainer = styled(Animated.View)<IProps>`
  align-items: center;
  width: ${vwPx(100)};
`;

export const IconsContainer = styled.View`
  margin: ${vhPx(1)} 0 ${vhPx(3)} 0;
`;

export const TextContainer = styled.View`
  width: ${vwPx(80)};
`;

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: ${vwPx(5)};
`;

export const Paragraph = styled.Text`
  font-family: 'Poppins-Medium';
  color: ${theme.darkGray};
  font-size: ${vwPx(4)};
  margin-bottom: ${vhPx(3)};
`;

export const StartButtonContainer = styled.View`
  margin-top: ${vhPx(2.5)};
  align-self: center;
`;
