import * as Yup from 'yup';

export default Yup.object({
  name: Yup.string()
    .max(12)
    .required('이름을 입력해주세요'),
  password: Yup.string().required(
    '비밀번호를 입력해주세요'
  ),
});
