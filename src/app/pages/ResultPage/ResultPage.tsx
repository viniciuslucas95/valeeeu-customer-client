import React from 'react';
import { FlatListContainer } from './styles';
import { PictureSection, InfoSection, DescriptionSection } from './components';
import { workerInfo } from '../../../shared/examples/data';

export function ResultPage() {
  const page = [
    <InfoSection {...workerInfo} />,
    <PictureSection pictures={workerInfo.pictures} />,
    <DescriptionSection text={workerInfo.description} />,
  ];

  return (
    <FlatListContainer
      data={page}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <>{item}</>}
    ></FlatListContainer>
  );
}
