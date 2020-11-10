import {
  Box,
  Button,
  Checkbox,
  Divider,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
} from '@chakra-ui/core';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import Input from '../atoms/Input';
import sigupSchema from '../../utils/sigupSchema';

interface ISignInModal {
  setModalMode: React.Dispatch<React.SetStateAction<any>>;
}

const SignUpModal: React.FC<ISignInModal> = (props) => {
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };
  const [checkedItems, setCheckedItems] = React.useState([
    false,
    false,
  ]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate =
    checkedItems.some(Boolean) && !allChecked;
  const [show, setShow] = React.useState(false);
  const handlePWshow = () => setShow(!show);

  return (
    <ModalContent>
      <ModalHeader>회원가입</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 200);
          }}
          validationSchema={sigupSchema}
        >
          {({ values, isSubmitting, errors, touched }) => (
            <Form noValidate>
              <Box as="label" htmlFor="email">
                이메일
              </Box>
              <Input
                as={Field}
                type="email"
                name="email"
                // value={values.email}
                value="mailCheck로들어온값.com"
                border="none"
                focusBorderColor="transparent"
                bg="#eee"
                readOnly
              />
              <Box as="label" htmlFor="password">
                이름
              </Box>
              <Input
                as={Field}
                type="name"
                name="name"
                value={values.name}
                border="1px lightgrey solid"
                focusBorderColor="primary.800"
              />
              <ErrorMessage name="name" />
              <Box as="label" htmlFor="name">
                비밀번호
              </Box>
              <InputGroup size="md">
                <Input
                  as={Field}
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  border="1px lightgrey solid"
                  focusBorderColor="primary.800"
                  name="password"
                  value={values.password}
                />

                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onMouseDown={handlePWshow}
                    onMouseUp={handlePWshow}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <ErrorMessage name="password" />

              <Box mt={5}>
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems([
                      e.target.checked,
                      e.target.checked,
                    ])
                  }
                  children="전체 동의"
                  defaultIsChecked
                  isRequired={true}
                />
                <Divider mt={2} borderColor="#aaa" />
                <Stack mt={2} spacing={2}>
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) =>
                      setCheckedItems([
                        e.target.checked,
                        checkedItems[1],
                      ])
                    }
                    children="개인정보 수집동의 1"
                    isRequired={true}
                  />
                  <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={(e) =>
                      setCheckedItems([
                        checkedItems[0],
                        e.target.checked,
                      ])
                    }
                    children="개인정보 수집동의 2"
                    isRequired={true}
                  />
                </Stack>
              </Box>
              <ModalFooter px={0}>
                <Button
                  type="submit"
                  w="100%"
                  disabled={isSubmitting}
                >
                  가입하기
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </ModalContent>
  );
};

export default SignUpModal;
