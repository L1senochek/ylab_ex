import { FormProvider } from 'react-hook-form';
import InputForm from '@/components/InputForm/InputForm';
import Button from '@/components/Button/Button';
import styles from './auth-form.module.scss';
import IAuthFormProps from '@/model/AuthForm';

const AuthForm = ({
  content,
  formFields,
  onSubmit,
  methods,
}: IAuthFormProps): JSX.Element => {
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;

  return (
    <div className={styles['auth-form']}>
      <h2 className={styles['auth-form__title']}>{content.title}</h2>
      <FormProvider {...methods}>
        <form
          className={styles['auth-form__form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          {formFields.map((field, index) => (
            <InputForm key={index} {...field} />
          ))}
          <Button
            className={`${styles['auth-form__btn']}${
              isValid ? '' : ` ${styles['disabled']}`
            }`}
            type="submit"
            disabled={!isValid}
          >
            {content.buttonName}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AuthForm;
