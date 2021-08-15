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
import { vw, vwPx } from '../../helpers/units';
import { theme } from '../../../configs/constants';
import { Rect, Svg } from 'react-native-svg';
import { SearchIcon } from '../../../assets/svgs/icons';
import { TabScreens } from '../Navigator/enums';

const searchIconSize = vw(2.5);

export function SearchPage({ navigation }: any) {
  // FOR TESTING
  const [destination, setDestination] = useState({
    latitude: -22.6088,
    longitude: -43.1723,
  });

  return (
    <Container>
      <GoogleMaps apiKey={googleApiKey} />
      <TouchableContainer onPress={() => navigation.navigate(TabScreens.Work)}>
        <SearchContainer>
          <Placeholder>Buscar serviço...</Placeholder>
          <SeparatorContainer>
            <Svg width={vwPx(0.5)} height='100%'>
              <Rect
                width={vwPx(0.25)}
                height='100%'
                fill={theme.primaryPurple}
                rx={vwPx(0.5)}
              />
            </Svg>
          </SeparatorContainer>
          <IconContainer>
            <SearchIcon
              fillColor={theme.primaryPurple}
              strokeColor={theme.white}
              size={vw(0.75)}
            />
          </IconContainer>
        </SearchContainer>
      </TouchableContainer>
    </Container>
  );
}
