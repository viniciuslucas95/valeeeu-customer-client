import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../shared/app/helpers';
import { IProps } from '../../shared/assets/svgs/interfaces';
import { colors } from '../../shared/configs';

const { vw } = Unit;

export function MoneySvg({ size, style, color }: IProps) {
  const fixedSize = (size ?? vw(1)) / 3;

  return (
    <Svg
      width={53 * fixedSize}
      height={58 * fixedSize}
      viewBox='0 0 53 58'
      fill='none'
      style={style}
    >
      <Path
        d='M38.287 28.626c-7.927 0-14.357 6.41-14.357 14.313 0 7.903 6.43 14.313 14.357 14.313 7.928 0 14.358-6.41 14.358-14.313 0-7.903-6.43-14.313-14.358-14.313zm1.197 20.214v1.255h-1.197v-1.19c-1.24-.022-2.52-.315-3.59-.866l.546-1.961c1.144.444 2.666.914 3.858.644 1.374-.31 1.656-1.72.136-2.397-1.112-.518-4.52-.96-4.52-3.87 0-1.624 1.244-3.082 3.57-3.399v-1.274h1.197v1.215c.866.023 1.838.174 2.922.5l-.433 1.966c-.92-.322-1.934-.613-2.925-.553-1.78.102-1.938 1.64-.694 2.285 2.049.959 4.72 1.67 4.72 4.23.002 2.046-1.609 3.136-3.59 3.415zM43.37 24.56c2.709-.532 5.174-1.494 6.882-2.856v1.556c0 1.19-.924 2.278-2.41 3.167a19.045 19.045 0 00-4.472-1.867zm-5.083-13.824c6.397 0 11.965-2.402 11.965-5.368C50.252 2.402 44.684 0 38.287 0c-6.394 0-11.964 2.402-11.964 5.367s5.57 5.368 11.964 5.368zm.223-4.793c-.716-.214-2.905-.396-2.905-1.61 0-.677.8-1.281 2.292-1.415v-.532h.769v.504c.56.012 1.182.071 1.876.215l-.278.815c-.529-.121-1.117-.236-1.694-.236l-.172.003c-1.154.047-1.247.684-.45.951 1.309.404 3.032.697 3.032 1.766 0 .851-1.04 1.307-2.314 1.421v.525h-.769v-.496c-.785-.007-1.617-.134-2.302-.363l.352-.818c.584.15 1.321.3 1.981.3l.498-.033c.883-.126 1.06-.715.084-.997zM11.965 36.975c3.458 0 6.64-.718 8.866-1.832a19.143 19.143 0 012.867-4.53c-1.08-2.488-6.076-4.373-11.733-4.373C5.57 26.24 0 28.642 0 31.608c0 2.965 5.57 5.367 11.965 5.367zm.222-4.792c-.715-.215-2.905-.396-2.905-1.61 0-.678.802-1.282 2.293-1.415v-.532h.768v.503c.56.012 1.182.072 1.876.215l-.28.816c-.526-.122-1.115-.236-1.692-.236l-.172.002c-1.153.048-1.244.684-.45.952 1.309.403 3.032.696 3.032 1.765 0 .852-1.039 1.307-2.314 1.422v.525h-.768v-.497c-.787-.007-1.618-.133-2.302-.362l.351-.819c.584.15 1.321.301 1.982.301l.498-.033c.88-.127 1.06-.716.083-.997zm9.58 20.35c-2.2 1.408-5.84 2.333-9.802 2.333C5.57 54.866 0 52.464 0 49.5v-1.556c2.742 2.19 7.44 3.345 11.965 3.345 2.957 0 5.98-.503 8.492-1.458.367.94.805 1.844 1.31 2.703zM0 43.535v-1.553c2.742 2.188 7.44 3.342 11.965 3.342 2.486 0 5.01-.36 7.246-1.038.079 1.12.256 2.21.521 3.269-2.125.827-4.843 1.347-7.767 1.347C5.57 48.902 0 46.5 0 43.535zm0-5.964v-1.555c2.742 2.19 7.44 3.345 11.965 3.345 2.697 0 5.444-.42 7.815-1.215a18.846 18.846 0 00-.577 3.64c-2.043.711-4.553 1.153-7.238 1.153C5.57 42.939 0 40.536 0 37.57zm26.323-26.24V9.776c2.742 2.19 7.44 3.344 11.964 3.344 4.528 0 9.223-1.154 11.965-3.344v1.555c0 2.965-5.568 5.367-11.965 5.367-6.394 0-11.964-2.402-11.964-5.367zm0 11.928v-1.556c1.706 1.362 4.173 2.324 6.882 2.856a19.029 19.029 0 00-4.47 1.867c-1.489-.89-2.412-1.977-2.412-3.167zm0-5.964v-1.553c2.742 2.187 7.44 3.342 11.964 3.342 4.528 0 9.223-1.155 11.965-3.342v1.553c0 2.965-5.568 5.367-11.965 5.367-6.394 0-11.964-2.402-11.964-5.367z'
        fill={color ?? colors.purple}
      />
    </Svg>
  );
}
