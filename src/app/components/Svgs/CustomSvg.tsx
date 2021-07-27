import React from 'react';
import { Svg, Path, Color } from 'react-native-svg';

import { theme } from '../../../configs/constants';
import { rem } from '../../helpers';

interface IVector {
  path: string;
  layer?: number;
}

interface ISvg {
  svg: {
    defaultWidth: number;
    defaultHeight: number;
    vectors: IVector[];
  };
  size?: number;
  colors?: Color[];
}

const defaultSize = rem(5);

export function CustomSvg({ svg, colors, size }: ISvg) {
  const { defaultWidth, defaultHeight, vectors } = svg;
  const width = (defaultWidth / 10) * (size ?? defaultSize);
  const height = (defaultHeight / 10) * (size ?? defaultSize);
  const viewBox = `0 0 ${defaultWidth} ${defaultHeight}`;

  return (
    <Svg width={width} height={height} viewBox={viewBox}>
      {vectors.map((vector, index) => {
        const layer = vector.layer ?? 0;

        return (
          <Path
            key={index}
            d={vector.path}
            fill={colors ? colors[layer] ?? colors[0] : theme.black}
          />
        );
      })}
    </Svg>
  );
}
