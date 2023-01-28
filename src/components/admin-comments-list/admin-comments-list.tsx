import React, { FC, useState, useEffect } from "react";
import commentstyle from "./admin-comments-list.module.css";
import deleteIcon from "../../images/delete-icon.png";
import {api} from "../../api/Api";
import {TComment} from "../../types/types";
/*import {getStudentsApi} from '../../utils/Api'*/

// interface IComments {
//   _id: string;
//   from: { _id: string; name: string; email: string };
//   target: string;
//   text: string;
//   to: { _id: string; name: string; email: string };
// }

export const AdminCommentsList: FC = () => {
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    // axios
    //   .get("/comments")
    //   .then((response) => {
    //     setComments([...response.data.items]);
    //     console.log(response.data.items[0].to.name);
    //   })
    //   .catch((error) => console.log(error))
    //   .finally(() => {});
    api.getCommentsData().then((data) => {
      setComments([...data.items])
    })
  }, []);

  return (
    <div className={commentstyle.page_wrapper}>
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
            <li className={commentstyle.list_item} key={index}>
              <p className={commentstyle.list_item_text}>{element._id}</p>
              <p className={commentstyle.list_item_text}>{element._id}</p>
              <p className={commentstyle.list_item_text}>{element.from.name}</p>
              <p className={commentstyle.list_item_text}>{element.to.name}</p>
              <p className={commentstyle.list_item_text}>{element.target}</p>
              <p className={commentstyle.list_item_text}>{element.text}</p>
              <div className={commentstyle.delete_icon}>
                <img alt="delete icon" src={deleteIcon} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
