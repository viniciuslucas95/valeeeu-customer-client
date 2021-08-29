import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../shared/app/helpers';
import { IProps } from '../../shared/assets/svgs/interfaces';
import { colors } from '../../shared/configs';

const { vw, vh } = Unit;

export function TeacherSvg({ size, style, color }: IProps) {
  const fixedSize = (size ?? vw(1)) / 2.8;

  return (
    <Svg
      width={41 * fixedSize}
      height={50 * fixedSize}
      viewBox='0 0 41 50'
      fill='none'
      style={[{ top: vh(0.25) }, style]}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.526 36.132c2.9-2.152 7.429-3.769 11.275-4.083v13.228c-3.565.537-7.698 2.254-11.275 4.084V36.132zm-2.05 0c-2.901-2.152-7.43-3.769-11.275-4.083v13.228c3.565.537 7.697 2.254 11.275 4.084V36.132zM6.15 42.088C1.95 40.712.009 39.154.009 39.154L.001 35.02c-.017-4.343.18-6.828 5.428-7.982 5.75-1.264 11.888-2.689 8.694-7.189C6.126 8.573 12.465.361 20.501.361c8.038 0 14.342 8.148 6.375 19.488-3.134 4.462 2.821 5.897 8.696 7.19 5.269 1.16 5.447 3.656 5.427 8.032l-.006 4.083s-1.942 1.558-6.142 2.934V29.831l-2.218.182c-4.211.345-8.938 2.046-12.132 4.345-3.196-2.299-7.92-4-12.132-4.345l-2.218-.182v12.257z'
        fill={color ?? colors.white}
      />
    </Svg>
  );
}
