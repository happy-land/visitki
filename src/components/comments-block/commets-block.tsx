import { FC, useEffect } from 'react';
import { EmojiBlock } from '../emoji-block/emoji-block';
import { checkResponse } from '../../utils/utils';

import styles from './comments-block.module.css';

interface ICommentsBlockProps {
  isOpen: boolean;
}

export const CommentsBlock: FC<ICommentsBlockProps> = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      fetch('/profiles/abfccdaa23e0bd1c4448d2f3/reactions')
        // fetch('/profiles/e638ad9bce6d7efd1b5b035b/reactions')   0 items
        .then((result) => checkResponse(result))
        .then((responseBody) => {
          console.log(responseBody, 'this is RESPONSE BODY');
        })
        .catch((err) => console.log(err));
    }
  }, [isOpen]);

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
              <div className={styles.line}></div>{' '}
              {/* в последнем комментарии линию не добавлять */}
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
