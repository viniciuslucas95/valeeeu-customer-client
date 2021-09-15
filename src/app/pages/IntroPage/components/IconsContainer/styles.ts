import styled from 'styled-components/native';
import { Unit } from '../../../../../shared/app/helpers';

const { vwPx } = Unit;

interface IProps {
  justifyContent: string;
}

export const Container = styled.View<IProps>`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  padding: 0 ${vwPx(4)};
`;
