import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

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
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(
    (data: object) => {
      console.log(data);
    },
    [formRef],
  );

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
            <Form onSubmit={handleSignIn}>
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
            </Form>
            <Buttom
              onPress={() => {
                console.log('dadasdasdad');
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Buttom>
            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* @ts-ignore */}
      <CreateAccountButtom onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtomText>Criar uma conta</CreateAccountButtomText>
      </CreateAccountButtom>
    </>
  );
};

export default SignIn;
