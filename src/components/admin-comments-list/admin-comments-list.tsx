import { FC, useState, useEffect, ChangeEvent } from 'react';
import commentstyle from './admin-comments-list.module.css';
import deleteIcon from '../../assets/images/trash-can.svg';
import { api } from '../../api/Api';
import { TComment } from '../../types/types';
import { ReactComponent as Loader } from '../../assets/images/Loader.svg';
import inputClear from '../../ui/form-icons/input-clear.svg';

export const AdminCommentsList: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState<TComment[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [clearIcon, setClearIcon] = useState(false);

  //в Апи комментария нет даты, которая требуется для таблицы,
  //поэтому пока используется строка для верстки
  const date = new Date(Date.UTC(2022, 12, 20));

  const target = {
    hobby: 'Увлечения',
    status: 'Семья',
    job: 'Сфера',
    edu: 'Учеба',
    quote: 'Цитата',
  };

  useEffect(() => {
    setLoading(true);
    api
      .getCommentsData()
      .then((data) => {
        setComments([...data.items]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id: string, index: number) => {
    api
      .deleteComment(id)
      .then((data) => {
        //но от сервера нет респонда при удалении
        console.log('Комментарий успешно удален');
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    event.target.value === '' ? setClearIcon(false) : setClearIcon(true);
  };

  const filteredComments = comments.filter((comment) => {
    return (
      comment.from.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      comment.from.cohort.toLowerCase().includes(inputValue.toLowerCase()) ||
      comment.from.email.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  const clearInput = () => {
    setInputValue('');
    setClearIcon(false);
  };

  return (
    <div className={commentstyle.page_wrapper}>
      <form className={commentstyle.form} onSubmit={() => {}}>
        <fieldset>
          <label className={commentstyle.label}>Фильтровать</label>
          <div className={commentstyle.container_input}>
            <img
              className={commentstyle.clearIcon}
              src={inputClear}
              style={clearIcon ? { display: 'flex' } : { display: 'none' }}
              onClick={clearInput}
            />
          </div>
          <input
            value={inputValue}
            onChange={(event) => handleInputChange(event)}
            className={commentstyle.input}
            type='text'
            name='filter'
            placeholder='По имени или фамилии или почте или номеру когорты (введите любой из этих параметров)'
          />
        </fieldset>
      </form>
      {isLoading ? (
        <div className={commentstyle.loaderContainer}>
          <Loader className={commentstyle.loader} />
        </div>
      ) : filteredComments?.length ? (
        <>
          <div className={commentstyle.headings_wrapper}>
            <ul className={commentstyle.headings_list}>
              <li>Когорта</li>
              <li>Дата</li>
              <li>Отправитель</li>
              <li>Получатель</li>
              <li>Откуда комментарий</li>
              <li>Текст комментария</li>
            </ul>
          </div>
          <div className={commentstyle.list_wrapper}>
            <ul className={commentstyle.list}>
              {filteredComments.map((element, index) => (
                <li className={commentstyle.list_item} key={element._id}>
                  <p className={commentstyle.list_item_text}>{element.to.cohort}</p>
                  <p className={commentstyle.list_item_text}>
                    {date.toLocaleDateString('ru-Ru')}
                  </p>
                  <p className={commentstyle.list_item_text}>{element.from.name}</p>
                  <p className={commentstyle.list_item_text}>{element.to.name}</p>
                  <p className={commentstyle.list_item_text}>
                    {element.target ? `из блока ${target[element.target]}` : 'из визитки'}
                  </p>
                  <p className={commentstyle.list_item_text}>{element.text}</p>
                  <button
                    className={commentstyle.delete_icon}
                    type='button'
                    onClick={() => handleDelete(element._id, index)}
                  >
                    <img alt='Удалить комментарий' src={deleteIcon} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className={`${commentstyle.list_wrapper} ${commentstyle.notfound}`}>
          Не удалось никого найти. Исправьте запрос или сбросьте фильтр
        </div>
      )}
    </div>
  );
};
