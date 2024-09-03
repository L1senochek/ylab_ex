import AuthForm from '@/components/AuthForm/AuthForm';
import contentSignInJson from '@/utils/jsons/signInContent.json';
import IInputForm from '@/model/InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import schema from '@/utils/validation/schema';
import ISignIn from '@/model/SignIn';
import mockFetch from '@/utils/mockFetch';

function SignIn() {
  const content = contentSignInJson.eng;
  const methods = useForm<ISignIn>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const signInFormFields: IInputForm[] = [
    {
      registerInput: 'email',
      titleLabel: content.inputEmail.titleLabel,
      placeholder: content.inputEmail.placeholder,
    },
    {
      registerInput: 'password',
      titleLabel: content.inputPassword.titleLabel,
      placeholder: content.inputPassword.placeholder,
      type: 'password',
      autoComplete: 'false',
    },
  ];

  const onSubmit: SubmitHandler<ISignIn> = async (data): Promise<void> => {
    if (methods.formState.isValid) {
      try {
        const response = await mockFetch({
          email: data.email!,
          password: data.password!,
        });
        if (response.ok) {
          console.log('Login successful');
        } else {
          console.log('Login failed');
        }
      } catch (err) {
        console.error('Error fetch', err);
      }
    }
  };

  return (
    <>
      <AuthForm
        content={content}
        formFields={signInFormFields}
        onSubmit={onSubmit}
        methods={methods}
      />
    </>
  );
}

export default SignIn;
