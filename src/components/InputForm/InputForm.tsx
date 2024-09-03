import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input-form.module.scss';
import IInputForm from '@/model/InputForm';
import IconEyeOn from '@/components/Icons/IconEyeOn/IconEyeOn';
import IconEyeOff from '@/components/Icons/IconEyeOff/IconEyeOff';

const InputForm: React.FC<IInputForm> = ({
  registerInput,
  registerValidation,
  classNameWrapper,
  classNameLabel,
  titleLabel,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useFormContext();
  const { register, formState } = methods;
  const errorMessage = formState.errors[registerInput]?.message || '';

  return (
    <div
      className={`${styles['input-form']}${
        classNameWrapper ? ` ${classNameWrapper}` : ''
      }`}
    >
      {titleLabel && (
        <label
          className={`${styles['input-form__label']}${
            classNameLabel ? ` ${classNameLabel}` : ''
          }`}
        >
          {titleLabel}
        </label>
      )}
      {props.type === 'password' ? (
        <div
          className={`${styles['input-form__password']} ${
            errorMessage ? styles['error-input'] : ''
          }`}
        >
          <input
            {...props}
            className={`${styles['input-form__password_input']}${
              errorMessage ? ` ${styles['error-input']}` : ''
            }`}
            {...register(registerInput)}
            type={showPassword ? 'text' : 'password'}
          />
          <button
            type="button"
            className={`${styles['input-form__password_btn']}`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IconEyeOn /> : <IconEyeOff />}
          </button>
        </div>
      ) : (
        <input
          {...props}
          className={`${styles['input-form__input']}${
            errorMessage ? ` ${styles['error-input']}` : ''
          }`}
          {...register(registerInput)}
        />
      )}
      <p
        className={`${styles['input-form__error']} ${
          errorMessage ? ` ${styles['input-form__error-visible']}` : ''
        }`}
      >
        {errorMessage.toString()}
      </p>
    </div>
  );
};

export default InputForm;
