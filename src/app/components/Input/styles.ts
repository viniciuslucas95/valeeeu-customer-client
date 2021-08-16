import styled from 'styled-components/native';

import { theme, sizes } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export const Container = styled.TextInput`
  width: ${sizes.elementMaxWidth};
  height: ${sizes.elementHeight};
  border: ${sizes.border} solid ${theme.primaryPurple};
  border-radius: ${vwPx(10)};
  background-color: ${theme.white};
  padding: ${vhPx(1)} ${vwPx(4)} ${vhPx(0.5)} ${vwPx(4)};
  font-family: 'Poppins-Light';
  color: ${theme.black};
  position: relative;
`;
