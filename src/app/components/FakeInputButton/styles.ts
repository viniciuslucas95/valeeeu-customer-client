import styled from 'styled-components/native';
import { Size } from '../../../shared/app/helpers/Size';
import { IColorable, IHaveSize } from '../../../shared/app/interfaces';
import { colors } from '../../../shared/configs';
import { Unit } from '../../../shared/app/helpers';

const { vhPx, vwPx } = Unit;

interface IProps extends IHaveSize, Omit<IColorable, 'color'> {}

export const Container = styled.View<IProps>`
  background-color: ${({ isSecondary }) =>
    isSecondary ? colors.purple : colors.white};
  width: ${({ width }) => width};
  height: ${({ size }) => Size.getButtonHeight(size)};
  justify-content: center;
  padding: ${vhPx(1)} ${vwPx(4)} ${vhPx(0.5)} ${vwPx(4)};
  border-radius: ${vwPx(10)};
`;
