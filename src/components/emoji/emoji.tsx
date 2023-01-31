import { FC, useState, MouseEvent, useEffect } from 'react';
import styles from './emoji.module.css';
import { api } from '../../api/Api';


interface IEmojiProps {
  image: string;
  counter: number | null;
  type: 'like' | 'dislike' | 'wave' | 'smile' | 'upset' | 'funny' | 'confused' | 'scream' | 'love' | 'heart';
  target: 'hobby' | 'edu' | 'status' | 'job' | null;
  user: {
    email: string,
    cohort: string,
    _id: string,
    name: string,
    photo: string,
    tag: 'student' | 'curator',
  },
}

export const Emoji: FC<IEmojiProps> = ({ image, counter, type, user, target }) => {

  const [border, setBorder] = useState(false);
  const [count, setCount] = useState(counter);

  useEffect(() => {
    setCount(counter);
  }, [counter]);


  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setBorder(!border);
    if (!border) {
      setCount(count! + 1);
      //апи не принимает эмоджи как реакцию, ожидается только текст
      api.sendNewReaction(user._id, {emotion: type, target: target})
      .then((data) => console.log("Реакция успешно отправлена"))
      .catch(err => console.log(err))
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
