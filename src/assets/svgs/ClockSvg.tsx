import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../shared/app/helpers';
import { IProps } from '../../shared/assets/svgs/interfaces';
import { colors } from '../../shared/configs';

const { vw } = Unit;

export function ClockSvg({ size, style, color }: IProps) {
  const fixedSize = (size ?? vw(1)) / 3;

  return (
    <Svg
      width={60 * fixedSize}
      height={60 * fixedSize}
      viewBox='0 0 60 60'
      fill='none'
      style={style}
    >
      <Path
        d='M39.262 32.92l6.505-9.936-1.12-1.001-9.065 7.647c-1.665-.34-3.46.168-4.674 1.525a4.935 4.935 0 00.393 6.97 4.935 4.935 0 006.969-.393c1.214-1.358 1.517-3.196.992-4.812zm-9.65-26.272V0h9.872v6.648c-3.551-.6-6.397-.587-9.871 0zm21.843 5.094l3.472-3.473 3.49 3.49-3.26 3.26a29.745 29.745 0 00-3.702-3.277zM4.935 22.21h19.742v4.935H4.935V22.21zM0 32.08h19.742v4.936H0v-4.935zm7.403 9.872h17.274v4.935H7.403v-4.935zm51.823-7.404c0 13.63-11.048 24.678-24.678 24.678-6.885 0-13.079-2.85-17.548-7.403h8.095c2.808 1.557 6.018 2.467 9.453 2.467 10.886 0 19.742-8.856 19.742-19.742 0-10.885-8.856-19.742-19.742-19.742-3.435 0-6.645.911-9.454 2.468H17c4.47-4.553 10.663-7.403 17.548-7.403 13.63 0 24.678 11.048 24.678 24.677z'
        fill={color ?? colors.purple}
      />
    </Svg>
  );
}
