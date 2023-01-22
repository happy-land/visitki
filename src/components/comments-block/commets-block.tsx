import { FC, useEffect, useState } from 'react';
import { EmojiBlock } from '../emoji-block/emoji-block';
import { checkResponse } from '../../utils/utils';

import styles from './comments-block.module.css';
import { TReaction, TEmotions } from '../../types/types';

interface ICommentsBlockProps {
  isOpen: boolean;
  target?: 'hobby' | 'edu' | 'status' | 'job'; // добавить остальные типы когда доделают бэкенд
}

type TReactionsData = {
  items: Array<TReaction>;
  length: number;
};


export const CommentsBlock: FC<ICommentsBlockProps> = ({ isOpen, target }) => {
  const [reactions, setReactions] = useState<Array<TReaction>>([]);
  const [emotions, setEmotions] = useState<TEmotions>();

  useEffect(() => {
    if (isOpen) {
      fetch('/profiles/abfccdaa23e0bd1c4448d2f3/reactions')
        // fetch('/profiles/e638ad9bce6d7efd1b5b035b/reactions')   0 items
        .then((result) => checkResponse<TReactionsData>(result))
        .then((responseBody) => {
          // console.log(responseBody, 'this is RESPONSE BODY');
          setReactions(responseBody.items);
          setEmotions(getEmotionsObject(responseBody.items));
        })
        .catch((err) => console.log(err));
    }
  }, [isOpen]);

  const getEmotionsObject = (reactions: Array<TReaction>):TEmotions => {
    // добавим данных для тестирования
    reactions.push(
      {
        _id: '123',
        from: { email: 'Anita93@hotmail.com', name: 'Elvira Grady', _id: '111', },
        target: 'hobby',
        text: 'text text text!',
        emotion: 'like',
      }
    );
    const emotions = reactions.reduce<TEmotions>((prevVal: TEmotions, curVal: TReaction) => {
      return {
        ...prevVal,
        [curVal.emotion!]: prevVal[curVal.emotion!]
          ? [...prevVal[curVal.emotion!], curVal]
          : [curVal]
      }
    }, {});
    console.log(emotions, 'this is EMOTIONS');
    console.log(emotions.like.length, 'this is EMOTIONS');

    return emotions;
  }

  return (
    <>
      {isOpen && emotions && (
        <div className={styles.container}>
          <ul className={styles.commentsList}>
            {reactions.map((reaction, index) => {
              return (
                <li key={index} className={styles.comment}>
                  {(reaction.target === target || reaction.target === 'edu') && (
                    <>
                      <p className={styles.comment}>{reaction.text}</p>
                      <div className={styles.line}></div>
                    </>
                  )}
                </li>
              );
            })}
            {/* <li className={styles.comment}>
              Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция.
              Люблю еще музыку {target}
              <div className={styles.line}></div>
            </li>
            <li className={styles.comment}>
              Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция.
              Люблю еще музыку
              <div className={styles.line}></div>{' '}
            </li>
            <li className={styles.comment}>
              Классные у тебя увлечения, я тоже играю в настолки, любимая игра — Эволюция.
              Люблю еще музыку. в последнем комментарии линию не добавлять
            </li> */}
          </ul>
          {/* сделать отправку сообщения на сервер когда доделают бэкенд */}
          <input className={styles.input} placeholder='Обратная связь' />
          <EmojiBlock emotions={emotions} />
        </div>
      )}
    </>
  );
};
