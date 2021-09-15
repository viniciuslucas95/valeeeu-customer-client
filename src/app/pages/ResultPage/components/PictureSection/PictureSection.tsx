import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { SeparatorContainer } from '../../../../../shared/app/components/SeparatorContainer';
import { PictureGrid } from '../../../../../shared/app/components/PictureGrid';
import { ButtonsContainer } from './styles';
import { Unit } from '../../../../../shared/app/helpers';
import { Button } from '../../../../../shared/app/components';

const { vh, vwPx } = Unit;

interface IProps {
  pictures: ImageSourcePropType[];
}

export function PictureSection({ pictures }: IProps) {
  if (pictures.length === 0) return null;

  return (
    <SeparatorContainer title='Fotos'>
      <PictureGrid
        style={{ marginTop: vh(2) }}
        pictures={pictures}
        columns={3}
      />
      <ButtonsContainer style={{ marginTop: vh(1) }}>
        {pictures.length > 6 ? (
          <Button
            onPress={() => console.log('see more pictures pressed')}
            style={{ marginTop: vh(1) }}
          >
            Ver Mais
          </Button>
        ) : null}
      </ButtonsContainer>
    </SeparatorContainer>
  );
}
