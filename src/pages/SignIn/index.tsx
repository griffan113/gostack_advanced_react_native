import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import logoImage from '../../assets/logo.png';

import { Container, Title } from './styles';
import Buttom from '../../components/Buttom';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImage} />
      <Title>Faça seu logon</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Buttom onPress={() => {}}>Entrar</Buttom>
    </Container>
  );
};

export default SignIn;
