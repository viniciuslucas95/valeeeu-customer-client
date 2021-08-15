import styled from 'styled-components/native';
import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export enum Plataform {
  Facebook,
  Google,
}

interface IProps {
  plataform: Plataform;
  highlight?: boolean;
}

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View<IProps>`
  background-color: ${({ plataform, highlight }) =>
    plataform === Plataform.Facebook
      ? highlight
        ? theme.facebookHighlight
        : theme.facebook
      : highlight
      ? theme.googleHighlight
      : theme.google};
  flex-direction: row;
  width: ${vwPx(70)};
  height: ${vhPx(6.5)};
  border-radius: ${vwPx(10)};
  padding: 0 ${vwPx(1.25)};
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  flex: 1;
  align-self: center;
`;

export const Text = styled.Text`
  margin: auto;
  color: ${theme.white};
  font-family: 'Roboto-Medium';
  font-size: ${vwPx(4)};
`;