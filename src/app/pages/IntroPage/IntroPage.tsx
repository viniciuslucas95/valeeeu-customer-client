import React from 'react';
import { INavigate } from '../../../shared/app/interfaces';
import { SearchSection, WorkSection } from './components';
import { Container } from './styles';

export function IntroPage({ navigation }: INavigate) {
  return (
    <Container>
      <SearchSection navigation={navigation} />
      <WorkSection />
    </Container>
  );
}
