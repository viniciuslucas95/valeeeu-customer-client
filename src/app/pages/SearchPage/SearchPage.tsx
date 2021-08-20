import React, { useContext } from 'react';

import {
  Container,
  SearchContainer,
  Placeholder,
  SeparatorContainer,
  IconContainer,
  TouchableContainer,
} from './styles';
import { vw } from '../../helpers/units';
import { sizes, theme } from '../../../configs/constants';
import { Rect, Svg } from 'react-native-svg';
import { SearchIcon } from '../../../assets/svgs/icons';
import { StackScreens } from '../enums';
import { apiConfig } from '../../../configs/constants';
import { GoogleMaps } from '../../shared/typescript-library/components';
import { mapContext } from '../../contexts';

export function SearchPage({ navigation }: any) {
  const { setIsLoaded } = useContext(mapContext);

  return (
    <Container>
      <GoogleMaps
        apiKey={apiConfig.googleApiKey}
        mapLoadCallback={() => setIsLoaded(true)}
      />
      <TouchableContainer
        onPress={() => navigation.navigate(StackScreens.SeeWorkerProfilePage)}
      >
        <SearchContainer>
          <Placeholder>Buscar serviço...</Placeholder>
          <SeparatorContainer>
            <Svg width={sizes.border} height='100%'>
              <Rect
                width={sizes.border}
                height='100%'
                fill={theme.purple}
                rx={sizes.border}
              />
            </Svg>
          </SeparatorContainer>
          <IconContainer>
            <SearchIcon
              fillColor={theme.purple}
              strokeColor={theme.white}
              size={vw(0.75)}
            />
          </IconContainer>
        </SearchContainer>
      </TouchableContainer>
    </Container>
  );
}
