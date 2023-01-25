import { FC, FormEvent } from 'react';

import styles from './button.module.css';

// interface IButtonProps {
//   handleClick: (event: FormEvent) => void;
//   variant: string;
//   size?: string;
//   type: string;
//   children: any;
// }

// export const Button: FC<IButtonProps> = ({
//   handleClick,
//   variant= '',
//   size = 'large',
//   type = 'primary',
//   children
// }) => {
//   return (
//     <button className={styles.button} onClick={handleClick}>
//       {children}
//     </button>
//   );
// };

interface IButtonProps {
  handleClick?: (event: FormEvent) => void;
  size?: 'large' | 'small'; // размеры под кнопки войти (large) и загрузка файлов (small)
  children: any; // здесь я бы заменила на текст и задала бы ему параметр string
  disabled?: boolean;
  htmlType: 'button' | 'submit' | 'reset' | undefined
}

export const Button: FC<IButtonProps> = ({
  handleClick,
  size,
  children,
  disabled,
  htmlType
}) => {
  const getButtonSize = (size?: string) => size === 'large' ? styles.button_size_large : styles.button_size_small;

  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${getButtonSize(size)}`}
      onClick={handleClick}
      type={htmlType}
    >
      {children}
    </button>
  )

}