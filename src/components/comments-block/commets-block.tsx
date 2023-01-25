import { FC, useState, useEffect, ChangeEvent } from 'react';
import { EmojiBlock } from '../emoji-block/emoji-block';
import styles from './comments-block.module.css';
import { useForm } from '../../hooks/use-form';
import { api } from '../../api/Api';


interface ICommentsBlockProps {
  isOpen: boolean;
  target: 'hobby' | 'edu' | 'status' | 'job' | null;
  owner: boolean;
}

export const CommentsBlock: FC<ICommentsBlockProps> = ({ isOpen, target, owner }) => {
  let user: any
  const _user = localStorage.getItem("user")
	if (_user) {
		user = JSON.parse(_user)
	}

  const [ comments, setComments ] = useState(Array);
  
  const { form, handleChange, setForm } = useForm({text: ''});
  
  useEffect(() => {
    if(user.tag === 'admin' || owner === true) {
    api.getReactionsForUser(user._id)
      .then((data) => {
        setComments(data.items.filter((el: { text: string; }) => el.text));
      })
      .catch(err => console.log(err));
  }}, [isOpen])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    api.sendNewReaction(user._id, {text: form.text, target: target})
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
