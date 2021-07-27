import styled from 'styled-components/native';

import { vhPx, vwPx } from '../../helpers/units';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${vhPx(15)};
`;

export const SkipButtonContainer = styled.View`
  position: absolute;
  top: ${vhPx(10)};
  width: ${vwPx(85)};
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: ${vhPx(1)};
`;

export const Logo = styled.Text`
  font-family: 'FugazOne-Regular';
  font-size: ${vwPx(20)};
`;

export const NavContainer = styled.View`
  position: absolute;
  bottom: ${vhPx(5)};
  width: ${vwPx(80)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BallsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
`;
