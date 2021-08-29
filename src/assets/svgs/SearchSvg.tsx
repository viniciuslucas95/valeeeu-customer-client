import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../shared/app/helpers';
import { IProps } from '../../shared/assets/svgs/interfaces';
import { colors } from '../../shared/configs';

const { vw } = Unit;

export function SearchSvg({ size, style, color }: IProps) {
  const fixedSize = (size ?? vw(1)) / 3;

  return (
    <Svg
      width={53 * fixedSize}
      height={53 * fixedSize}
      viewBox='0 0 53 53'
      fill='none'
      style={style}
    >
      <Path
        d='M51.93 45.515l-10.253-10.25a2.466 2.466 0 00-1.748-.72h-1.676a21.278 21.278 0 004.524-13.16C42.777 9.572 33.204 0 21.39 0 9.573 0 0 9.572 0 21.385 0 33.198 9.573 42.77 21.389 42.77c4.966 0 9.532-1.686 13.162-4.524v1.676c0 .658.257 1.285.72 1.748l10.252 10.25c.966.967 2.53.967 3.486 0l2.91-2.91c.967-.966.967-2.528.01-3.495zm-30.541-10.97c-7.27 0-13.163-5.88-13.163-13.16 0-7.269 5.882-13.16 13.163-13.16 7.27 0 13.162 5.88 13.162 13.16 0 7.269-5.882 13.16-13.162 13.16z'
        fill={color ?? colors.purple}
      />
    </Svg>
  );
}
