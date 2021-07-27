import React, { useState } from 'react';

import { GoogleMaps } from '../../shared/typescript-library/components';
import { googleApiKey } from '../../../configs/constants/apiConfigs';
import {
  Container,
  SearchContainer,
  Placeholder,
  SeparatorContainer,
  IconContainer,
  TouchableContainer,
} from './styles';
import { CustomSvg } from '../../components/Svgs';
import { searchSvg } from '../../../assets/svgs';
import { vw, vwPx } from '../../helpers/units';
import { theme } from '../../../configs/constants';
import { Rect, Svg } from 'react-native-svg';

const searchIconSize = vw(2.5);

export function SearchPage() {
  const [destination, setDestination] = useState({
    latitude: -22.6088,
    longitude: -43.1723,
  });

  return (
    <Container>
      <GoogleMaps apiKey={googleApiKey} />
      <TouchableContainer onPress={() => console.log('Go to search screen')}>
        <SearchContainer>
          <Placeholder>Procurar serviço...</Placeholder>
          <SeparatorContainer>
            <Svg width={vwPx(0.5)} height='100%'>
              <Rect
                width={vwPx(0.25)}
                height='100%'
                fill={theme.darkGray}
                rx={vwPx(0.5)}
              />
            </Svg>
          </SeparatorContainer>
          <IconContainer>
            <CustomSvg
              svg={searchSvg}
              size={searchIconSize}
              colors={[theme.darkGray]}
            />
          </IconContainer>
        </SearchContainer>
      </TouchableContainer>
    </Container>
  );
}
