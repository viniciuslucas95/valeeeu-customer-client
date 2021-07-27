import React from 'react';
import { Svg, Color, Circle } from 'react-native-svg';
import { theme } from '../../../configs/constants';
import { rem } from '../../helpers';

export interface IProps {
  size?: number;
  fill?: Color;
  stroke?: Color;
  strokeWidth?: number;
}

export function BallSvg({
  size = rem(10),
  fill = theme.black,
  stroke = theme.black,
  strokeWidth = 0,
}: IProps) {
  const adjustedSize = 3 * size;
  const viewBox = `0 0 ${adjustedSize} ${adjustedSize}`;

  return (
    <Svg width={adjustedSize} height={adjustedSize} viewBox={viewBox}>
      <Circle
        cx={adjustedSize / 2}
        cy={adjustedSize / 2}
        r={adjustedSize / 2 - strokeWidth / 2}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}
