import { useState, useContext } from 'react';
import { Button, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import {
  AltAuthOptionContainer,
  AltAuthOptionText,
  AuthBackground,
  AuthButton,
  AuthTextInput,
  BackgroundCover,
  ErrorContainer,
  ErrorText,
  InputBackground,
  Title,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { TextInput } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { AuthenticationContext } from '../../../context/auth/auth.context';

export const LoginScreen = ({ navigation }) => {
  const { error, onLogin, isLoading } = useContext(AuthenticationContext);
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
        {error && (
          <>
            <ErrorContainer>
              <ErrorText>{error}</ErrorText>
            </ErrorContainer>
            <Spacer
              size='large'
              position='top'
            />
          </>
        )}
        {isLoading ? (
          <ActivityIndicator
            animating
            color={colors.brand.secondary}
          />
        ) : (
          <AuthButton
            uppercase
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        )}

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
