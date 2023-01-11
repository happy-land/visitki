import { FC, FormEvent } from 'react';

import styles from './button.module.css';

interface IButtonProps {
  handleClick: (event: FormEvent) => void;
  variant: string;
  size?: string;
  type: string;
  children: any;
}

export const Button: FC<IButtonProps> = ({
  handleClick,
  variant= '',
  size = 'large',
  type = 'primary',
  children
}) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};
