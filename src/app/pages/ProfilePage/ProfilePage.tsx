import React, { useState } from 'react';

import { LogoSvg } from '../../../assets/svgs';
import { Container, CheckBoxAndRecoverContainer } from '../ProfilePage/styles';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from '../../components/LoginButtons';
import { vh } from '../../helpers/units';
import { Separator, Input, CheckBox, Link, Button } from '../../components';
import {
  useFacebookLoginApi,
  useGoogleLoginApi,
} from '../../shared/typescript-library/hooks/loginApis';
import { apiConfig } from '../../../configs/constants';

export function ProfilePage() {
  const {
    user: facebookUser,
    isFetchingData: isFacebookFetchingData,
    fetchDataAsync: fetchFacebookDataAsync,
  } = useFacebookLoginApi({
    clientId: apiConfig.facebookId,
  });
  const {
    user: googleUser,
    isFetchingData: isGoogleFetchingData,
    fetchDataAsync: fetchGoogleDataAsync,
  } = useGoogleLoginApi({
    androidClientId: apiConfig.googleAndroidId,
    expoClientId: apiConfig.googleExpoId,
    iosClientId: apiConfig.googleIosId,
    webClientId: apiConfig.googleWebId,
  });

  const [isRememberingPassword, setIsRememberingPassword] = useState(false);

  const isFetchingData = isFacebookFetchingData || isGoogleFetchingData;

  return (
    <Container>
      <LogoSvg secondary />
      <FacebookLoginButton
        style={{ marginTop: vh(3) }}
        isFetchingData={isFetchingData}
        fetchDataAsync={fetchFacebookDataAsync}
      />
      <GoogleLoginButton
        style={{ marginTop: vh(1) }}
        isFetchingData={isFetchingData}
        fetchDataAsync={fetchGoogleDataAsync}
      />
      <Separator style={{ marginTop: vh(1.5) }}>ou</Separator>
      <Input style={{ marginTop: vh(1.5) }} placeholder='Email' />
      <Input style={{ marginTop: vh(1) }} placeholder='Senha' isSecure={true} />
      <CheckBoxAndRecoverContainer style={{ marginTop: vh(1.5) }}>
        <CheckBox
          filled={isRememberingPassword}
          setIsRememberingPassword={setIsRememberingPassword}
        >
          Lembrar senha
        </CheckBox>
        <Link>Recuperar senha</Link>
      </CheckBoxAndRecoverContainer>
      <Button style={{ marginTop: vh(2) }}>Entrar</Button>
      <Separator style={{ marginTop: vh(1.5) }}>Não tem conta?</Separator>
      <Button style={{ marginTop: vh(1.5) }} secondary>
        Criar Conta
      </Button>
    </Container>
  );
}
