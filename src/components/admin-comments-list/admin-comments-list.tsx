import { FC, useState, useEffect } from "react";
import commentstyle from "./admin-comments-list.module.css";
import deleteIcon from "../../assets/images/trash-can.svg";
import {api} from "../../api/Api";
import {TComment} from "../../types/types";
import { ReactComponent as Loader } from '../../assets/images/Loader.svg';

export const AdminCommentsList: FC = () => {

  const [isLoading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState<TComment[]>([]);

  //в Апи комментария нет даты, которая требуется для таблицы,
  //поэтому пока используется строка для верстки
  const date = new Date(Date.UTC(2022,12,20));

  const target = {
    hobby: 'Увлечения',
    status: 'Семья',
    job: 'Сфера',
    edu: 'Учеба',
    quote: 'Цитата'
  };

  useEffect(() => {
    setLoading(true);
    api.getCommentsData().then((data) => {
      setComments([...data.items])
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, []);

  const handleDelete = (id: string, index: number) => {
    api.deleteComment(id)
    .then((data) => {
      //но от сервера нет респонда при удалении
      console.log('Комментарий успешно удален')
    })
    .catch(err => console.log(err));
  };

  return (
    <div className={commentstyle.page_wrapper}>
 
      {isLoading 
      ? (<div className={commentstyle.loaderContainer}>
          <Loader className={commentstyle.loader}/>
        </div>) 
      : (comments?.length 
        ? (<>
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
            {comments.map((element, index) => (
              <li className={commentstyle.list_item} key={element._id}>
                <p className={commentstyle.list_item_text}>{element.to.cohort}</p>
                <p className={commentstyle.list_item_text}>{date.toLocaleDateString("ru-Ru")}</p>
                <p className={commentstyle.list_item_text}>{element.from.name}</p>
                <p className={commentstyle.list_item_text}>{element.to.name}</p>
                <p className={commentstyle.list_item_text}>{element.target ? `из блока ${target[element.target]}` : 'из визитки'}</p>
                <p className={commentstyle.list_item_text}>{element.text}</p>
                <button className={commentstyle.delete_icon} type="button" onClick={() => (handleDelete(element._id, index))}>
                  <img alt="Удалить комментарий" src={deleteIcon} />
                </button>
              </li>
            ))}
            </ul>
          </div>
        </>) 
        : 
        (<div className={`${commentstyle.list_wrapper} ${commentstyle.notfound}`} >
          Не удалось никого найти. Исправьте запрос или сбросьте фильтр
        </div>)
      )}
    </div>
  );
};
