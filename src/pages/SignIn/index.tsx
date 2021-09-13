import React from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImage from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButtom,
  CreateAccountButtomText,
} from './styles';
import Input from '../../components/Input';
import Buttom from '../../components/Buttom';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImage} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Buttom onPress={() => {}}>Entrar</Buttom>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButtom onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtomText>Criar uma conta</CreateAccountButtomText>
      </CreateAccountButtom>
    </>
  );
};

export default SignIn;
