import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export default IButton;
