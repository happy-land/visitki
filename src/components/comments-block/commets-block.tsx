import { FC, useState, useEffect, ChangeEvent } from 'react';
import { EmojiBlock } from '../emoji-block/emoji-block';
import styles from './comments-block.module.css';
import { getReaction, sendReaction } from '../../utils/api';
import { useForm } from '../../hooks/use-form';


interface ICommentsBlockProps {
  isOpen: boolean;
}


export const CommentsBlock: FC<ICommentsBlockProps> = ({ isOpen }) => {
  const [ comments, setComments ] = useState([]);
  
  const { form, handleChange, setForm } = useForm({text: ''});
  
  useEffect(() => {
    getReaction()
      .then((data) => {
        setComments(data.items.filter((el: { text: string; }) => el.text));
      })
      .catch(err => console.log(err));
  }, [isOpen])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    sendReaction({text: form.text, target: null})
      .then((data) => data && setForm({text: ''}))
      .catch(err => console.log(err))
  }

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          {/* <p>Обратная связь</p> */}
          <ul className={styles.commentsList}>
            {comments?.map((element: any, index: number) => 
            <li className={styles.comment} key={index}>
              <p className={styles.text}>{element.text}</p>
              <div className={styles.line}></div>
            </li>)}
          </ul>
          <form className={styles.form} onSubmit={event => handleSubmit(event)}>
            <input 
              className={styles.input}
              placeholder="Обратная связь" 
              name="text" 
              type="text" 
              value={form.text}
              onChange={handleChange} 
            />
          </form>
          <EmojiBlock />
        </div>
      )}
    </>
  );
};
