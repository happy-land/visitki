import { FC } from 'react';
import { EmojiBlock } from '../emoji-block/emoji-block';
import styles from './comments-block.module.css';

interface ICommentsBlockProps {
  isOpen: boolean;
}

export const CommentsBlock: FC<ICommentsBlockProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          {/* <p>Обратная связь</p> */}
          <ul className={styles.commentsList}>
            <li className={styles.comment}>
              Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция.
              Люблю еще музыку
              <div className={styles.line}></div>
            </li>
            <li className={styles.comment}>
              Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция.
              Люблю еще музыку
              <div className={styles.line}></div> {/* в последнем комментарии линию не добавлять */}
            </li>
            <li className={styles.comment}>
              Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция.
              Люблю еще музыку
            </li>
          </ul>
          <input className={styles.input} placeholder='Обратная связь' />
          <EmojiBlock />
        </div>
      )}
    </>
  );
};
