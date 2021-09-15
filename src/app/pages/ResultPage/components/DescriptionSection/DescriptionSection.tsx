import React from 'react';
import { Button } from '../../../../../shared/app/components';
import { SeparatorContainer } from '../../../../../shared/app/components/SeparatorContainer';
import { Unit } from '../../../../../shared/app/helpers';
import { Text } from './styles';

const { vh } = Unit;

interface IProps {
  text: string;
}

export function DescriptionSection({ text }: IProps) {
  return (
    <SeparatorContainer title='Descrição'>
      <Text style={{ marginTop: vh(1) }}>{text}</Text>
      <Button
        style={{ marginTop: vh(1.5), marginBottom: vh(2) }}
        onPress={() => console.log('edit description pressed')}
      >
        Ver Mais
      </Button>
    </SeparatorContainer>
  );
}
