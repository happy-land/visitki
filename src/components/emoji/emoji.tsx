import { FC, useState, MouseEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './emoji.module.css';
import { deleteReaction, sendReaction } from '../../utils/api';

interface IEmojiProps {
  image: string;
  counter: number | null;
  type: string
}

export const Emoji: FC<IEmojiProps> = ({ image, counter, type }) => {

  const [border, setBorder] = useState(false);
  const [count, setCount] = useState(counter);

  useEffect(() => {
    setCount(counter);
  }, []);

  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const target = e.currentTarget;
    //здесь нужно присвоить id рекции по идее
    console.log(target);
    setBorder(!border);
    if (!border) {
      setCount(count! + 1)
    } else {
      setCount(counter);
    }
    if (border) {
      //а здесь удалить при повторном нажатии
      //но апи на delete только с комментариями
      //deleteReaction(id);
    }
    else {
      sendReaction({emotion: type, target: null});
    }
  
  }

  return (
    <div
      className={styles.container}
      onClick={(e) => handleClick(e)}
      style={border ? { border: '1px solid #ff00a8' } : { border: 'none' }}
    >
      <img className={styles.image} src={image} alt={type} />
      <p className={styles.counter}>
        {count === 0 || null ? '' : count! > 99 ? '99+' : count}
      </p>
    </div>
  );
};
