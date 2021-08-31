import React from 'react';
import { TouchableContainer } from '../../../shared/app/components';
import { Sizes } from '../../../shared/app/enums';
import {
  IColorable,
  IHavePlaceholder,
  IHaveSize,
  IPressable,
  IStyleable,
} from '../../../shared/app/interfaces';
import { LightText } from '../../../shared/app/styledComponents/Texts';
import { colors } from '../../../shared/configs';
import { Container } from './styles';
import { Unit } from '../../../shared/app/helpers';

const { vwPx } = Unit;

interface IProps
  extends IHavePlaceholder,
    IStyleable,
    Partial<IHaveSize>,
    Partial<IColorable>,
    IPressable {}

export function FakeInputButton({
  placeholderText,
  placeholderColor,
  style,
  size,
  width,
  isSecondary,
  onPress,
}: IProps) {
  return (
    <TouchableContainer style={style} onPress={onPress}>
      <Container
        width={width ?? vwPx(90)}
        size={size ?? Sizes.medium}
        isSecondary={isSecondary ?? false}
      >
        <LightText
          size={size ?? Sizes.medium}
          color={placeholderColor ?? colors.mediumGray}
        >
          {placeholderText}
        </LightText>
      </Container>
    </TouchableContainer>
  );
}
