import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { theme } from '../../configs/constants';

interface IProps {
  filled?: boolean;
  style?: any;
}

export function CheckBox({ filled, style }: IProps) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...style}
    >
      <Rect
        x={0.5}
        y={0.5}
        width={14}
        height={14}
        rx={7}
        fill={filled ? theme.mediumGray : theme.white}
        stroke={theme.mediumGray}
      />
    </Svg>
  );
}
