import IContentField from '@/model/contentField';

interface IContentSignIn {
  title: string;
  inputEmail: IContentField;
  inputPassword: IContentField;
  buttonName: string;
}

export default IContentSignIn;
