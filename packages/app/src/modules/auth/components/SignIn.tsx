import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import {
  Input,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  chakra,
} from '@ALK-UI/core';
import { SignInValues } from '../types';

const validateName = (value: string) => {
  let error;
  if (!value) {
    error = 'Please enter your user name';
  }
  return error;
};
const validatePassword = (value: string) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  }
  return error;
};

interface SignInProps extends SignInValues {
  loading?: boolean | undefined;
  onSubmit: (pros: SignInValues) => void;
  children?: React.ReactNode | undefined;
}

export const SignIn: React.FC<SignInProps> = ({
  loading,
  username,
  password,
  rememberMe,
  onSubmit = () => {},
}) => {
  return (
    <Flex align="center" justify="center">
      <Stack
        bg="white"
        w="586px"
        boxShadow="1"
        pt="60px"
        pb="80px"
        px="24"
        spacing="10"
      >
        <chakra.h1 fontSize="32">Sign in</chakra.h1>
        <Formik
          initialValues={{
            username,
            password,
            rememberMe,
          }}
          onSubmit={onSubmit}
        >
          {props => {
            const { values, handleSubmit } = props;

            return (
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Stack spacing="5">
                  <Field name="username" validate={validateName}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={
                          !!(form.errors.username && form.touched.username)
                        }
                      >
                        <FormLabel size="sm" htmlFor="username">
                          Username
                        </FormLabel>
                        <Input
                          {...field}
                          id="username"
                          placeholder="name"
                          value={values.username}
                          isDisabled={loading}
                        />
                        <FormErrorMessage>
                          {form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password" validate={validatePassword}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={
                          !!(form.errors.password && form.touched.password)
                        }
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          placeholder="name"
                          value={values.password}
                          isDisabled={loading}
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="rememberMe">
                    {({ field }: FieldProps) => (
                      <FormControl>
                        <Checkbox
                          {...field}
                          isChecked={values.rememberMe}
                          isDisabled={loading}
                        >
                          Remember me
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    w="100%"
                    size="lg"
                    mt="50px"
                    type="submit"
                    variant="super"
                    isLoading={loading}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            );
          }}
        </Formik>
      </Stack>
    </Flex>
  );
};

export default SignIn;
