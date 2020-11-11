import React from 'react';
import {
  Box,
  Button,
  Divider,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
} from '@chakra-ui/core';
import { Field, Form, Formik } from 'formik';
import mailCheckSchema from '../../utils/mailCheckSchema';
import Input from '../atoms/Input';
import SocialLoginButton from '../atoms/SocialButton';
import InputErrorMessage from '../atoms/InputErrorMessage';

interface IMailCheckProps {
  setModalMode: React.Dispatch<React.SetStateAction<any>>;
}

const MailCheckModal: React.FC<IMailCheckProps> = ({
  setModalMode,
}) => {
  const initialValues = {
    email: '',
  };
  const goSignIn = () => setModalMode(1);

  return (
    <ModalContent>
      <ModalHeader textAlign="center">
        로그인하기
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            goSignIn();
          }}
          validationSchema={mailCheckSchema}
        >
          {({ values, errors, isSubmitting }) => (
            <Form noValidate>
              <Stack spacing="3">
                <Box as="label" htmlFor="email">
                  이메일
                </Box>
                <Input
                  as={Field}
                  type="email"
                  name="email"
                  value={values.email}
                  borderColor={
                    errors.email
                      ? 'custom.warn'
                      : 'lightgrey'
                  }
                  focusBorderColor="primary.800"
                />
                {errors.email && (
                  <InputErrorMessage
                    children={errors.email}
                  />
                )}
                <Button
                  type="submit"
                  w="100%"
                  bg="custom.cta"
                  color="white"
                  isDisabled={
                    isSubmitting || !!errors.email
                  }
                  _disabled={{ background: 'lightgrey' }}
                  _hover={{ background: 'primary.400' }}
                >
                  이메일로 시작
                </Button>
                <Divider pt="3" borderColor="#aaa" />
              </Stack>
            </Form>
          )}
        </Formik>
      </ModalBody>
      <ModalFooter display="unset">
        <Stack>
          <SocialLoginButton name="페이스북" />
          <SocialLoginButton name="구글" />
        </Stack>
      </ModalFooter>
    </ModalContent>
  );
};

export default MailCheckModal;
