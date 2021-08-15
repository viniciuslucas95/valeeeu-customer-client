import React from 'react';

import { Logo } from '../../../assets/svgs';
import { Container, CheckBoxAndRecoverContainer } from '../ProfilePage/styles';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from '../../components/LoginButtons';
import { vh, vw } from '../../helpers/units';
import {
  useFacebookLoginApi,
  useGoogleLoginApi,
} from '../../shared/typescript-library/hooks/loginApis';
import { facebookId } from '../../../configs/constants/apiConfigs';
import { Separator, Input, CheckBox, Link, Button } from '../../components';

export function ProfilePage() {
  const { isBusy, user, fetchDataAsync } = useFacebookLoginApi({
    clientId: facebookId,
  });

  return (
    <Container>
      <Logo secondary />
      <FacebookLoginButton style={{ marginTop: vh(4) }} />
      <GoogleLoginButton style={{ marginTop: vh(1) }} />
      <Separator style={{ marginTop: vh(2) }}>ou</Separator>
      <Input style={{ marginTop: vh(2) }} placeholder='Email' />
      <Input style={{ marginTop: vh(1) }} placeholder='Senha' />
      <CheckBoxAndRecoverContainer style={{ marginTop: vh(1.5) }}>
        <CheckBox>Lembrar senha</CheckBox>
        <Link>Recuperar senha</Link>
      </CheckBoxAndRecoverContainer>
      <Button style={{ marginTop: vh(2) }}>Entrar</Button>
      <Separator style={{ marginTop: vh(2) }}>Não tem conta?</Separator>
      <Button style={{ marginTop: vh(2) }} secondary>
        Criar Conta
      </Button>
    </Container>
  );
}
