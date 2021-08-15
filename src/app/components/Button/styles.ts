import styled from 'styled-components/native';
import { theme, sizes } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

interface IProps {
  secondary?: boolean;
}

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Container = styled.View<IProps>`
  background-color: ${({ secondary }) =>
    secondary ? theme.white : theme.primaryPurple};
  width: ${vwPx(70)};
  height: ${vhPx(6.5)};
  border-radius: ${vwPx(10)};
  border-color: ${({ secondary }) =>
    secondary ? theme.primaryPurple : theme.white};
  border-width: ${({ secondary }) => (secondary ? sizes.inputBorder : 0)};
  padding: 0 ${vwPx(2)};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<IProps>`
  position: relative;
  top: ${vhPx(0.2)};
  font-family: 'Poppins-Medium';
  color: ${({ secondary }) => (secondary ? theme.primaryPurple : theme.white)};
  text-transform: uppercase;
`;
