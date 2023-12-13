import { useState } from 'react';
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
import { colors } from '../../../infrastructure/theme/colors';
import { Spacer } from '../../../components/spacer/spacer.component';
import { TextInput } from 'react-native-paper';
import { Button, Text } from 'react-native';

export const RegisterScreen = ({ navigation }) => {
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
        <AuthButton uppercase>Register</AuthButton>
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
