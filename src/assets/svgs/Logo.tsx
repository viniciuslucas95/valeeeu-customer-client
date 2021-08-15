import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { vw } from '../../app/helpers/units';
import { theme } from '../../configs/constants';

interface IProps {
  size?: number;
  secondary?: boolean;
  props?: any;
}

export function Logo({ size, secondary, props }: IProps) {
  const fixedSize = size ? size / 4 : vw(1) / 4;

  return (
    <Svg
      width={310 * fixedSize}
      height={69 * fixedSize}
      viewBox='0 0 310 69'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M18.46 52.3L34.42 6.52H50.8L27.868 67H.988L.316 6.52H16.78l-.252 45.78h1.932zm62.838 1.764c0 1.456.728 2.184 2.184 2.184 1.512 0 2.772-.28 3.78-.84l-.42 9.492c-2.688 2.184-5.712 3.276-9.072 3.276-6.16 0-9.576-2.24-10.248-6.72-2.8 4.48-6.916 6.72-12.348 6.72-9.184 0-13.776-3.948-13.776-11.844 0-1.344.14-2.828.42-4.452l1.764-9.828c.896-5.04 2.94-9.044 6.132-12.012 3.248-3.024 7.448-4.536 12.6-4.536 5.208 0 8.736 1.204 10.584 3.612l.42-2.52h12.768l-4.704 26.46a6.122 6.122 0 00-.084 1.008zm-24.864-4.032c-.112.504-.168 1.204-.168 2.1 0 .896.42 1.792 1.26 2.688.84.84 2.24 1.26 4.2 1.26 2.016 0 3.752-.784 5.208-2.352l2.52-14.112c-.616-1.4-2.072-2.1-4.368-2.1-4.312 0-6.832 2.072-7.56 6.216l-1.092 6.3zm47.423 4.032c0 1.456.728 2.184 2.184 2.184 1.512 0 2.772-.28 3.78-.84l-.42 9.492c-2.688 2.184-5.712 3.276-9.072 3.276-5.096 0-8.4-1.176-9.912-3.528a9.122 9.122 0 01-1.428-4.956c0-1.792.112-3.36.336-4.704l9.156-51.744h14.28l-8.82 49.812a6.122 6.122 0 00-.084 1.008zm23.968 14.112c-11.648 0-17.472-4.032-17.472-12.096 0-1.12.112-2.324.336-3.612l1.764-10.416c.952-5.376 3.416-9.492 7.392-12.348 4.032-2.912 9.352-4.368 15.96-4.368 11.256 0 16.884 4.256 16.884 12.768 0 1.232-.112 2.576-.336 4.032l-1.008 5.964h-25.62l-.336 1.932a11.311 11.311 0 00-.168 1.848c0 3.08 1.82 4.62 5.46 4.62 1.344 0 2.492-.42 3.444-1.26.952-.84 1.512-1.82 1.68-2.94l13.944.168c-1.848 10.472-9.156 15.708-21.924 15.708zm10.08-25.2c.224-.952.336-1.82.336-2.604 0-.84-.364-1.68-1.092-2.52-.728-.84-1.904-1.26-3.528-1.26-1.568 0-3.024.532-4.368 1.596-1.288 1.064-2.184 2.66-2.688 4.788h11.34zm32.068 25.2c-11.648 0-17.472-4.032-17.472-12.096 0-1.12.112-2.324.336-3.612l1.764-10.416c.952-5.376 3.416-9.492 7.392-12.348 4.032-2.912 9.352-4.368 15.96-4.368 11.256 0 16.884 4.256 16.884 12.768 0 1.232-.112 2.576-.336 4.032l-1.008 5.964h-25.62l-.336 1.932a11.311 11.311 0 00-.168 1.848c0 3.08 1.82 4.62 5.46 4.62 1.344 0 2.492-.42 3.444-1.26.952-.84 1.512-1.82 1.68-2.94l13.944.168c-1.848 10.472-9.156 15.708-21.924 15.708zm10.08-25.2c.224-.952.336-1.82.336-2.604 0-.84-.364-1.68-1.092-2.52-.728-.84-1.904-1.26-3.528-1.26-1.568 0-3.024.532-4.368 1.596-1.288 1.064-2.184 2.66-2.688 4.788h11.34zm32.068 25.2c-11.648 0-17.472-4.032-17.472-12.096 0-1.12.112-2.324.336-3.612l1.764-10.416c.952-5.376 3.416-9.492 7.392-12.348 4.032-2.912 9.352-4.368 15.96-4.368 11.256 0 16.884 4.256 16.884 12.768 0 1.232-.112 2.576-.336 4.032l-1.008 5.964h-25.62l-.336 1.932a11.311 11.311 0 00-.168 1.848c0 3.08 1.82 4.62 5.46 4.62 1.344 0 2.492-.42 3.444-1.26.952-.84 1.512-1.82 1.68-2.94l13.944.168c-1.848 10.472-9.156 15.708-21.924 15.708zm10.08-25.2c.224-.952.336-1.82.336-2.604 0-.84-.364-1.68-1.092-2.52-.728-.84-1.904-1.26-3.528-1.26-1.568 0-3.024.532-4.368 1.596-1.288 1.064-2.184 2.66-2.688 4.788h11.34zm55.587 11.088c0 1.456.728 2.184 2.184 2.184 1.512 0 2.772-.28 3.78-.84l-.42 9.492c-2.688 2.184-5.712 3.276-9.072 3.276-6.328 0-9.772-2.436-10.332-7.308-3.36 4.872-7.896 7.308-13.608 7.308-5.656 0-9.324-1.288-11.004-3.864-1.12-1.624-1.68-3.472-1.68-5.544 0-2.072.168-3.976.504-5.712l4.704-26.46h14.28l-3.948 22.344a18.365 18.365 0 00-.252 3.024c0 2.688 1.512 4.032 4.536 4.032 2.52 0 4.536-.868 6.048-2.604l4.788-26.796h14.28l-4.704 26.46a6.122 6.122 0 00-.084 1.008zm22.364-9.072H288.98L295.028.556h14.28l-9.156 44.436zm-16.296 17.136c0-3.584.784-6.188 2.352-7.812 1.568-1.68 4.06-2.52 7.476-2.52 4.704 0 7.056 2.072 7.056 6.216 0 3.528-.812 6.104-2.436 7.728-1.568 1.624-4.06 2.436-7.476 2.436-4.648 0-6.972-2.016-6.972-6.048z'
        fill={secondary ? theme.primaryPurple : theme.white}
      />
    </Svg>
  );
}
