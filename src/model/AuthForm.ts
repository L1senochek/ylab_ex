import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import IInputForm from '@/model/InputForm';
import IContentSignIn from '@/model/contentSignIn';
import ISignIn from './SignIn';

interface IAuthFormProps {
  methods: UseFormReturn<ISignIn>;
  onSubmit: SubmitHandler<ISignIn>;
  content: IContentSignIn;
  formFields: IInputForm[];
}

export default IAuthFormProps;
