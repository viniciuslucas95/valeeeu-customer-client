import React from 'react';
import { SearchSection, WorkSection } from './components';
import { Container } from './styles';

export function IntroPage() {
  return (
    <Container>
      <SearchSection />
      <WorkSection />
    </Container>
  );
}
