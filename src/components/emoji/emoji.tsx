import { FC } from 'react';
import styles from './emoji.module.css';

interface IEmojiProps {
  image: string;
}

export const Emoji: FC<IEmojiProps> = ({ image }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt='' />
      <p className={styles.counter}>19</p>
    </div>
  )
}