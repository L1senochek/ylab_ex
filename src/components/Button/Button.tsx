import React from 'react';
import styles from './button.module.scss';
import IButton from '@/model/Button';

const Button: React.FC<IButton> = ({ className, ...props }): JSX.Element => {
  return (
    <button
      className={`${styles.btn}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
