import React from 'react';
import {
  Button,
  HorizontalTextList,
} from '../../../../../shared/app/components';
import { Fonts, Sizes } from '../../../../../shared/app/enums';
import { Unit } from '../../../../../shared/app/helpers';
import { IWorkerInfo } from '../../../../../shared/app/interfaces';
import { ItalicText } from '../../../../../shared/app/styledComponents/Texts';
import { colors } from '../../../../../shared/configs';
import {
  Container,
  Photo,
  PictureAndNameContainer,
  Name,
  NameContainer,
  Job,
} from './styles';

const { vh } = Unit;

export function InfoSection({
  photo,
  name,
  job,
  category,
  methods,
}: IWorkerInfo) {
  return (
    <Container>
      <PictureAndNameContainer>
        <Photo source={photo} />
        <NameContainer>
          <Name numberOfLines={1} ellipsizeMode='tail'>
            {name}
          </Name>
          <Job numberOfLines={1} ellipsizeMode='tail'>
            {job}
          </Job>
          <ItalicText
            size={Sizes.big}
            style={{ marginTop: vh(2) }}
            color={colors.green}
          >
            Online
          </ItalicText>
        </NameContainer>
      </PictureAndNameContainer>
      <HorizontalTextList
        texts={category}
        font={Fonts.regular}
        style={{ marginTop: vh(1.5) }}
        size={Sizes.small}
      />
      <HorizontalTextList
        texts={methods}
        font={Fonts.lightItalic}
        size={Sizes.small}
        style={{ marginVertical: vh(0.5) }}
      />
      <Button
        isSecondary
        style={{ marginTop: vh(1) }}
        onPress={() => console.log('send message pressed')}
      >
        Mensagem
      </Button>
    </Container>
  );
}
