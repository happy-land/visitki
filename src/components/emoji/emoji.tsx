import { FC, useState, MouseEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './emoji.module.css';

interface IEmojiProps {
  image: string;
  counter: number | null;
}

export const Emoji: FC<IEmojiProps> = ({ image, counter }) => {
  const [border, setBorder] = useState(false);
  const [count, setCount] = useState(counter);

  useEffect(() => {
    setCount(counter);
  }, []);

  const handleClick = () => {
    setBorder(!border);
    if (!border) {
      setCount(count! + 1);
      // при клике на смайлик отправлять POST запрос на сервер
      // {{baseUrl}}/profiles/:id/reactions
    } else {
      setCount(counter);
      // сделать  DELETE запрос на удаление реакции
    }
  };

  return (
    <div
      className={styles.container}
      onClick={() => handleClick()}
      style={border ? { border: '1px solid #ff00a8' } : { border: 'none' }}
    >
      <img className={styles.image} src={image} alt='' />
      <p className={styles.counter}>
        {count === 0 || null ? '' : count! > 99 ? '99+' : count}
      </p>
    </div>
  );
};
