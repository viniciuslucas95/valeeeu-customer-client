import React from 'react';

import { LogoSvg } from '../../../assets/svgs';
import { Container, NameContainer } from '../CreateAccountPage/styles';
import { vh } from '../../helpers/units';
import { Input, Button, Separator } from '../../components';
import { Sizes } from '../../components/enums';

export function CreateAccountPage() {
  return (
    <Container>
      <LogoSvg secondary />
      <Separator style={{ marginTop: vh(2) }}>Criar conta</Separator>
      <NameContainer style={{ marginTop: vh(1.5) }}>
        <Input placeholder='Nome' size={Sizes.Medium} />
        <Input placeholder='Sobrenome' size={Sizes.Medium} />
      </NameContainer>
      <Input style={{ marginTop: vh(1) }} placeholder='Email' />
      <Input style={{ marginTop: vh(1) }} placeholder='Senha' isSecure={true} />
      <Button style={{ marginTop: vh(1.5) }}>Criar conta</Button>
    </Container>
  );
}
