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
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Input from '../atoms/Input';
import sigupSchema from '../../utils/sigupSchema';
import InputErrorMessage from '../atoms/InputErrorMessage';

interface ISignInModal {
  setModalMode: React.Dispatch<React.SetStateAction<any>>;
}

const SignUpModal: React.FC<ISignInModal> = (props) => {
  const initialValues = {
    email: '',
    name: '',
    password: '',
    allowance: [],
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

  const handleClickCheck = (e: any) =>
    setCheckedItems([e.target.checked, e.target.checked]);

  return (
    <ModalContent>
      <ModalHeader textAlign="center">회원가입</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log('??');

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
                value="ReturnValue@mailCheckAPI.com"
                border="none+"
                focusBorderColor="transparent"
                bg="#eee"
                isReadOnly
              />
              <Box as="label" htmlFor="name">
                이름
              </Box>
              <Input
                as={Field}
                name="name"
                id="name"
                value={values.name}
                border="1px lightgrey solid"
                focusBorderColor="primary.800"
              />
              {errors.name && touched.name && (
                <InputErrorMessage children={errors.name} />
              )}

              <Box as="label" htmlFor="password">
                비밀번호
              </Box>
              <InputGroup size="md">
                <Input
                  as={Field}
                  type={show ? 'text' : 'password'}
                  name="password"
                  id="password"
                  pr="4.5rem"
                  placeholder="Enter password"
                  border="1px lightgrey solid"
                  focusBorderColor="primary.800"
                  value={values.password}
                />

                <InputRightElement width="4.5rem" w="40px">
                  <Button
                    size="sm"
                    p="0"
                    onMouseDown={handlePWshow}
                    onMouseUp={handlePWshow}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && touched.password && (
                <InputErrorMessage
                  children={errors.password}
                />
              )}

              <Box mt={5}>
                <label>
                  <Field
                    as={Checkbox}
                    name="allowance"
                    type="checkbox"
                    children="전체 동의"
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={handleClickCheck}
                    defaultIsChecked
                    border="lightgrey"
                  />
                </label>
                <Divider mt={2} borderColor="#aaa" />
                <Stack mt={2} spacing={2}>
                  <label>
                    <Field
                      as={Checkbox}
                      name="allowance"
                      type="checkbox"
                      isChecked={checkedItems[0]}
                      onChange={handleClickCheck}
                      children="개인정보 수집동의 및 이용 동의 (필수)"
                      border="lightgrey"
                      variantcolor=""
                    />
                  </label>
                  <label>
                    <Field
                      as={Checkbox}
                      name="allowance"
                      type="checkbox"
                      isChecked={checkedItems[1]}
                      onChange={handleClickCheck}
                      children="마케팅 정보 이용에 관한 동의"
                      border="lightgrey"
                    />
                  </label>
                </Stack>
              </Box>
              <ModalFooter px={0}>
                <Button
                  type="submit"
                  w="100%"
                  bg="custom.cta"
                  color="white"
                  // isDisabled={
                  //   isSubmitting || !!errors.email
                  // }
                  _disabled={{ background: 'lightgrey' }}
                  _hover={{ background: 'primary.400' }}
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
