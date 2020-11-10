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
import { ErrorMessage, Field, Form, Formik } from 'formik';
import mailCheckSchema from '../../utils/mailCheckSchema';
import Input from '../atoms/Input';

interface IMailCheckProps {
  setModalMode: React.Dispatch<React.SetStateAction<any>>;
}

const MailCheckModal: React.FC<IMailCheckProps> = ({
  setModalMode,
}) => {
  const initialValues = {
    email: '',
  };
  const goSignIn = () => {
    setModalMode(1);
  };
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
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              goSignIn();
            }, 400);
          }}
          validationSchema={mailCheckSchema}
        >
          {({ values, errors, touched, isSubmitting }) => (
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
                    touched.email && errors.email
                      ? 'crimson'
                      : 'lightgrey'
                  }
                  focusBorderColor="primary.800"
                />
                <ErrorMessage name="email" />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  w="100%"
                  bg="cta"
                  color="white"
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
          <Button
            bg="white"
            border="1px lightgrey solid"
            w="100%"
          >
            페이스북으로 로그인
          </Button>
          <Button
            bg="white"
            border="1px lightgrey solid"
            w="100%"
          >
            구글로 로그인
          </Button>
        </Stack>
      </ModalFooter>
    </ModalContent>
  );
};

export default MailCheckModal;
