import { useState } from 'react';
import { Button, Text } from 'react-native';

import {
  AltAuthOptionContainer,
  AltAuthOptionText,
  AuthBackground,
  AuthButton,
  AuthTextInput,
  BackgroundCover,
  InputBackground,
  Title,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { TextInput } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthBackground>
      <BackgroundCover />
      <InputBackground>
        <Title>Welcome!</Title>
        <Spacer
          position='top'
          size='large'
        />
        <AuthTextInput
          left={
            <TextInput.Icon
              icon='email'
              color={colors.brand.secondary}
            />
          }
          label='Email'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          onChangeText={(value) => setEmail(value)}
        />
        <Spacer />
        <AuthTextInput
          left={
            <TextInput.Icon
              icon='lock'
              color={colors.brand.secondary}
            />
          }
          label='Password'
          value={password}
          textContentType='password'
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
        <Spacer
          position='top'
          size='large'
        />
        <AuthButton uppercase>Login</AuthButton>
        <Spacer
          position='top'
          size='xlarge'
        />
        <AltAuthOptionContainer>
          <AltAuthOptionText>Need to sign up?</AltAuthOptionText>
          <Button
            title='Create an account.'
            onPress={() => navigation.navigate('Register')}
          />
        </AltAuthOptionContainer>
      </InputBackground>
    </AuthBackground>
  );
};
