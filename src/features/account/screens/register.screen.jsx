import { useState, useContext } from 'react';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { Button } from 'react-native';

import { AuthenticationContext } from '../../../context/auth/auth.context';
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
import { colors } from '../../../infrastructure/theme/colors';
import { Spacer } from '../../../components/spacer/spacer.component';

export const RegisterScreen = ({ navigation }) => {
  const { error, onRegister, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <AuthBackground>
      <BackgroundCover />
      <InputBackground>
        <Title>Register</Title>
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
          autoCapitalize='none'
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
        <Spacer />
        <AuthTextInput
          left={
            <TextInput.Icon
              icon='lock'
              color={colors.brand.secondary}
            />
          }
          label='Confirm Password'
          value={confirmPassword}
          textContentType='password'
          secureTextEntry
          onChangeText={(value) => setConfirmPassword(value)}
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
            onPress={() => onRegister(email, password, confirmPassword)}
          >
            Register
          </AuthButton>
        )}

        <Spacer
          position='top'
          size='xlarge'
        />
        <AltAuthOptionContainer>
          <AltAuthOptionText>Already have an account?</AltAuthOptionText>
          <Button
            title="Let's login."
            onPress={() => navigation.navigate('Login')}
          />
        </AltAuthOptionContainer>
      </InputBackground>
    </AuthBackground>
  );
};
