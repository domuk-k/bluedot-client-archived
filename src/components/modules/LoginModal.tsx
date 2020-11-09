import React, { useRef } from 'react';
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/core';
import { Field, Form, Formik } from 'formik';

interface Props {
  isOpen: boolean;
  onClose(): void;
}
interface MyFormValues {
  email: string;
}

const LoginModal: React.FC<Props> = (props) => {
  const initialFocusRef = useRef(null);
  const initialValues: MyFormValues = {
    email: '',
  };
  return (
    <Box>
      <Modal
        blockScrollOnMount={true}
        closeOnOverlayClick={true}
        isOpen={props.isOpen}
        onClose={props.onClose}
        isCentered
        preserveScrollBarGap
        closeOnEsc
        initialFocusRef={initialFocusRef}
      >
        <ModalOverlay />
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
                }, 400);
              }}
            >
              {(
                values: {
                  email: string;
                },
                isSubmitting: boolean | undefined
              ) => (
                <Form noValidate>
                  <Box as="label" htmlFor="email">
                    이메일
                  </Box>
                  <Input
                    as={Field}
                    type="email"
                    name="email"
                    value={values.email}
                    border="1px lightgrey solid"
                    ref={initialFocusRef}
                  />
                  <Button
                    type="submit"
                    w="100%"
                    variantColor="blue"
                    disabled={isSubmitting}
                  >
                    이메일로 시작
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <hr />
          <ModalFooter display="unset">
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LoginModal;
