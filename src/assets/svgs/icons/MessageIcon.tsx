import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  thick?: boolean;
  size?: number;
  props?: any;
}

export function MessageIcon({ thick, size, props }: IProps) {
  const fixedSize = size ? size / 4 : vw(1) / 4;

  return (
    <Svg
      width={33 * fixedSize}
      height={30 * fixedSize}
      viewBox={'0 0 33 30'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d={
          'M10.912 22.264l-.1-.024-.088.054-.315.19c-.581.353-1.004.61-1.537.864-.553.263-1.228.523-2.318.876.49-1.91.455-2.914.412-4.207l-.009-.28-.003-.087-.056-.066c-1.292-1.52-2.548-3.09-2.548-5.846 0-5.147 5.39-9.435 12.15-9.435 6.76 0 12.15 4.288 12.15 9.435 0 4.457-4.547 9.375-12.034 9.375-2.213 0-3.856-.4-5.311-.753a132.71 132.71 0 00-.393-.096zM.846 28.885l-.232.45.498-.089a51.72 51.72 0 005.63-1.353c1.84-.555 3.558-1.2 4.673-1.852 1.813.429 3.552.625 5.201.625 9.255 0 15.634-6.239 15.634-12.928C32.25 6.148 24.716.75 16.5.75 8.233.75.75 6.189.75 13.738c0 2.64.953 5.23 2.645 7.254.017 1.104-.298 2.453-.778 3.837-.49 1.416-1.147 2.848-1.77 4.056zm10.229-16.832c-1.05 0-1.91.838-1.91 1.883s.86 1.884 1.91 1.884c1.05 0 1.91-.839 1.91-1.884s-.86-1.883-1.91-1.883zm5.425 0c-1.05 0-1.91.838-1.91 1.883s.86 1.884 1.91 1.884c1.05 0 1.91-.839 1.91-1.884s-.86-1.883-1.91-1.883zm5.425 0c-1.05 0-1.91.838-1.91 1.883s.86 1.884 1.91 1.884c1.05 0 1.91-.839 1.91-1.884s-.86-1.883-1.91-1.883z'
        }
        fill={theme.white}
        stroke={theme.primaryPurple}
        strokeWidth={thick ? 0 : 1.5}
      />
    </Svg>
  );
}
