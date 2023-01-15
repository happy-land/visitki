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
  variant?: ''; // не очень понимаю, зачем здесь этот пропс. под девайсы стилизацию можно сделать просто медиазапросом
  size?: 'large' | 'small'; // размеры под кнопки войти (large) и загрузка файлов (small)
  type: 'primary'; // пока что этот пропс выглядит максимально избыточным)
  children: any; // здесь я бы заменила на текст и задала бы ему параметр string
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  handleClick,
  variant,
  size,
  children,
  disabled,
  type
}) => {
  const getButtonSize = (size?: string) => size === 'large' ? styles.button_size_large : styles.button_size_small;

  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${getButtonSize(size)}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )

}