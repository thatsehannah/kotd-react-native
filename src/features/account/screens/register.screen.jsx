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
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    fullName: null,
    username: null,
    email: null,
    password: null,
  });
  const { error, onRegister, isLoading } = useContext(AuthenticationContext);

  const validateFormData = (field, value) => {
    let err = '';

    switch (field) {
      case 'fullName':
        const formattedFullName = value.trimStart().trimEnd();

        if (formattedFullName.length === 0) {
          err = 'Full name cannot be empty.';
        }

        break;
      case 'username':
        const formattedUsername = value.trimStart().trimEnd();

        //TODO: check if username already exists

        if (formattedUsername.length === 0) {
          err = 'Username cannot be empty';
        } else if (formattedUsername.indexOf(' ') >= 0) {
          err = 'Username cannot contain spaces.';
        } else if (
          formattedUsername.length < 5 ||
          formattedUsername.length > 30
        ) {
          err = 'Username must be between 5 and 30 characters.';
        }

        break;
      case 'email':
        const formattedEmail = value.trimStart().trimEnd();
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if (!emailRegex.test(formattedEmail)) {
          err = 'Please provide a valid email.';
        }

        break;
      case 'password':
        if (value.length < 6) {
          err = 'Password must be at least 6 characters.';
        }
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: err,
    }));
  };

  //TODO: fix disabled prop on register button to be conditional based on this function
  const isFormValid = () => {
    return (
      (formData.fullName === '' && errors.fullName != null) ||
      (formData.username === '' && errors.username != null) ||
      (formData.email === '' && errors.email != null) ||
      (formData.password === '' && errors.password != null)
    );
  };

  //TODO: add birthday properties and think of other properties to add
  const createNewAccount = () => {
    const newUser = {
      fullname: formData.fullName,
      username: formData.username,
      email: formData.email,
      age: 0,
      lastLogin: new Date().toString(),
    };

    onRegister(newUser, formData.password);
  };

  //TODO: move username field and error above email field
  //TODO: fix spacing between fields and error text
  return (
    <AuthBackground>
      <BackgroundCover />
      <InputBackground>
        <Title>Create Account</Title>
        <Spacer
          position='top'
          size='large'
        />
        <AuthTextInput
          label='Full Name'
          value={formData.fullName}
          onChangeText={(value) =>
            setFormData({ ...formData, fullName: value })
          }
          onBlur={() => validateFormData('fullName', formData.fullName)}
        />
        <Spacer
          position='top'
          size='medium'
        />
        {errors.fullName && (
          <>
            <ErrorText>{errors.fullName}</ErrorText>
          </>
        )}
        <AuthTextInput
          label='Email'
          value={formData.email}
          textContentType='emailAddress'
          keyboardType='email-address'
          onChangeText={(value) => setFormData({ ...formData, email: value })}
          onBlur={() => validateFormData('email', formData.email)}
        />
        <Spacer
          position='top'
          size='medium'
        />
        {errors.email && (
          <>
            <ErrorText>{errors.email}</ErrorText>
          </>
        )}
        <AuthTextInput
          label='Username'
          value={formData.username}
          textContentType='username'
          onChangeText={(value) =>
            setFormData({ ...formData, username: value })
          }
          onBlur={() => validateFormData('username', formData.username)}
        />
        <Spacer
          position='top'
          size='medium'
        />
        {errors.username && (
          <>
            <ErrorText>{errors.username}</ErrorText>
          </>
        )}
        <AuthTextInput
          label='Password'
          value={formData.password}
          textContentType='password'
          autoCapitalize='none'
          secureTextEntry
          onChangeText={(value) =>
            setFormData({ ...formData, password: value })
          }
          onBlur={() => validateFormData('password', formData.password)}
        />
        <Spacer
          position='top'
          size='medium'
        />
        {errors.password && (
          <>
            <ErrorText>{errors.password}</ErrorText>
          </>
        )}
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
            onPress={() => createNewAccount()}
            disabled={isFormValid()}
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
