import { FC, useState, MouseEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './emoji.module.css';


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
  }, [counter]);


  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    setBorder(!border);
    if (!border) {
      setCount(count! + 1);
    } else {
      setCount(counter);
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
